<template>
  <div>
    <div class="row clearfix">
      <div class="col-lg-12 col-md-12">
        <div class="card">
          <div class="header">
            <h2><strong>Crypto</strong> Withdrawal</h2>
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
                        >
                          <td class="sorting_1">{{ item.sn }}</td>
                          <td>{{ item.email }}</td>
                          <td>N{{ item.withdrawamount * 480 }}</td>
                          <td>${{ item.withdrawamount }}</td>
                          <td>
                            {{ item.withdrawto }}:
                            <span style="font-size: 15px; font-weight: bold">{{
                              item.withaddress
                            }}</span>
                          </td>

                          <td>
                            <span class="badge badge-warning" v-if="item.status == 0"
                              >Initialized</span
                            >
                          </td>
                          <td>{{ item.date }}</td>
                          <td>
                            <button
                              class="btn btn-icon btn-neutral btn-icon-mini margin-0"
                              @click="select(item)"
                            >
                              <i class="fa fa-edit"></i>
                            </button>

                            <!--  <button
                              class="btn btn-icon btn-neutral btn-icon-mini margin-0"
                              @click="deleted(deposits)"
                            >
                              <i class="fa fa-trash"></i>
                            </button> -->
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
//import { toast } from "../services/toaster";

export default {
  name: "with",
  setup() {
    let state = reactive({
      dep: [],
    });

    const dep = {
      key: "adminwith",
    };

    api.post(dep).then((res) => {
      state.dep = res["data"]["deposits"];

      nextTick(function () {
        $("#example").DataTable();
      });
    });

    function select(deposits) {
      localStorage.setItem("parawithU", deposits.withdrawId);
      router.push({
        name: "pro",
        params: { id: deposits.profileid },
      });
    }
    return { state, select };
  },
};
</script>

<style lang="scss" scoped></style>
