<template>
  <div class="notifications-list">
    <notification-messages
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationMessages from "./NotificationMessages";
import { mapState } from "vuex";

export default {
  components: {
    NotificationMessages,
  },

  computed: mapState(["notifications"]),
};
</script>

<style>
.notifications-list {
  position: fixed;
  top: 15px;
  right: 7px;
  z-index: 99999;
  margin-right: 15px;
  /*  // width: 320px; */
}
</style>
