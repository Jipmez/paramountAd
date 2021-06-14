<template>
  <div class="profile-page">
    <div class="container-fluid">
      <div class="block-header">
        <div class="row clearfix">
          <div class="col-lg-5 col-md-5 col-sm-12">
            <h2>Profile: {{ state.user.username }}</h2>
          </div>
        </div>
      </div>
      <div class="row clearfix">
        <div class="col-lg-12 col-md-12">
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="overview">
              <div class="row" style="margin-bottom: 20px">
                <div class="col-lg-4 col-md-6 col-6">
                  <div class="card text-center">
                    <div class="body">
                      <h5
                        class="m-b-0 number count-to"
                        data-from="0"
                        data-to="1203"
                        data-speed="1000"
                        data-fresh-interval="700"
                      >
                        {{ state.user.click }}
                      </h5>
                      <small>Total Clicks</small>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-6">
                  <div class="card text-center">
                    <div class="body">
                      <h5
                        class="m-b-0 number count-to"
                        data-from="0"
                        data-to="324"
                        data-speed="1000"
                        data-fresh-interval="700"
                      >
                        $ {{ state.user.mainaccountbal }}
                      </h5>
                      <small>Balance</small>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-6">
                  <div class="card text-center">
                    <div class="body">
                      <h5
                        class="m-b-0 number count-to"
                        data-from="0"
                        data-to="1980"
                        data-speed="1000"
                        data-fresh-interval="700"
                      >
                        {{ state.user.package }}
                      </h5>
                      <small>Package</small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-3 col-6">
                  <button class="btn btn-primary btn-round" @click="DepConfirm">
                    SubConfirm
                  </button>
                </div>
                <div class="col-md-3 col-6">
                  <button class="btn btn-primary btn-round" @click="WithConfirm">
                    WithConfirm
                  </button>
                </div>
                <div class="col-md-3 col-6">
                  <button class="btn btn-primary btn-round" @click="block">
                    BlockUser
                  </button>
                </div>
                <div class="col-md-3 col-6">
                  <button class="btn btn-primary btn-round" @click="unblock">
                    UnblockUser
                  </button>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4 col-md-12">
                  <div class="card">
                    <div class="header">
                      <h2><strong>Info</strong></h2>
                    </div>
                    <div class="body">
                      <small class="text-muted">Country: </small>
                      <p>{{ state.user.country }}</p>
                      <hr />
                      <small class="text-muted">Email address: </small>
                      <p>{{ state.user.email }}</p>
                      <hr />
                      <small class="text-muted">Bitcoinaddress: </small>
                      <p>{{ state.user.bitcoinaddress }}</p>
                      <hr />
                      <small class="text-muted">Fullname: </small>
                      <p>{{ state.user.account_name }}</p>
                      <hr />
                      <small class="text-muted">Username: </small>
                      <p class="m-b-0">{{ state.user.username }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 col-md-12">
                  <div class="card">
                    <div class="header">
                      <h2><strong>Account</strong> Settings</h2>
                    </div>
                    <div class="body">
                      <div class="row clearfix">
                        <div class="col-lg-12 col-md-12">
                          <div class="form-group">
                            <input
                              type="number"
                              class="form-control"
                              v-model="state.amount"
                              placeholder="Add to Balance"
                            />
                            <button
                              class="btn btn-primary btn-round ts"
                              @click="save(state.amount, 'add')"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              v-model="state.address"
                              placeholder="Update bitcoin address"
                            />
                            <button
                              class="btn btn-primary btn-round ts"
                              @click="save(state.address, 'address')"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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
import { reactive } from "vue";
import { useRoute } from "vue-router";
import api from "../../services/call";
import { toast } from "../../services/toaster";
import store from "../../store";
export default {
  name: "pro",
  setup() {
    let state = reactive({
      user: [],
      amount: null,
      address: null,
    });
    let routee = useRoute();
    let id = routee.params.id;
    let dat = store.state.admin;
    let f = dat.users;
    f = f.filter((m) => m.profileId === id);
    state.user = f[0];
    function DepConfirm() {
      let confirm = {
        id: localStorage.getItem("depoU"),
        key: "condep",
      };
      api.post(confirm).then((res) => {
        toast.notify("success", res["data"]["message"]);
      });
    }

    function WithConfirm() {
      let confirm = {
        id: localStorage.getItem("parawithU"),
        email: state.user.email,
        key: "conwith",
      };
      api.post(confirm).then((res) => {
        toast.notify("success", res["data"]["message"]);
      });
    }

    function block() {
      let confirm = {
        id: id,
        key: "block",
      };
      api.post(confirm).then((res) => {
        toast.notify("success", res["data"]["message"]);
      });
    }

    function unblock() {
      let confirm = {
        id: id,
        key: "unblock",
      };
      api.post(confirm).then((res) => {
        toast.notify("success", res["data"]["message"]);
      });
    }

    function save(statet, value) {
      let confirm = {
        value: value,
        state: statet,
        id: id,
        key: "adchange",
      };
      api.post(confirm).then((res) => {
        if (res["data"]["code"] == 1) {
          toast.notify("success", res["data"]["message"]);
          state.amount = null;
          state.address = null;
        }
      });
    }
    return {
      DepConfirm,
      WithConfirm,
      block,
      unblock,
      state,
      save,
    };
  },
};
</script>

<style lang="scss" scoped>
.ts {
  bottom: 42px;
  overflow: visible;
  position: relative;
  float: right;
  padding: 9px 15px;
  width: 75px;
}
</style>
