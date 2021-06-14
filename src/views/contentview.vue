<template>
  <div style="margin-top: 100px;">
    <Adview />
  </div>
</template>

<script>
import Adview from "../components/includes/adview.vue";
export default {
  name: "contentview",
  components: {
    Adview,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/css/blog.scss";
</style>
