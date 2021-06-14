<template>
  <div>
    <article
      id="post-161"
      class="pluto-page-box post-161 post type-post status-publish format-standard has-post-thumbnail hentry category-image-text tag-jam tag-orange"
      v-for="item in state.post"
      :key="item.id"
    >
      <div class="post-body">
        <div class="single-post-top-features">
          <div class="single-post-top-share postshare">
            <i class="fa fa-share-alt share-activator-icon share-activator"></i>
            <span class="share-activator-label share-activator caption"
              >Share</span
            >
            <div class="os_social-head-w" v-if="state.log == 1">
              <div class="os_social">
                <a
                  class="os_social_twitter_share"
                  :href="
                    `http://twitter.com/share?url=${state.url}?ref=${item.shortref}${state.userId.profileId}`
                  "
                  target="_blank"
                  ><img
                    src="https://i.paramountad.com/uploads/Twitter.png"
                    title="Twitter"
                    class="os_social"
                    alt="Tweet about this on Twitter"
                /></a>
                <a
                  class="os_social_facebook_share"
                  :href="
                    `http://www.facebook.com/sharer.php?u=${state.url}?ref=${item.shortref}${state.userId.profileId}`
                  "
                  target="_blank"
                  ><img
                    src="https://i.paramountad.com/uploads/facebook.png"
                    title="Facebook"
                    class="os_social"
                    alt="Share on Whatsapp"
                /></a>
                <a
                  class="os_social_facebook_share"
                  :href="
                    `https://api.whatsapp.com/send?text=Look%20at%20this...%20%F0%9F%91%80%20${state.url}?ref=${item.shortref}${state.userId.profileId}`
                  "
                  target="_blank"
                  ><img
                    src="https://i.paramountad.com/uploads/whatsapp.svg"
                    title="Whatsapp"
                    class="os_social"
                    alt="Share on Whatsapp"
                /></a>
              </div>
            </div>

            <div class="os_social-head-w" v-if="state.log == 0">
              <div class="os_social">
                <a
                  class="os_social_twitter_share"
                  :href="
                    `http://twitter.com/share?url=${state.url}?ref=${item.shortref}TUDIOSKO`
                  "
                  target="_blank"
                  ><img
                    src="https://i.paramountad.com/uploads/Twitter.png"
                    title="Twitter"
                    class="os_social"
                    alt="Tweet about this on Twitter"
                /></a>
                <a
                  class="os_social_facebook_share"
                  :href="
                    `http://www.facebook.com/sharer.php?u=${state.url}?ref=${item.shortref}TUDIOSKO`
                  "
                  target="_blank"
                  ><img
                    src="https://i.paramountad.com/uploads/facebook.png"
                    title="facebook"
                    class="os_social"
                    alt="Share on facebook"
                /></a>
                <a
                  class="os_social_facebook_share"
                  :href="
                    `https://api.whatsapp.com/send?text=Look%20at%20this...%20%F0%9F%91%80%20${state.url}?ref=${item.shortref}TUDIOSKO`
                  "
                  target="_blank"
                  ><img
                    src="https://i.paramountad.com/uploads/whatsapp.svg"
                    title="Whatsapp"
                    class="os_social"
                    alt="Share on Whatsapp"
                /></a>
              </div>
            </div>
          </div>

          <div class="single-post-top-share linkclick">
            <span class="share-activator-label share-activator">
              <a
                :href="item.guid"
                class=" waves-effect btn-round hhyh"
                target="_blank"
              >
                VISIT
              </a>
            </span>
          </div>
        </div>

        <h1 class="post-title entry-title">
          <a href="#">{{ item.title }}</a>
        </h1>

        <div class="post-media-body">
          <div class="figure-link-w">
            <a
              :href="item.image_url"
              target="_blank"
              class="figure-link os-lightbox-activator"
            >
              <figure>
                <img
                  width="1400"
                  height="934"
                  :src="item.image_url"
                  class="attachment-full size-full wp-post-image"
                  alt=""
                />
                <div class="figure-shade"></div>
                <i class="figure-icon fa fa-eye"></i>
              </figure>
            </a>
          </div>
        </div>
        <div class="post-content entry-content" v-html="item.content"></div>
      </div>
      <div class="post-meta entry-meta">
        <div class="meta-like"></div>
        <!-- !!user Logged in -->
        <div class="os_social-foot-w hidden-xs" v-if="state.log == 1">
          <div class="os_social">
            <a
              class="os_social_twitter_share"
              :href="
                `http://twitter.com/share?url=${state.url}?ref=${item.shortref}${state.userId.profileId}`
              "
              target="_blank"
              ><img
                src="https://i.paramountad.com/uploads/Twitter.png"
                title="Twitter"
                class="os_social"
                alt="Tweet about this on Twitter"
            /></a>
            <a
              class="os_social_facebook_share"
              :href="
                `http://www.facebook.com/sharer.php?u=${state.url}?ref=${item.shortref}${state.userId.profileId}`
              "
              target="_blank"
              ><img
                src="https://i.paramountad.com/uploads/facebook.png"
                title="facebook"
                class="os_social"
                alt="Share on facebook"
            /></a>
            <a
              class="os_social_facebook_share"
              :href="
                `https://api.whatsapp.com/send?text=Look%20at%20this...%20%F0%9F%91%80%20${state.url}?ref=${item.shortref}${state.userId.profileId}`
              "
              target="_blank"
              ><img
                src="https://i.paramountad.com/uploads/whatsapp.svg"
                title="Whatsapp"
                class="os_social"
                alt="Share on Whatsapp"
            /></a>
          </div>
        </div>
        <!-- !!not logged in -->
        <div class="os_social-foot-w hidden-xs" v-if="state.log == 0">
          <div class="os_social">
            <a
              class="os_social_twitter_share"
              :href="
                `http://twitter.com/share?url=${state.url}?ref=${item.shortref}TUDIOSKO`
              "
              target="_blank"
              ><img
                src="https://i.paramountad.com/uploads/Twitter.png"
                title="Twitter"
                class="os_social"
                alt="Tweet about this on Twitter"
            /></a>
            <a
              class="os_social_facebook_share"
              :href="
                `http://www.facebook.com/sharer.php?u=${state.url}?ref=${item.shortref}TUDIOSKO`
              "
              target="_blank"
              ><img
                src="https://i.paramountad.com/uploads/facebook.png"
                title="facebook"
                class="os_social"
                alt="Share on facebook"
            /></a>
            <a
              class="os_social_facebook_share"
              :href="
                `https://api.whatsapp.com/send?text=Look%20at%20this...%20%F0%9F%91%80%20${state.url}?ref=${item.shortref}TUDIOSKO`
              "
              target="_blank"
              ><img
                src="https://i.paramountad.com/uploads/whatsapp.svg"
                title="Whatsapp"
                class="os_social"
                alt="Share on Whatsapp"
            /></a>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import api from "../../services/call";
