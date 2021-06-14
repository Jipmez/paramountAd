<template>
  <div>
    <div class="row clearfix">
      <div class="col-lg-12 col-md-12">
        <div class="card">
          <div class="header">
            <h2><strong>Support</strong> &amp; Ticket List</h2>
          </div>
          <div class="body">
            <div class="table-responsive">
              <div
                id="DataTables_Table_0_wrapper"
                class="dataTables_wrapper dt-bootstrap4 no-footer"
              >
                <div class="row">
                  <div class="col-sm-12">
                    <table
                      class="table table-bordered table-striped table-hover js-basic-example dataTable no-footer"
                      id="example"
                    >
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Email</th>
                          <th>Amount (naira)</th>
                          <th>Amount (dollar)</th>
                          <th>Pay mode</th>

                          <th>Status</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          role="row"
                          class="odd"
                          v-for="item in state.dep"
                          :key="item.sn"
                          :id="item.gateway_id"
                        >
                          <td class="sorting_1">{{ item.sn }}</td>
                          <td>{{ item.email }}</td>
                          <td>N{{ item.entered_amount }}</td>
                          <td>${{ item.amount }}</td>
                          <td>{{ item.from_currency }}</td>

                          <td>
                            <span class="badge badge-warning">{{ item.status }}</span>
                          </td>
                          <td>{{ item.created_at }}</td>
                          <td>
                            <button
                              class="btn btn-icon btn-neutral btn-icon-mini margin-0"
                              @click="select(item)"
                            >
                              <i class="fa fa-edit"></i>
                            </button>

                            <button
                              class="btn btn-icon btn-neutral btn-icon-mini margin-0"
                              @click="deleted(item)"
                            >
                              <i class="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../services/call";
import { reactive, nextTick } from "vue";
import "jquery/dist/jquery.min.js";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

import router from "../../router";
import { toast } from "../../services/toaster";

export default {
  name: "dep",
  setup() {
    let state = reactive({
      dep: [],
    });

    const dep = {
      key: "admindep",
    };

    api.post(dep).then((res) => {
      state.dep = res["data"]["deposits"];

      nextTick(function () {
        $("#example").DataTable();
      });
    });

    function select(deposits) {
      localStorage.setItem("depoU", deposits.gateway_id);
      router.push({
        name: "pro",
        params: { id: deposits.profileId },
      });
    }

    function deleted(x) {
      const dep = {
        id: x.gateway_id,
        key: "delete",
      };
      api.post(dep).then((res) => {
        if (res["data"]["code"] == 1) {
          let p = document.getElementById(x.gateway_id);
          $(p).remove();
          toast.notify("success", "Deleted");
        }
      });
    }
    return { state, select, deleted };
  },
};
</script>

<style lang="scss" scoped></style>
