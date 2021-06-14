<template>
  <div class="profile-page">
    <div class="block-header">
      <div class="row clearfix">
        <div class="col-lg-5 col-md-5 col-sm-12">
          <h2>Profile</h2>
        </div>
      </div>
    </div>
    <div class="row clearfix">
      <div class="col-lg-12 col-md-12">
        <div class="card">
          <ul class="nav nav-tabs profile_tab">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#overview"
                >Overview</a
              >
            </li>

            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#usersettings"
                >Settings</a
              >
            </li>
          </ul>
        </div>
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="overview">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-6">
                <div class="card text-center">
                  <div class="body">
                    <h5
                      class="m-b-0 number count-to"
                      data-from="0"
                      data-to="1203"
                      data-speed="1000"
                      data-fresh-interval="700"
                    >
                      {{ state.user.all }}
                    </h5>
                    <small>Total Clicks</small>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-6">
                <div class="card text-center">
                  <div class="body">
                    <h5
                      class="m-b-0 number count-to"
                      data-from="0"
                      data-to="324"
                      data-speed="1000"
                      data-fresh-interval="700"
                    >
                      {{ state.user.daily }}
                    </h5>
                    <small>Clicks today</small>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-6">
                <div class="card text-center">
                  <div class="body">
                    <h5
                      class="m-b-0 number count-to"
                      data-from="0"
                      data-to="1980"
                      data-speed="1000"
                      data-fresh-interval="700"
                    >
                      {{ state.user.weekly }}
                    </h5>
                    <small>This Week</small>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-6">
                <div class="card text-center">
                  <div class="body">
                    <h5
                      class="m-b-0 number count-to"
                      data-from="0"
                      data-to="52"
                      data-speed="1000"
                      data-fresh-interval="700"
                    >
                      {{ state.user.monthly }}
                    </h5>
                    <small>This Month</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div class="card">
                  <div class="header">
                    <h2><strong>User Information</strong></h2>
                  </div>
                  <div class="body">
                    <small class="text-muted">Country: </small>
                    <p>{{ state.user.country }}</p>
                    <hr />
                    <small class="text-muted">Username: </small>
                    <p>{{ state.user.username }}</p>
                    <hr />
                    <small class="text-muted">Email address: </small>
                    <p>{{ state.user.email }}</p>
                    <hr />
                    <small class="text-muted">Phone: </small>
                    <p>{{ state.user.phone }}</p>
                    <hr />
                    <small class="text-muted">Package: </small>
                    <p>{{ state.user.package }}</p>
                    <hr />
                    <small class="text-muted">Bitcoin Address: </small>
                    <p>{{ state.user.bitcoinaddress }}</p>
                    <hr />
                    <small class="text-muted">Signup Date: </small>
                    <p>{{ state.user.date_created }}</p>
                    <hr />
                    <small class="text-muted"
                      >Referal link: Earn $0.52 for every friend you refer with
                      this link</small
                    >
                    <p>
                      <input
                        type="text"
                        class="form-control form-control-lg blue-light-background"
                        readonly
                        :value="state.location"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div role="tabpanel" class="tab-pane" id="usersettings">
            <div class="card">
              <div class="header">
                <h2><strong>Security</strong> Settings</h2>
              </div>
              <div class="body">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Current Password"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="New Password"
                  />
                </div>
                <button class="btn btn-info btn-round">Save Changes</button>
              </div>
            </div>
            <div class="card">
              <div class="header">
                <h2><strong>Account</strong> Settings</h2>
              </div>
              <div class="body">
                <div class="row clearfix">
                  <div class="col-lg-6 col-md-12">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        :value="state.user.account_name"
                        readonly
                        placeholder="Full Name"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-12">
                    <div class="form-group">
                      <input
                        type="text"
                        :value="state.user.email"
                        readonly
                        class="form-control"
                        placeholder="E-mail"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        :value="state.user.country"
                        readonly
                        placeholder="Country"
                      />
                    </div>
                  </div>
                  <!--  <div class="col-md-12">
                    <button class="btn btn-primary btn-round">
                      Save Changes
                    </button>
                  </div> -->
                </div>
              </div>
            </div>

            <div class="card">
              <div class="header">
                <h2><strong>Bank</strong> Settings</h2>
              </div>
              <div class="body">
                <div class="row clearfix">
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Bank name"
                        :value="state.user.bank"
                        readonly
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Account number"
                        :value="state.user.accountnumber"
                        readonly
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        :value="state.user.account_name"
                        readonly
                      />
                    </div>
                  </div>
                  <div class="col-md-12" v-if="!state.user.accountnumber">
                    <button class="btn btn-primary btn-round" @click="getbank">
                      Update bank
                    </button>

                    <button
                      class="btn btn-primary btn-round"
                      style="display: none;"
                      id="moda"
                      data-toggle="modal"
                      data-target="#defaultModal"
                    >
                      Update bank
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

  <div
    class="modal fade"
    id="defaultModal"
    tabindex="-1"
    role="dialog"
    aria-modal="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="title" id="defaultModalLabel">Change bank</h4>
        </div>

        <form action="" @submit.prevent="addBank">
          <div class="modal-body">
            <div class="row clearfix">
              <div class="col-lg-12 col-md-12">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Account number"
                    v-model="state.accountn"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-md-12">
                <div class="form-group">
                  <select
                    name=""
                    id=""
                    class="form-control"
                    v-model="state.userbank"
                    required
                  >
                    <option
                      v-for="item in state.banks"
                      :key="item.id"
                      :value="item"
                      @click="bankname(item.name)"
                      >{{ item.name }}</option
                    >
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn btn-primary btn-round waves-effect"
            >
              SAVE CHANGES
            </button>

            <button
              type="button"
              class="btn btn-danger btn-simple btn-round waves-effect"
              id="clod"
              data-dismiss="modal"
            >
              CLOSE
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import store from "../../store";
import api from "../../services/call";
import { toast } from "../../services/toaster";
export default {
  name: "profile",

  setup() {
    let state = reactive({
      user: null,
      banks: [],
      accountn: null,
      userbank: [],
      location: null,
    });
    state.user = store.state.user[0];

    state.location =
      window.location.origin + "/signup?ref=" + state.user.username;

    function getbank() {
      let data = {
        key: "getbank",
      };

      api.post(data).then((x) => {
        state.banks = x["data"]["data"]["data"];
        document.getElementById("moda").click();
      });
    }

    function addBank() {
      let data = {
        bankname: state.userbank.name,
        code: state.userbank.code,
        accountn: state.accountn,
        key: "addbank",
      };

      api.post(data).then((x) => {
        if (x["data"]["code"] == 1) {
          document.getElementById("clod").click();
          toast.notify("success", x["data"]["message"]);
        } else {
          toast.notify("error", x["data"]["message"]);
        }
      });
    }

    return {
      addBank,
      getbank,
      state,
    };
  },
};
</script>
