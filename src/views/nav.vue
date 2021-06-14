<template>
  <div class="blog-page index-isotope v3">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      style="background: #1f1f1f !important; min-height: 80px; padding: 10px !important"
    >
      <div class="container d-flex align-items-center justify-content-between">
        <router-link to="/" class="navbar-brand">
          <img
            src="https://www.wrraptheme.com/templates/alpino/horizontal/assets/images/logo.svg"
            width="40"
            alt=""
          />
          <span style="font-size: 1.714em">ParamountAds<span></span></span>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fa fa-bars" style="color: white"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link text-white" href="#about"
                >About <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item active">
              <a class="nav-link text-white" href="#pricing">Package</a>
            </li>
            <li class="nav-item">
              <router-link to="/ads" class="nav-link text-white">Adverts</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Join
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/login" class="dropdown-item">Login</router-link>
                <router-link to="/signup" class="dropdown-item">Signup</router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>

    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-6 footer-contact">
              <h3>ParamountAd.</h3>
              <!--  <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"
                  ><i class="bx bxl-instagram"></i
                ></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div> -->
              <p>
                A108 Adam Street <br />
                United Kingdom, UK 535022<br />
                Wrexham. <br /><br />
                <strong>Phone:</strong> +447823560510<br />
                <strong>Email:</strong> support@paramountad.com<br />
                <strong>Open:</strong> 8:00 - 6:00 Everyday<br />
              </p>
            </div>

            <div class="col-lg-4 col-md-4 footer-links">
              <h4>Earn with Paramountad</h4>
              <ul>
                <li>
                  <router-link to="/">
                    <i class="fa fa-chevron-right"></i> Home
                  </router-link>
                </li>
                <li>
                  <router-link to="/login">
                    <i class="fa fa-chevron-right"></i> Promote</router-link
                  >
                </li>
                <li>
                  <i class="fa fa-chevron-right"></i>
                  <a href="https://api.whatsapp.com/send?phone=447723854663">Sell</a>
                </li>
              </ul>
            </div>

            <!--  <div class="col-lg-3 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div> -->
          </div>
        </div>
      </div>

      <div class="container py-4">
        <div class="copyright">
          &copy; Copyright <strong><span>ParamountAd</span></strong
          >. All Rights Reserved
        </div>
      </div>
    </footer>
    <!-- End Footer -->
  </div>
</template>

<script>
import api from "../services/call";
import { reactive } from "vue";
import router from "../router";
import { toast } from "../services/toaster";
export default {
  name: "nav",

  setup() {
    const state = reactive({ errors: [], email: null, password: null });

    function validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    function login() {
      if (!this.validEmail(state.email)) {
        state.errors.push("Valid email required.");
      }

      let post = {
        email: state.email,
        password: state.password,
        key: "log",
      };

      api.post(post).then((res) => {
        if (res["data"]["auth"] == true) {
          let session = res["data"]["token"];
          localStorage.setItem("sid", session);
          toast.notify("error", "Logged in");
          router.push({ path: "/dashadmin" });
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
