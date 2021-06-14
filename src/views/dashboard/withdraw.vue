<template>
  <div>
    <div class="block-header">
      <div class="row clearfix">
        <div class="col-lg-5 col-md-5 col-sm-12">
          <h2>Withdraw</h2>
        </div>
      </div>
    </div>
    <div class="bg-white shadow-sm rounded p-3 pt-sm-5 pb-sm-5 px-sm-5 mb-4">
      <div class="text-center bg-dark p-4 rounded mb-4">
        <h3 class="text-white">${{ formatPrice(state.user.mainaccountbal) }}</h3>
        <p class="text-white">Available Balance</p>
      </div>
      <form
        id="form-send-money"
        method="post"
        @submit.prevent="withdraw"
        v-if="state.user.mainaccountbal >= state.minWith"
      >
        <div class="form-group text-muted">
          <label for="withdrawto text-muted">Withdraw to</label>
          <select
            id="withdrawto"
            class="custom-select"
            required=""
            v-model="state.withto"
          >
            <option selected disabled>--Select address--</option>
            <option value="Bitcoin" selected="">
              Bitcoin :
              <span v-if="state.user.bitcoinaddress">{{
                state.user.bitcoinaddress
              }}</span>
              <span v-if="!state.user.bitcoinaddress">Update your wallet address</span>
            </option>
            <option value="Bank" v-if="state.user.country == 'Nigerian'">
              Bank :
              <span v-if="state.user.accountnumber"
                >{{ state.user.bank }} - {{ state.user.accountnumber }} -
                {{ state.user.account_name }}
              </span>
              <span v-if="!state.user.accountnumber">Update Your Bank account</span>
            </option>
          </select>
        </div>
        <div class="form-group text-muted">
          <label for="youSend">Amount</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
            </div>
            <input
              type="text"
              class="form-control"
              v-model="state.witham"
              required
              id="youSend"
              placeholder=""
            />
          </div>
        </div>
        <p class="text-muted mt-4">
          Minimum withdrawal
          <span class="float-right d-flex align-items-center"
            >{{ state.minWith }} USD</span
          >
        </p>
        <hr />
        <!--    <p class="text-muted mt-4">
          Transactions fees
          <span class="float-right d-flex align-items-center">5.00 USD</span>
        </p>
        <hr /> -->

        <button type="submit" class="btn btn-primary btn-block">Continue</button>
      </form>
      <div v-if="state.user.mainaccountbal < state.minWith">
        <p class="text-muted mt-4">
          Minimum withdrawal
          <span class="float-right d-flex align-items-center"
            >{{ state.minWith }} USD</span
          >
        </p>
        <hr />
        <div class="no-fund alert alert-danger">
          <span style="color: red">x</span>
          You don't have enough funds to withdraw
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import store from "../../store";
import api from "../../services/call";
import router from "../../router";
import { toast } from "../../services/toaster";

export default {
  name: "with",
  setup() {
    let state = reactive({
      user: null,
      minWith: null,
      withto: null,
      witham: null,
    });

    function formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    state.user = store.state.user[0];

    if (state.user.package == "free") {
      state.minWith = 1.4;
    }

    if (state.user.package == "starter") {
      state.minWith = 2.1;
    }

    if (state.user.package == "regular") {
      state.minWith = 7.35;
    }

    if (state.user.package == "advanced") {
      state.minWith = 29.75;
    }

    if (state.user.package == "ultimate") {
      state.minWith = 44.45;
    }

    function withdraw() {
      if (state.witham >= state.minWith) {
        if (state.withto == "Bank") {
          if (!state.user.accountnumber) {
            this.toastr.infoToastr("Update your Bank address");
          } else {
            if (parseInt(state.witham) <= parseInt(state.user.mainaccountbal)) {
              let mss = state.witham + state.user.mainaccountbal;
              console.log(mss);
              let me = {
                withdraw: state.witham,
                withdrawto: state.withto,
                key: "withdraw",
              };
              api.post(me).then(
                (res) => {
                  if (res["data"]["code"] == 1) {
                    toast.notify("success", res["data"]["message"]);
                    router.push({ path: "/dash" });
                  }
                  if (res["data"]["code"] == 2) {
                    toast.notify("success", res["data"]["message"]);
                  } else {
                    toast.notify("success", res["data"]["message"]);
                  }
                },
                () => {},
                () => {}
              );
            } else {
              toast.notify("info", "You cant withdraw more than you balance");
            }
          }
        }

        if (state.withto == "Bitcoin") {
          if (!state.user.bitcoinaddress) {
            toast.notify("info", "Update your address");
          } else {
            if (parseInt(state.witham) <= parseInt(state.user.mainaccountbal)) {
              let me = {
                withdraw: state.witham,
                withdrawto: state.withto,
                key: "withdraw",
              };
              api.post(me).then(
                (res) => {
                  if (res["data"]["code"] == 1) {
                    toast.notify("info", res["data"]["message"]);
                    router.push({ path: "/dash" });
                  }
                  if (res["data"]["code"] == 2) {
                    toast.notify("info", res["data"]["message"]);
                  } else {
                    toast.notify("info", res["data"]["message"]);
                  }
                },
                () => {},
                () => {}
              );
            } else {
              toast.notify("info", "You cant withdraw more than you balance");
            }
          }
        }
      } else {
        toast.notify("info", "You cant withdraw less than the minimum withdrawal");
      }
    }
    return {
      state,
      withdraw,
      formatPrice,
    };
  },
};
</script>

<style lang="scss" scoped></style>