import router from "../../router";
import { reactive, onMounted } from "vue";
import "jquery/dist/jquery.min.js";

//!Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
//import $ from "jquery";
export default {
  name: "adview",
  components: {},
  setup() {
    const routee = useRoute();

    const state = reactive({
      post: [],
      url: "https://ad.paramountad.com/index.php",
      userId: null,
      log: null,
    });

    function getPost() {
      let data = {
        key: "getPost",
        id: routee.params.id,
      };
      api.post(data).then((x) => {
        state.post = x["data"]["post"];
      });
    }

    onMounted(() => {
      if (api.checkuser() == true) {
        state.log = 1;
        api.getus().then((x) => {
          state.userId = x["data"]["message"][0];
        });
        router.push({ name: "cont", params: { id: routee.params.id } });
        getPost();
      } else {
        state.log = 0;
        router.push({ name: "conte", params: { id: routee.params.id } });
        getPost();
      }
    });

    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/css/blog.scss";
.hhyh {
  font-size: 0.93em !important;
  font-weight: 400 !important;
  line-height: 1.35em !important;
  padding: 6px 22px !important;
  cursor: pointer !important;
  background-color: #888;
  color: #fff !important;
  background: #313740 !important;
}

.linkclick {
  position: absolute;
  top: -34px !important;
  right: -31px !important;
  display: block;
}

.postshare {
  position: absolute;
  top: -34px;
  left: -31px;
  display: block;
}

@media (max-width: 767px) {
  .linkclick {
    right: -10px !important;
  }

  .postshare {
    left: -10px !important;
  }
}
</style>
