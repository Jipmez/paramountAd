<template>
  <div :class="typeClass" class="alert fade show toasst" role="alert">
    {{ notification.message }}
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["notification"],

  data() {
    return {
      timeout: null,
    };
  },

  computed: {
    typeClass() {
      return `toasst-${this.notification.type}`;
    },
  },

  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 3000);
  },

  beforeUnmount() {
    clearTimeout(this.timeout);
  },

  methods: mapActions(["removeNotification"]),
};
</script>

<style lang="scss" scoped>
.toasst {
  display: grid;
  align-items: center;
  -webkit-animation-duration: 0.15s;
  animation-duration: 0.15s;
  margin: 0.5em 0;
  border-radius: 0.5em;
  pointer-events: auto;
  color: #ffffff;
  min-height: 3em;
  cursor: pointer;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 0.5em 2em;
  word-break: break-word;
}

.toasst-success {
  background-color: #28a745;
}

.toasst-error {
  background-color: #dc3545;
}

.toasst-warning {
  background-color: #ffc107;
}

.toasst-info {
  background-color: #17a2b8;
}
</style>
