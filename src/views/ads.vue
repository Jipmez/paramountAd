<template>
  <div class="blog-page index-isotope v3" style="margin-top: 100px">
    <div class="container-fluid">
      <Adlist :username="users.user" />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRoute } from "vue-router";
import Adlist from "../components/includes/adlist.vue";
export default {
  components: { Adlist },
  name: "ads",
  component: {
    Adlist,
  },

  setup() {
    const rot = useRoute();
    let users = reactive({
      user: [],
    });

    let dat = rot.meta.ad;

    console.log(dat);
    users.user = dat;

    return {
      users,
    };
  },
};
</script>
