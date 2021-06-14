<template>
  <div class="authentication">
    <div class="container">
      <div class="col-md-12 content-center">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="company_detail">
              <h4 class="logo">
                <router-link to="/" style="color: white !important;">
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
                <h5>Forgot Password?</h5>
                <span
                  >Enter your e-mail address below to reset your password.</span
                >
              </div>
              <form class="form" @submit.prevent="forgotPass">
                <div class="input-group mb-0">
                  <input
                    type="text"
                    class="form-control"
                    v-model="state.email"
                    required
                    placeholder="Enter Email"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text"
                      ><i class="fa fa-envelope"></i
                    ></span>
                  </div>
                </div>
                <div class="footer">
                  <button
                    type="submit"
                    :disabled="!formdone"
                    class="btn btn-primary btn-round btn-block"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
              <a href="javascript:void(0);" class="link">Need Help?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";

import api from "../services/call";
//import router from "../router";
import { toast } from "../services/toaster";
export default {
  name: "forgot",
  setup() {
    let state = reactive({
      email: null,
    });

    var formdone = computed(() => {
      return state.email;
    });

    function forgotPass() {
      console.log("ds");
      var emailRe = /^.+@.+\..{2,4}$/;
      if (state.email.match(emailRe)) {
        let forgot = {
          email: state.email,
          key: "forgot",
        };
        api.post(forgot).then((res) => {
          if (res["data"]["code"] == 1) {
            toast.notify("success", "Mail sent");
          } else if (res["data"]["code"] == 2) {
            toast.notify("warning", "inpute correct email");
          }
        });
      }
    }
    return {
      forgotPass,
      formdone,
      state,
    };
  },
};
</script>

<style lang="scss" scoped></style>
