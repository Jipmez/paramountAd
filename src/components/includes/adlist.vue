<template>
  <div>
    <div class="index-filter-bar color-scheme-light minimal" style="">
      <div class="index-filter-w">
        <div class="index-filter-label"><i class=""></i><span>Category</span></div>
        <div class="index-filter-categories-select">
          <select
            name=""
            id=""
            v-model="state.postcat"
            class="index-filter-select-selected form-control"
          >
            <option value="0" selected disabled>__category</option>
            <option v-for="item in state.cat" :value="item.id" :key="item.id">
              {{ item.title }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="row clearfix">
      <div class="col-lg-3 col-md-12" v-for="item in paginatedData" :key="item.id">
        <article
          id="post-161"
          class="pluto-post-box post-161 post type-post status-publish format-standard has-post-thumbnail hentry category-image-text tag-jam tag-orange"
          style="margin-bottom: 30px !important"
        >
          <div class="post-body">
            <div class="post-media-body">
              <div class="figure-link-w">
                <router-link
                  class="figure-link"
                  :to="{ name: 'cont', params: { id: item.postref } }"
                >
                  <figure class="abs-image">
                    <img
                      width="400"
                      :src="item.image_url"
                      class="attachment-pluto-index-width size-pluto-index-width wp-post-image"
                      alt=""
                      style="height: 300px"
                    />
                    <div class="figure-shade"></div>
                    <i class="figure-icon os-new-icon fa fa-eye"></i></figure
                ></router-link>
              </div>
            </div>

            <div class="post-content-body">
              <h4 class="post-title entry-title">
                <router-link :to="{ name: 'cont', params: { id: item.postref } }">
                  {{ item.title }}
                </router-link>
              </h4>
              <!-- <div
                class="post-content entry-summary ty"
                v-html="item.content"
              ></div> -->
            </div>
            <!--     <div class="post-meta entry-meta">
              <ul class="post-categories">
                <li>
                  <a
                    href="http://pluto.pinsupreme.com/category/pasta/"
                    rel="category tag"
                    >Pasta</a
                  >
                </li>
              </ul>
            </div> -->
          </div>
        </article>
      </div>
    </div>

    <ul class="pagination pagination-primary pli" style="justify-content: center">
      <li class="page-item">
        <button
          :disabled="state.pageNumber === 0"
          class="btn btn-round btn-info"
          @click="prevPage"
        >
          Previous
        </button>
      </li>
      <li class="page-item" style="padding-top: 10px">
        <a class="page-link" href="javascript:void(0);"
          ><span class="btn-round bg-cyan" style="padding: 9px 19px"
            >{{ state.pageNumber + 1 }}
          </span>
          of {{ pageCount }}</a
        >
      </li>
      <li class="page-item">
        <button
          :disabled="state.pageNumber >= pageCount - 1"
          class="btn btn-round btn-info"
          @click="nextPage"
        >
          Next
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from "vue";
import api from "../../services/call";

export default {
  name: "adlist",
  components: {},

  props: {
    username: [],
    size: {
      type: Number,
      required: false,
      default: 8,
    },
  },
  setup(props) {
    const state = reactive({
      posts: [],
      pageNumber: 0,
      cat: [],
      postcat: 0,
    });

    function getPosts() {
      state.posts = props.username;
    }

    console.log(state.posts);

    function nextPage() {
      state.pageNumber++;
    }
    function prevPage() {
      state.pageNumber--;
    }

    const pageCount = computed(() => {
      let l = state.posts.length,
        s = props.size;
      return Math.ceil(l / s);
    });

    var paginatedData = computed(() => {
      const start = state.pageNumber * props.size,
        end = start + props.size;
      let f = state.posts;
      if (state.postcat === 0) {
        f = state.posts.slice(start, end);
        return f;
      } else {
        f = state.posts.slice(start, end);
        f = f.filter((m) => m.category === state.postcat);
        return f;
      }
    });

    onMounted(() => {
      getPosts();
      cat();
    });

    function cat() {
      let data = {
        key: "cat",
      };
      api.post(data).then((x) => {
        state.cat = x["data"]["cat"];
      });
    }

    return {
      state,
      pageCount,
      prevPage,
      nextPage,
      paginatedData,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/css/blog.scss";

.entry-title {
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pli {
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
