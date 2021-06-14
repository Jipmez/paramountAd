<template>
  <router-view class="row3"></router-view>
  <loader v-if="showLoading"></loader>
  <notifications-list />
</template>

<script>
import loader from "@/components/includes/loader";
import NotificationsList from "./components/includes/NotificationsList";
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState({
      showLoading: (state) => state.loader,
    }),
  },
  components: {
    loader,
    NotificationsList,
  },
};
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  // color: #2c3e50;
  margin: 0px;
  overflow: hidden;
}

.modal-backdrop {
  display: none;
}

.ty > * {
  white-space: nowrap;
  width: 95%;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
