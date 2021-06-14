<template>
  <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="aos-init aos-animate">
            <h1>Innovative <span>Solutions </span></h1>
            <h2>The new level in <span>advertising</span></h2>
            <div class="d-flex">
              <a
                href="https://api.whatsapp.com/send?phone=447723854663"
                class="btn-get-started scrollto"
                style="height: 64px; min-width: 155px; text-align: center; line-height: 2.6rem;"
              >
                <img
                  src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
                  style="height: 20px;"
                  alt=""
                />
                Sell</a
              >

              <router-link
                to="/signup"
                class="ssc_button scrollto"
                v-if="state.logged == 0"
                style="height: 64px; min-width: 155px; text-align: center;"
                >Promote</router-link
              >

              <router-link
                to="/dash"
                class="ssc_button scrollto"
                v-if="state.logged == 1"
                style="height: 64px; min-width: 155px; text-align: center;"
                >Dashboard</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </section>

  <main id="main">
    <!-- ======= Featured Services Section ======= -->
    <section id="featured-services" class="featured-services">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
          >
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><i class="fa fa-check-double"></i></div>
              <h4 class="title"><a href="">Sell</a></h4>
              <p class="description">
                Grow your sales with the Paramount Adverts .
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
          >
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="fa fa-ad"></i></div>
              <h4 class="title"><a href="">Promote & Earn</a></h4>
              <p class="description">
                Find top-performing products to promote, earn with just a click
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
          >
            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><i class="fa fa-chevron-double-right"></i></div>
              <h4 class="title"><a href="">Passive income</a></h4>
              <p class="description">
                Generate passive income with just a click
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
          >
            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div class="icon"><i class="fa fa-user-headset"></i></div>
              <h4 class="title"><a href="">Client support</a></h4>
              <p class="description">
                Amazing client support, respond to your every need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Featured Services Section -->

    <section id="clients" class="clients section-bg">
      <div class="container aos-init aos-animate" data-aos="zoom-in">
        <div class="row">
          <div
            class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
          >
            <img
              src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/clients/client-1.png"
              class="img-fluid"
              alt=""
            />
          </div>

          <div
            class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
          >
            <img
              src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/clients/client-2.png"
              class="img-fluid"
              alt=""
            />
          </div>

          <div
            class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
          >
            <img
              src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/clients/client-3.png"
              class="img-fluid"
              alt=""
            />
          </div>

          <div
            class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
          >
            <img
              src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/clients/client-4.png"
              class="img-fluid"
              alt=""
            />
          </div>

          <div
            class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
          >
            <img
              src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/clients/client-5.png"
              class="img-fluid"
              alt=""
            />
          </div>

          <div
            class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
          >
            <img
              src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/clients/client-6.png"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ======= About Section ======= -->
    <section id="about" class="about section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>About</h2>
          <h3>Find Out More <span>About Us</span></h3>
          <p>
            QUALITY, SPEED AND RESULT
          </p>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="zoom-out" data-aos-delay="100">
            <img src="@/assets/image/man.png" class="img-fluid" alt="" />
          </div>
          <div
            class="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>
              Work for the result
            </h3>
            <p class="font-italic">
              We'll help your business to get on a new stage!
            </p>
            <ul>
              <li>
                <i class="fa fa-user"></i>
                <div>
                  <h5>Click-Through Rate</h5>
                  Our customer base is always growing, because the result of our
                  work brings money. we find way to make you earn with just one
                  click
                </div>
              </li>
              <li>
                <i class="fa fa-chevron-double-right"></i>
                <div>
                  <h5>Generate trafic</h5>
                  <p>
                    Generate traffic on your website through our sponsored
                    adverts
                  </p>
                </div>
              </li>
            </ul>
            <!--  <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p> -->
          </div>
        </div>
      </div>
    </section>
    <!-- End About Section -->

    <!-- ======= Pricing Section ======= -->
    <section id="pricing" class="pricing">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Pricing</h2>
          <h3>Check our <span>Pricing</span></h3>
          <p>
            Whether you are a super affiliate or just beginning your marketing
            career or simply want to earn, there’s never a bad time to get
            started with ParamountAd
          </p>
        </div>

        <div class="row">
          <div
            class="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="box">
              <h3>Free</h3>
              <h4><sup>$</sup>0</h4>
              <ul>
                <li>
                  <h6><sup>$</sup>0.04<span> / click</span></h6>
                </li>
                <li>5 clicks / day</li>
                <li>Min. Withdrawal : $1.4</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">Subscribe</a>
              </div>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="box">
              <h3>Starter</h3>
              <h4><sup>$</sup>21</h4>
              <ul>
                <li>
                  <h6><sup>$</sup>0.06<span> / click</span></h6>
                </li>
                <li>5 clicks / day</li>
                <li>Min. Withdrawal : $2.1</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">Subscribe</a>
              </div>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 mt-4 mt-md-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="box featured">
              <h3>Regular</h3>
              <h4><sup>$</sup>50</h4>
              <ul>
                <li>
                  <h6><sup>$</sup>0.21<span> / click</span></h6>
                </li>
                <li>5 clicks / day</li>
                <li>Min. Withdrawal : $7.35</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">Subscribe</a>
              </div>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="box">
              <h3>Advanced</h3>
              <h4><sup>$</sup>150</h4>
              <ul>
                <li>
                  <h6><sup>$</sup>0.85<span> / click</span></h6>
                </li>
                <li>5 clicks / day</li>
                <li>Min. Withdrawal : $29.75</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">Subscribe</a>
              </div>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="box">
              <span class="advanced">Ultimate</span>
              <h3>Ultimate</h3>
              <h4><sup>$</sup>209</h4>
              <ul>
                <li>
                  <h6><sup>$</sup>1.27<span> / click</span></h6>
                </li>
                <li>5 clicks / day</li>
                <li>Min. Withdrawal : $44.25</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">Subscribe</a>
              </div>
            </div>
          </div>
        </div>

        <div class="section-title">
          <p>
            NB: All subscription lasts for six months
          </p>
        </div>
      </div>
    </section>
    <!-- End Pricing Section -->
  </main>
</template>

<script>
import api from "../services/call";
import { reactive } from "vue";
import router from "../router";
import { toast } from "../services/toaster";
export default {
  name: "Home",

  setup() {
    const state = reactive({
      errors: [],
      email: null,
      password: null,
      logged: null,
    });

    function validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    if (api.checkuser() == true) {
      state.logged = 1;
    } else {
      state.logged = 0;
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
      names: ["foo", "bar", "baz"],
    };
  },
};
</script>

<style lang="scss">
@import "../styles/scss/css/main.scss";

.icon {
  text-align: center;
}
.box {
  margin-bottom: 15px;
}
</style>
