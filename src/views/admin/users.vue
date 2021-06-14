<template>
  <div>
    <div class="row clearfix">
      <div class="col-md-12">
        <div class="card">
          <div class="header">
            <h2><strong>All Users</strong></h2>
          </div>
          <div class="body">
            <div class="table-responsive social_media_table">
              <table
                class="table table-bordered table-striped table-hover js-basic-example dataTable no-footer"
                id="userr"
              >
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Package</th>
                    <th>Balance</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in state.admin.users"
                    :key="item.id"
                    v-bind:class="{ 'text-danger': item.status == 2 }"
                  >
                    <td>
                      {{ item.account_name }}
                    </td>
                    <td>
                      {{ item.username }}
                    </td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.country }}</td>
                    <td>
                      {{ item.package }}
                    </td>
                    <td>${{ formatPrice(item.mainaccountbal) }}</td>
                    <td>
                      <router-link :to="{ name: 'pro', params: { id: item.profileId } }"
                        ><i class="fa fa-edit fa-5x"></i
                      ></router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="defaultModal"
      tabindex="-1"
      role="dialog"
      style="display: none"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form action="" @submit.prevent="adpost">
            <div class="modal-header">
              <h4 class="title" id="defaultModalLabel">Add Advert</h4>
            </div>
            <div class="modal-body">
              <div class="col-sm-12">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="state.title"
                    placeholder="Title"
                    required
                  />
                </div>
                <div class="form-group">
                  <select name="" class="form-control" required v-model="state.postcat">
                    <option value="0" selected disabled>__category</option>
                    <option v-for="item in state.cat" :value="item.id" :key="item.id">
                      {{ item.title }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary btn-round waves-effect">
                SAVE
              </button>
              <button
                type="button"
                style="display: none"
                class="btn btn-danger btn-simple btn-round waves-effect"
                id="ds"
                data-dismiss="modal"
              >
                CLOSE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="defaultModalcat"
      tabindex="-1"
      role="dialog"
      style="display: none"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="title" id="defaultModalLabel">Add Category</h4>
          </div>
          <form @submit.prevent="adcat">
            <div class="modal-body">
              <div class="col-sm-12">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="category"
                    v-model="state.category"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary btn-round waves-effect">
                SAVE
              </button>
              <button
                type="button"
                class="btn btn-danger btn-simple btn-round waves-effect"
                id="cls"
                data-dismiss="modal"
              >
                CLOSE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../services/call";
//import { useRoute } from "vue-router";
import { reactive, onMounted, nextTick } from "vue";
import { toast } from "../../services/toaster";
import router from "../../router";
import "jquery/dist/jquery.min.js";
import store from "../../store";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

export default {
  name: "adcontent",

  setup() {
    //  const routee = useRoute();

    const state = reactive({
      cat: [],
      category: null,
      title: null,
      postcat: null,
      admin: [],
    });

    let dat = store.state.admin;
    state.admin = dat;

    nextTick(function () {
      $("#userr").DataTable();
    });

    function cat() {
      let data = {
        key: "cat",
      };
      api.post(data).then((x) => {
        state.cat = x["data"]["cat"];
      });
    }

    onMounted(() => {
      cat();
    });

    function adcat() {
      let post = {
        category: state.category,
        key: "adcat",
      };

      api.post(post).then((res) => {
        if (res["data"]["access"] == true) {
          toast.notify("success", "successfully added");
          $("#cls").click();
        } else {
          toast.notify("warning", "category already exists");
        }
      });
    }

    function adpost() {
      let post = {
        category: state.postcat,
        title: state.title,
        key: "adpo",
      };

      api.post(post).then((res) => {
        if (res["data"]["access"] == true) {
          toast.notify("success", "successfully added");
          $("#ds").click();

          router.push({ name: "post", params: { id: res["data"]["ref"] } });
        }
      });
    }

    function formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function deleteP(x) {
      const dep = {
        id: x,
        key: "deletepost",
      };
      api.post(dep).then((res) => {
        if (res["data"]["code"] == 1) {
          let p = document.getElementById(x);
          $(p).remove();
          toast.notify("success", "Deleted");
        }
      });
    }

    return {
      adcat,
      adpost,
      deleteP,
      formatPrice,
      state,
    };
  },
};
</script>

<style lang="scss">
.card {
  margin-bottom: 0px !important;
}
</style>
