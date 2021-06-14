<template>
  <div :key="state.componentKey">
    <div class="block-header">
      <div class="row clearfix">
        <div class="col-lg-5 col-md-5 col-sm-12">
          <h2>Pricing</h2>
        </div>
      </div>
    </div>

    <div class="row clearfix" v-if="state.done == 0 && state.toPay.length == 0">
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card">
          <ul class="pricing body">
            <li><big>Start</big></li>
            <li>
              <h6><sup>$</sup>0.06<span> / click</span></h6>
            </li>
            <li>5 clicks / day</li>
            <li>Min. Withdrawal : $2.1</li>
            <li>
              <h3>$21</h3>
            </li>
            <li>
              <button class="btn btn-primary btn-round btn-simple" @click="subscribe(1)">
                Subscribe
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card">
          <ul class="pricing body active">
            <li><big>Regular</big></li>
            <li>
              <h6><sup>$</sup>0.21<span> / click</span></h6>
            </li>
            <li>5 clicks / day</li>
            <li>Min. Withdrawal : $7.35</li>
            <li>
              <h3>$50</h3>
            </li>
            <li>
              <button class="btn btn-primary btn-round" @click="subscribe(2)">
                Join Now
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card">
          <ul class="pricing body">
            <li><big>Advanced</big></li>
            <li>
              <h6><sup>$</sup>0.85<span> / click</span></h6>
            </li>
            <li>5 clicks / day</li>
            <li>Min. Withdrawal : $29.75</li>
            <li>
              <h3>$150</h3>
            </li>
            <li>
              <button class="btn btn-primary btn-round btn-simple" @click="subscribe(3)">
                Join Now
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card">
          <ul class="pricing body">
            <li><big>Ultimate</big></li>
            <li>
              <h6><sup>$</sup>1.27<span> / click</span></h6>
            </li>
            <li>5 clicks / day</li>
            <li>Min. Withdrawal : $44.25</li>
            <li>
              <h3>$209</h3>
            </li>
            <li>
              <button class="btn btn-primary btn-round btn-simple" @click="subscribe(4)">
                Join Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="state.done == 1">
      <div class="row justify-content-center" v-for="item in state.cryp" :key="item.sn">
        <div class="col-sm-6 mb-3">
          <p class="h6 mb-2">
            <a
              class="btn btn-dark btn-sm"
              style="color: white"
              @click="cancelO(item.gateway_id)"
              >Cancel My Order</a
            >
          </p>
          <div class="card shadow-lg">
            <div class="">
              <div class="p-t-30 p-b-10 text-center">
                <div class="">
                  <img id="qrcode" :src="item.qrcode" height="200" />
                </div>
                <h2 class="text-center p-t-10">{{ item.amount }}</h2>
              </div>

              <div class="bg-dark rounded-bottom card-body text-white">
                <p class="opacity-75 text-center">
                  subscribe ${{ item.amount }} Send to address or scan QR Code
                </p>

                <input
                  type="text"
                  id="address"
                  class="form-control form-control-lg mt-2 mb-2"
                  :value="item.address"
                  readonly=""
                />
                <button
                  class="btn btn-primary btn-block btn-lg my-link-copy mb-2"
                  data-clipboard-target="#my-link-m"
                >
                  COPY
                </button>
                <div class="rounded p-3 bg-white-translucent">
                  <p class="font-size-sm mb-0">
                    <span class="text-primary">ATTENTION</span> - Please send ${{
                      item.name
                    }}
                    with priority mining fee, otherwise it may take a long time to confirm
                    the payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="state.toPay.length > 0 && state.toPay[0].from_currency != 'Card'">
      <div class="row justify-content-center">
        <div class="col-sm-6 mb-3">
          <p class="h6 mb-2">
            <a
              class="btn btn-dark btn-sm"
              style="color: white"
              @click="cancelO(state.toPay[0].gateway_id)"
              >Cancel My Order</a
            >
          </p>
          <div class="card shadow-lg">
            <div class="">
              <div class="p-t-30 p-b-10 text-center">
                <div class="">
                  <img id="qrcode" :src="state.address.qrcode" height="200" />
                </div>
                <h2 class="text-center p-t-10">{{ state.toPay[0].amount }}</h2>
              </div>

              <div class="bg-dark rounded-bottom card-body text-white">
                <p class="opacity-75 text-center">
                  To Subscribe ${{ state.toPay[0].amount }} Send to address or scan QR
                  Code
                </p>

                <input
                  type="text"
                  id="address"
                  class="form-control form-control-lg mt-2 mb-2"
                  :value="state.address.address"
                  readonly=""
                />
                <button
                  class="btn btn-primary btn-block btn-lg my-link-copy mb-2"
                  data-clipboard-target="#my-link-m"
                >
                  COPY
                </button>
                <div class="rounded p-3 bg-white-translucent">
                  <p class="font-size-sm mb-0">
                    <span class="text-primary">ATTENTION</span> - Please send
                    {{ state.address.name }} with priority mining fee, otherwise it may
                    take a long time to confirm the payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      data-toggle="modal"
      data-target="#defaultModal"
      id="dModal"
      style="display: none"
    ></button>

    <div
      class="modal fade"
      id="defaultModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ModalpayTitle"
      aria-hidden="true"
      style="overflow: scroll"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form @submit.prevent="process" method="post">
            <div class="modal-body">
              <p style="color: blue">
                WHAT DO YOU WANT TO INVEST WITH ?
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </p>

              <div class="row">
                <div class="col-md-3 col-6" v-if="state.user.country == 'Nigerian'">
                  <input
                    class="checkbox-tools"
                    type="radio"
                    name="tools"
                    v-model="state.processor"
                    id="tool-0"
                    value="Card"
                  />
                  <label class="for-checkbox-tools" for="tool-0">
                    <div class="serv_icon">
                      <img
                        src="@/assets/icon/card.svg"
                        style="width: 100%; height: 100%"
                        alt=""
                      />
                    </div>
                    <div class="service-content">
                      <h6 class="d-blue bold">Card</h6>
                    </div>
                  </label>
                </div>
                <div class="col-md-3 col-6">
                  <input
                    class="checkbox-tools"
                    type="radio"
                    name="tools"
                    v-model="state.processor"
                    id="tool-1"
                    value="BTC"
                  />
                  <label class="for-checkbox-tools" for="tool-1">
                    <div class="serv_icon">
                      <img
                        src="https://itsconvey.com/assets/icon/btc.svg"
                        style="width: 100%; height: 100%"
                        alt=""
                      />
                    </div>
                    <div class="service-content">
                      <h6 class="d-blue bold">BITCOIN</h6>
                    </div>
                  </label>
                </div>
                <div class="col-md-3 col-6">
                  <input
                    class="checkbox-tools"
                    type="radio"
                    name="tools"
                    v-model="state.processor"
                    id="tool-2"
                    value="ETH"
                  />
                  <label class="for-checkbox-tools" for="tool-2">
                    <div class="serv_icon">
                      <img
                        src="https://itsconvey.com/assets/icon/eth.svg"
                        style="width: 100%; height: 100%"
                        alt=""
                      />
                    </div>
                    <div class="service-content">
                      <h6 class="d-blue bold">ETHER</h6>
                    </div>
                  </label>
                </div>
                <div class="col-md-3 col-6">
                  <input
                    class="checkbox-tools"
                    type="radio"
                    name="tools"
                    v-model="state.processor"
                    id="tool-3"
                    value="TRX"
                  />
                  <label class="for-checkbox-tools" for="tool-3">
                    <div class="serv_icon">
                      <img
                        src="https://itsconvey.com/assets/icon/trx.svg"
                        style="width: 100%; height: 100%"
                        alt=""
                      />
                    </div>
                    <div class="service-content">
                      <h6 class="d-blue bold">TRON</h6>
                    </div>
                  </label>
                </div>
                <div class="col-md-3 col-6">
                  <input
                    class="checkbox-tools"
                    type="radio"
                    name="tools"
                    v-model="state.processor"
                    id="tool-4"
                    value="LTC"
                  />
                  <label class="for-checkbox-tools" for="tool-4">
                    <div class="serv_icon">
                      <img
                        src="https://itsconvey.com/assets/icon/ltc.svg"
                        style="width: 100%; height: 100%"
                        alt=""
                      />
                    </div>
                    <div class="service-content">
                      <h6 class="d-blue bold">LITECOIN</h6>
                    </div>
                  </label>
                </div>
                <div class="col-md-3 col-6">
                  <input
                    class="checkbox-tools"
                    type="radio"
                    name="tools"
                    v-model="state.processor"
                    id="tool-5"
                    value="BNB"
                  />
                  <label class="for-checkbox-tools" for="tool-5">
                    <div class="serv_icon">
                      <img
                        src="https://itsconvey.com/assets/icon/bnb.svg"
                        style="width: 100%; height: 100%"
                        alt=""
                      />
                    </div>
                    <div class="service-content">
                      <h6 class="d-blue bold">BINANCE</h6>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary" :disabled="!check">
                Proceed
              </button>
              <button
                type="button"
                id="dclose"
                class="btn btn-danger btn-simple btn-round waves-effect"
                data-dismiss="modal"
                style="display: none"
              >
                CLOSE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import api from "../../services/call";
