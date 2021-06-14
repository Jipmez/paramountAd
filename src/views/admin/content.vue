<template>
  <div>
    <div class="row clearfix">
      <div class="col-lg-4 col-md-6">
        <div class="card">
          <div class="body">
            <h4 class="m-t-0 m-b-0">{{ state.admin.all }}</h4>
            <p class="m-b-0">Total clicks</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="card">
          <div class="body">
            <h4 class="m-t-0 m-b-0">{{ state.admin.users.length }}</h4>
            <p class="m-b-0">Total users</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="card">
          <div class="body">
            <h4 class="m-t-0 m-b-0">{{ state.admin.posts.length }}</h4>
            <p class="m-b-0">Total Adverts</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row clearfix">
      <div class="col-md-12">
        <div class="card">
          <div class="header">
            <h2><strong>Add/Edit post</strong></h2>
            <ul class="header-dropdown">
              <li class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-chevron-circle-down"></i>
                </a>
                <ul class="dropdown-menu slideUp">
                  <li>
                    <a
                      class="boxs-close"
                      href="#defaultModal"
                      data-toggle="modal"
                      data-target="#defaultModal"
                    >
                      Add Advert
                    </a>

                    <a
                      class="boxs-close"
                      href="#defaultModalcat"
                      data-toggle="modal"
                      data-target="#defaultModalcat"
                    >
                      Add Category
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="body">
            <div class="table-responsive social_media_table">
              <table class="table table-hover" id="use">
                <thead>
                  <tr>
                    <th>Media</th>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Clicks</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in state.admin.posts"
                    :key="item.id"
                    :id="item.postref"
                    v-bind:class="{ 'text-success': item.active == 1 }"
                  >
                    <td>
                      <span class="social_icon"
                        ><img
                          :src="item.image_url"
                          alt=""
                          style="height: 100%; width: 100%"
                      /></span>
                    </td>
                    <td>
                      <span class="list-name">{{ item.title }}</span>
                    </td>
                    <td>{{ item.type }}</td>
                    <td>{{ item.click }}</td>
                    <td>
                      <router-link :to="{ name: 'contt', params: { id: item.postref } }">
                        <i class="fa fa-eye fa-5x"></i
                      ></router-link>
                    </td>
                    <td>
                      <router-link :to="{ name: 'post', params: { id: item.postref } }">
                        <i class="fa fa-edit fa-5x"></i
                      ></router-link>
                    </td>
                    <td>
                      <a href="javascript:void(0);" @click="deleteP(item.postref)">
                        <i class="fa fa-trash fa-5x" style="color: red"></i>
                      </a>
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
      $("#use").DataTable();
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
