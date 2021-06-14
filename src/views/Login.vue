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
             <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="state.code == 1">
                Mail confirmed
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="state.code == 2">
                Mail confirmation failed
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            <div class="card-plain">
              <div class="header">
                <h5>Log in</h5>
              </div>
               <p v-if="state.errors.length">
                  <ul style="list-style: none;" class="text-danger">
                    <li v-for="error in state.errors" v-bind:key="error">{{ error }}</li>
                  </ul>
              </p>
              <form class="form" @submit.prevent="login">
                <div class="input-group">
                  <input
                    type="email"
                    class="form-control"
                     v-model="state.email"
                    placeholder="Email"
                  />
                  <span class="input-group-addon"
                    ><i class="fa fa-user-circle"></i
                  ></span>
                </div>
                <div class="input-group">
                  <input
                    type="password"
                    placeholder="Password"
                     v-model="state.password"
                    class="form-control"
                  />
                  <span class="input-group-addon"
                    ><i class="fa fa-key"></i
                  ></span>
                </div>

                  <div class="footer">
                  <button class="btn btn-primary  btn-round btn-block" type="submit">SIGN IN</button>
             

                <router-link to="/signup"  class="btn btn-primary btn-simple btn-round btn-block">
                SIGN UP</router-link>
            
              </div>
              </form>
            <router-link to="/forgotpass" class="link">
                    Forgot Password?
            </router-link>
            
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
import store from "../store";
import { useRoute } from 'vue-router';
export default {
  name: "Login",

  setup() {

    const route = useRoute();
    const state = reactive({ errors: [], email: null, password: null, ref: null, code: null });
  state.ref = route.query.hash;
    if (state.ref) {
      let confirm = {
        hash: state.ref,
        key: "mailconfirm",
      };
   api.post(confirm ).then((res) => {
    state.code = res['data']["code"];
   })
    }


    function validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    function login() {
      var emailRe = /^.+@.+\..{2,4}$/;

    if (!state.email.match(emailRe)) {
      state.errors.push("Valid email required.");
    }

      let post = {
        email: state.email,
        password: state.password,
        key : 'log'
      };

      api.post(post).then((res) => {
        if (res["data"]["auth"] == true) {
            let session = res["data"]["token"];
          if(res["data"]["type"] == 'admin'){
              localStorage.setItem("aid", session);
              store.state.token = session;
              toast.notify("success", "Logged in");
              router.push({ path: "/dashadmin" });
              }else{
              localStorage.setItem("sid", session);
              store.state.token = session;
              toast.notify("success", "Logged in");
              router.push({ path: "/dash" });
          }
        }else{
          if(res['data']['code'] == 4){
            toast.notify("error",res["data"]["message"]);
            router.push({ path: "/resend" });
          }
          toast.notify("error",res["data"]["message"]);
        }
      });
    }

    return {
      state,
      login,
      validEmail,
    };
  },
};
</script>
