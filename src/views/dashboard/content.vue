<template>
  <div>
    <div class="block-header">
      <div class="row">
        <div class="col-lg-5 col-md-5 col-sm-12">
          <div class="body m-b-10 bg-dark">
            <div class="row">
              <div class="col-6">
                <small>Total Earning</small>
                <br />
                <h4
                  class="text-success m-b-0 m-t-0"
                  style="display: inline-flex;"
                >
                  ${{ formatPrice(users.user.mainaccountbal) }}

                  <small v-if="users.user.country == 'Nigerian'">
                    <span style="font-size: 52%">
                      &asymp; &#8358;{{
                        formatPrice(users.user.mainaccountbal * 480)
                      }}</span
                    >
                  </small>
                </h4>
              </div>
              <div class="col-6 text-right text-success">
                <button
                  class="btn btn-raised btn-primary waves-effect btn-round"
                >
                  {{ users.user.package }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-7 col-sm-12">
          <div class="card">
            <div class="body" style="font-size: 11px; padding: 11px;">
              <div class="row">
                <div class="col-sm-4 col-4 m-b-10">
                  <small class="text-muted">Today</small>
                  <h5 class="m-b-0">{{ users.user.daily }}</h5>
                </div>
                <div class="col-sm-4 col-4 m-b-10">
                  <small class="text-muted">This Week</small>
                  <h5 class="m-b-0">{{ users.user.weekly }}</h5>
                </div>
                <div class="col-sm-4 col-4 m-b-10">
                  <small class="text-muted">This Month</small>
                  <h5 class="m-b-0">{{ users.user.monthly }}</h5>
                </div>
              </div>
              <div class="progress">
                <div
                  class="progress-bar l-turquoise"
                  role="progressbar"
                  :style="{ width: users.user.per + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Adlist :username="users.add" />
  </div>
</template>

<script>
import { reactive } from "vue";
import Adlist from "../../components/includes/adlist.vue";
import { useRoute } from "vue-router";

import store from "../../store";
export default {
  name: "content",
  components: {
    Adlist,
  },
  setup() {
    const rot = useRoute();
    let users = reactive({
      user: [],
      add: [],
      cat: [],
    });
    let dat = store.state.user[0];
    users.user = dat;

    let datt = rot.meta.ad;
    users.add = datt;

    function formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return {
      formatPrice,
      users,
    };
  },
};
</script>

<style lang="scss" scoped>
.body {
  font-size: 14px;
  padding: 20px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 20%);
  border-radius: 0.55rem;
  background: #fff;
  color: #616161;
  font-weight: 400;
  transition: all 0.2s ease-in-out;
}
</style>
