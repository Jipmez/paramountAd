<template>
  <div class="authentication">
    <div class="container">
      <div class="col-md-12 content-center">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="company_detail">
              <h4 class="logo">
                <router-link to="/" style="color: white !important">
                  <img
                    src="https://www.wrraptheme.com/templates/alpino/horizontal/assets/images/logo.svg"
                    alt=""
                  />
                  ParamountAd
                </router-link>
              </h4>
              <h3>The new <strong>Level</strong> In Advertising</h3>
            </div>
          </div>
          <div class="col-lg-5 col-md-12 offset-lg-1">
            <div class="card-plain">
              <div class="header">
                <h5>Resend Confirmation Mail</h5>
              </div>
              <form class="form" @submit.prevent="resend">
                <div class="input-group">
                  <input
                    type="email"
                    class="form-control"
                    v-model="state.email"
                    placeholder="Enter Your Email"
                  />
                  <span class="input-group-addon"><i class="fa fa-user-circle"></i></span>
                </div>
                <div class="footer">
                  <button
                    class="btn btn-primary btn-round btn-block"
                    type="submit"
                    :disabled="!formdone"
                  >
                    Resend
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/call";
import { reactive, computed } from "vue";
import { toast } from "../services/toaster";

export default {
  name: "email",
  setup() {
    let state = reactive({
      email: null,
    });

    var formdone = computed(() => {
      return state.email;
    });

    function resend() {
      let resend = {
        email: state.email,
        key: "resend",
      };
      api.post(resend).then((res) => {
        if (res["data"]["code"] == 1) {
          toast.notify("success", res["data"]["message"]);
          state.email = null;
        } else {
          toast.notify("error", res["data"]["message"]);
          state.email = null;
        }
      });
    }
    return {
      resend,
      state,
      formdone,
    };
  },
};
</script>

<style lang="scss" scoped></style>
