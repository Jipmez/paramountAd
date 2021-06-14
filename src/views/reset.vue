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
            <div class="card-plain" v-if="state.visible == '1'">
              <div class="header">
                <h5>Change Password</h5>
              </div>
              <form class="form" @submit.prevent="ChangePass">
                <div class="input-group">
                  <input
                    type="password"
                    class="form-control"
                    id="id_pass"
                    @change="analyze($event.target.value)"
                    v-model="state.password"
                    placeholder="Password"
                  />
                  <span class="input-group-addon"
                    ><i class="fa fa-key"></i
                  ></span>
                </div>
                <div class="input-group">
                  <input
                    type="password"
                    placeholder="Repeat"
                    v-model="state.conpass"
                    id="id_cpass"
                    class="form-control"
                  />
                  <span class="input-group-addon"
                    ><i class="fa fa-key"></i
                  ></span>
                </div>
                <div class="footer">
                  <button
                    class="btn btn-primary  btn-round btn-block"
                    type="submit"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>

            <div
              id="notify"
              class="alert alert-info"
              v-if="state.visible == '2'"
            >
              <strong>Error!</strong> Either the provided token does not match
              that on file or your time has expired. Please resubmit the
              <router-link to="forgotpass">“Forgot your password?”</router-link>
              form.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/call";
import { reactive } from "vue";
import router from "../router";
import { toast } from "../services/toaster";
import { useRoute } from "vue-router";
import store from "../store";
export default {
  name: "Login",

  setup() {
    const state = reactive({
      password: null,
      conpass: null,
      token: null,
      visible: null,
    });

    let route = useRoute();
    state.token = route.query.verify;
    if (state.token.length == 64) {
      let token = {
        token: state.token,
        key: "tokenVerify",
      };
      api.post(token).then((res) => {
        if (res["data"]["code"] == 1) {
          let bag = res["data"]["message"];
          localStorage.setItem("sid", bag);
          store.state.token = bag;
          state.visible = res["data"]["code"];
        } else if (res["data"]["code"] == 2) {
          state.visible = res["data"]["code"];
        }
      });
    } else {
      router.push({ path: "" });
    }

    function ChangePass() {
      if (api.checkuser()) {
        if (state.password === state.conpass) {
          let pass = {
            pass: state.password,
            key: "changePass",
          };
          api.post(pass).then((res) => {
            if (res["data"]["code"] == 1) {
              toast.notify("success", "Password Changed Successfully");
              router.push({ path: "/login" });
            }
          });
        } else {
          document.getElementById("id_cpass").style.borderBottom =
            "2px solid red";
          toast.notify("warning", "Password not in sync");
        }
      }
    }

    function analyze(x) {
      var strongRegex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      );
      var mediumRegex = new RegExp(
        "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
      );
      if (strongRegex.test(x)) {
        document.getElementById("id_pass").style.borderBottom =
          "2px solid green";
        toast.notify("success", "Strong Password");
      } else if (mediumRegex.test(x)) {
        document.getElementById("id_pass").style.borderBottom =
          "2px solid orange";
        toast.notify("warning", "Fairly Strong");
      } else {
        document.getElementById("id_pass").style.borderBottom = "2px solid red";
        toast.notify("warning", "Weak Password");
      }
    }

    return {
      state,
      analyze,
      ChangePass,
    };
  },
};
</script>