import store from "../../store";
import { useRoute } from "vue-router";
import router from "../../router";
import { toast } from "../../services/toaster";
export default {
  name: "price",

  setup() {
    const rot = useRoute();
    const state = reactive({
      plan: null,
      amount: null,
      processor: null,
      user: null,
      conponentKey: 0,
      done: 0,
      toPay: [],
      cryp: [],
      address: [],
    });

    let datt = rot.meta.getPayy;
    state.toPay = datt.pln;
    if (state.toPay.length > 0) {
      if (state.toPay[0].from_currency == "Card") {
        window.open(state.toPay[0].gateway_url, "_blank");
      }
    }

    state.address = datt.address;

    state.user = store.state.user[0];
    function subscribe(data) {
      if (data == 1) {
        state.plan = "starter";
        state.amount = 21;
      }

      if (data == 2) {
        state.plan = "regular";
        state.amount = 50;
      }

      if (data == 3) {
        state.plan = "advanced";
        state.amount = 150;
      }

      if (data == 4) {
        state.plan = "ultimate";
        state.amount = 209;
      }

      document.getElementById("dModal").click();
    }

    let check = computed(() => {
      return state.processor;
    });

    function cancelO(x) {
      let cancel = {
        key: "cancel",
        id: x,
      };

      api.post(cancel).then((res) => {
        if (res["data"]["code"] == 1) {
          toast.notify("success", res["data"]["message"]);
          router.push({ path: "/dash" });
        }
      });
    }

    function process() {
      let pay = {
        plan: state.plan,
        amount: state.amount,
        processor: state.processor,
        key: "pay",
      };

      api.post(pay).then((x) => {
        if (x["data"]["code"] == 1) {
          let link = x["data"]["data"]["data"]["link"];
          document.getElementById("dclose").click();
          let linkk = link;
          window.open(linkk, "_blank");
        }

        if (x["data"]["code"] == 2) {
          state.cryp = x["data"]["data"];
          state.cryp[0]["amount"] = x["data"]["amount"];

          document.getElementById("dclose").click();
          state.done = 1;
        }
      });
    }
    return {
      process,
      subscribe,
      check,
      cancelO,
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
:root {
  --white: #ffffff;
  --light: #f0eff3;
  --black: #000000;
  --dark-blue: #1f2029;
  --dark-light: #353746;
  --red: #da2c4d;
  --yellow: #f8ab37;
  --grey: #ecedf3;
}

p {
  font-family: "Poppins", sans-serif;
  font-size: 17px;
  line-height: 30px;
  color: var(--white);
  letter-spacing: 1px;
  font-weight: 500;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
::selection {
  color: var(--white);
  background-color: var(--black);
}
::-moz-selection {
  color: var(--white);
  background-color: var(--black);
}
mark {
  color: var(--white);
  background-color: var(--black);
}
.section {
  position: relative;
  width: 100%;
  display: block;
  text-align: center;
  margin: 0 auto;
}
.over-hide {
  overflow: hidden;
}
.z-bigger {
  z-index: 100 !important;
}

.background-color {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-blue);
  z-index: 1;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.checkbox:checked ~ .background-color {
  background-color: var(--white);
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked),
[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
  width: 0;
  height: 0;
  visibility: hidden;
}
.checkbox:checked + label,
.checkbox:not(:checked) + label {
  position: relative;
  width: 70px;
  display: inline-block;
  padding: 0;
  margin: 0 auto;
  text-align: center;
  margin: 17px 0;
  margin-top: 100px;
  height: 6px;
  border-radius: 4px;
  background-image: linear-gradient(298deg, var(--red), var(--yellow));
  z-index: 100 !important;
}
.checkbox:checked + label:before,
.checkbox:not(:checked) + label:before {
  position: absolute;
  font-family: "unicons";
  cursor: pointer;
  top: -17px;
  z-index: 2;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.checkbox:not(:checked) + label:before {
  content: "\eac1";
  left: 0;
  color: var(--grey);
  background-color: var(--dark-light);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(26, 53, 71, 0.07);
}
.checkbox:checked + label:before {
  content: "\eb8f";
  left: 30px;
  color: var(--yellow);
  background-color: var(--dark-blue);
  box-shadow: 0 4px 4px rgba(26, 53, 71, 0.25), 0 0 0 1px rgba(26, 53, 71, 0.07);
}

.checkbox:checked ~ .section .container .row .col-12 p {
  color: var(--dark-blue);
}

.checkbox-tools:checked + label,
.checkbox-tools:not(:checked) + label {
  text-align: center;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  text-transform: uppercase;
  color: var(--white);
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
  border-radius: 10px;
  background-color: #fff;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0 5px 40px 0 rgba(0, 0, 0, 11%);
  border: none;
  padding: 5px 20px;
  margin-bottom: 30px !important;

  .serv_icon {
    // border: 2px solid #0f6de2;
    position: relative;
    margin: 0 auto;
    margin-top: 0px;
    max-width: 100px !important;
    line-height: 50px;
    border-radius: 50%;
    padding: 5px;
    transition: all 11s ease-in-out;
  }
}
.checkbox-tools:not(:checked) + label {
  background-color: var(--dark-light);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.checkbox-tools:checked + label {
  background-color: #173b67;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-tools:not(:checked) + label:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-tools:checked + label::before,
.checkbox-tools:not(:checked) + label::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-image: linear-gradient(298deg, var(--red), var(--yellow));
  z-index: -1;
}
.checkbox-tools:checked + label .uil,
.checkbox-tools:not(:checked) + label .uil {
  font-size: 24px;
  line-height: 24px;
  display: block;
  padding-bottom: 10px;
}

.checkbox:checked
  ~ .section
  .container
  .row
  .col-12
  .checkbox-tools:not(:checked)
  + label {
  background-color: var(--light);
  color: var(--dark-blue);
  box-shadow: 0 1x 4px 0 rgba(0, 0, 0, 0.05);
}

.checkbox-budget:checked + label,
.checkbox-budget:not(:checked) + label {
  position: relative;
  display: inline-block;
  padding: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 260px;
  font-size: 52px;
  line-height: 52px;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0 auto;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  text-transform: uppercase;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
  -webkit-text-stroke: 1px var(--white);
  text-stroke: 1px var(--white);
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  color: transparent;
}
.checkbox-budget:not(:checked) + label {
  background-color: var(--dark-light);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.checkbox-budget:checked + label {
  background-color: transparent;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-budget:not(:checked) + label:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-budget:checked + label::before,
.checkbox-budget:not(:checked) + label::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-image: linear-gradient(138deg, var(--red), var(--yellow));
  z-index: -1;
}
.checkbox-budget:checked + label span,
.checkbox-budget:not(:checked) + label span {
  position: relative;
  display: block;
}
.checkbox-budget:checked + label span::before,
.checkbox-budget:not(:checked) + label span::before {
  position: absolute;
  content: attr(data-hover);
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  -webkit-text-stroke: transparent;
  text-stroke: transparent;
  -webkit-text-fill-color: var(--white);
  text-fill-color: var(--white);
  color: var(--white);
  -webkit-transition: max-height 0.3s;
  -moz-transition: max-height 0.3s;
  transition: max-height 0.3s;
}
.checkbox-budget:not(:checked) + label span::before {
  max-height: 0;
}
.checkbox-budget:checked + label span::before {
  max-height: 100%;
}

.checkbox:checked
  ~ .section
  .container
  .row
  .col-xl-10
  .checkbox-budget:not(:checked)
  + label {
  background-color: var(--light);
  -webkit-text-stroke: 1px var(--dark-blue);
  text-stroke: 1px var(--dark-blue);
  box-shadow: 0 1x 4px 0 rgba(0, 0, 0, 0.05);
}

.checkbox-booking:checked + label,
.checkbox-booking:not(:checked) + label {
  position: relative;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-align: center;
  padding: 0;
  padding: 6px 25px;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 1px;
  margin: 0 auto;
  margin-left: 6px;
  margin-right: 6px;
  margin-bottom: 16px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  color: var(--white);
  text-transform: uppercase;
  background-color: var(--dark-light);
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.checkbox-booking:not(:checked) + label::before {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.checkbox-booking:checked + label::before {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-booking:not(:checked) + label:hover::before {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-booking:checked + label::before,
.checkbox-booking:not(:checked) + label::before {
  position: absolute;
  content: "";
  top: -2px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  border-radius: 4px;
  z-index: -2;
  background-image: linear-gradient(138deg, var(--red), var(--yellow));
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.checkbox-booking:not(:checked) + label::before {
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
}
.checkbox-booking:checked + label::after,
.checkbox-booking:not(:checked) + label::after {
  position: absolute;
  content: "";
  top: -2px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  border-radius: 4px;
  z-index: -2;
  background-color: var(--dark-light);
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.checkbox-booking:checked + label::after {
  opacity: 0;
}
.checkbox-booking:checked + label .uil,
.checkbox-booking:not(:checked) + label .uil {
  font-size: 20px;
}
.checkbox-booking:checked + label .text,
.checkbox-booking:not(:checked) + label .text {
  position: relative;
  display: inline-block;
  -webkit-transition: opacity 300ms linear;
  transition: opacity 300ms linear;
}
.checkbox-booking:checked + label .text {
  opacity: 0.6;
}
.checkbox-booking:checked + label .text::after,
.checkbox-booking:not(:checked) + label .text::after {
  position: absolute;
  content: "";
  width: 0;
  left: 0;
  top: 50%;
  margin-top: -1px;
  height: 2px;
  background-image: linear-gradient(138deg, var(--red), var(--yellow));
  z-index: 1;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.checkbox-booking:not(:checked) + label .text::after {
  width: 0;
}
.checkbox-booking:checked + label .text::after {
  width: 100%;
}

.checkbox:checked
  ~ .section
  .container
  .row
  .col-12
  .checkbox-booking:not(:checked)
  + label,
.checkbox:checked ~ .section .container .row .col-12 .checkbox-booking:checked + label {
  background-color: var(--light);
  color: var(--dark-blue);
}
.checkbox:checked
  ~ .section
  .container
  .row
  .col-12
  .checkbox-booking:checked
  + label::after,
.checkbox:checked
  ~ .section
  .container
  .row
  .col-12
  .checkbox-booking:not(:checked)
  + label::after {
  background-color: var(--light);
}

.link-to-page {
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 20000;
  cursor: pointer;
  width: 50px;
}
.link-to-page img {
  width: 100%;
  height: auto;
  display: block;
}

.d-blue {
  color: #000000;
}
</style>
