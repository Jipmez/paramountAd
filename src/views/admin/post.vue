<template>
  <div class="content blog-page">
    <!--  <p v-if="posts.type == 'sponsored' && posts.active == 1">
      Time left : 2hrs
    </p> -->

    <div class="row">
      <div class="col-lg-12">
        <button
          type="button"
          @click="mark()"
          class="btn btn-primary btn-round waves-effect m-t-20"
        >
          <span v-if="posts.active == 0">Mark as sponsored</span>
          <span v-if="posts.active == 1">Unmark as sponsored</span>
        </button>

        <form action="" @submit.prevent="submitpost()">
          <div class="card">
            <div class="body">
              <label for="jgug">Title</label>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  v-model="posts.title"
                />
              </div>
              <label for="jgug">Category ({{ posts.postcat }})</label>
              <div class="btn-group bootstrap-select form-control show-tick">
                <select
                  name=""
                  class="form-control"
                  required
                  v-model="posts.postcat"
                >
                  <option value="0" selected disabled>__category</option>
                  <option
                    v-for="item in posts.category"
                    :value="item.id"
                    :key="item.id"
                    >{{ item.title }}</option
                  >
                </select>
              </div>
              <label for="jgug">Type ({{ posts.type }})</label>
              <div class="btn-group bootstrap-select form-control show-tick">
                <select
                  class="form-control show-tick"
                  tabindex="-98"
                  v-model="posts.type"
                  name="type"
                >
                  <option>Type --</option>
                  <option value="sponsored">Sponsored</option>
                  <option value="ordinary">Ordinary</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
              <label for="jgug">Link</label>
              <div class="form-group">
                <input
                  type="url"
                  class="form-control"
                  name="link"
                  v-model="posts.guid"
                />
              </div>
              <div class="dropbox">
                <div class="dz-image" v-if="posts.image != null">
                  <img
                    data-dz-thumbnail=""
                    alt="IMG_20210227_092113.jpg"
                    :src="posts.image"
                  />
                </div>
                <input
                  type="file"
                  :name="state.uploadFieldName"
                  :disabled="isSaving"
                  @change="
                    filesChange($event.target.name, $event.target.files);
                    fileCount = $event.target.files.length;
                  "
                  accept="image/*"
                  class="input-file"
                />
                <p v-if="isInitial">
                  Drag your file here to begin<br />
                  or click to browse
                </p>
                <p v-if="isSaving">
                  <i class="fa fa-hourglass-start zmdi-hc-spin"></i>
                  Uploading {{ fileCount }}
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="body">
              <ckeditor
                :editor="img.editor"
                v-model="img.editorData"
                :config="img.editorConfig"
              ></ckeditor>
              <button
                type="submit"
                class="btn btn-primary btn-round waves-effect m-t-20"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import "jquery/dist/jquery.min.js";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import api from "../../services/call";
import { toast } from "../../services/toaster";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { useRoute } from "vue-router";

const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_SUCCESS = 2,
  STATUS_FAILED = 3;

export default {
  name: "post",

  setup() {
    const routee = useRoute();

    let img = reactive({
      editor: ClassicEditor,
      editorData: null,
      editorConfig: {
        ckfinder: {
          uploadUrl: "https://www.coinimpart.trade/assets/ck/",
        },
        toolbar: {
          items: [
            "heading",
            "|",
            "fontSize",
            "fontFamily",
            "fontColor",
            "fontBackgroundColor",
            "imageInsert",
            "|",
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "highlight",
            "removeFormat",
            "|",
            "alignment",
            "|",
            "numberedList",
            "bulletedList",
            "|",
            "indent",
            "outdent",
            "|",
            "todoList",
            "link",
            "blockQuote",
            "insertTable",
            "|",
            "undo",
            "redo",
            "CKFinder",
          ],
        },
        language: "cs",

        table: {
          contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
        },
        licenseKey: "",
      },
    });

    let posts = reactive({
      title: null,
      category: null,
      type: null,
      postcat: null,
      guid: null,
      active: null,
      Image: null,
    });

    getPost();

    function getPost() {
      let data = {
        key: "getPost",
        id: routee.params.id,
      };
      api.post(data).then((x) => {
        posts.title = x["data"]["post"][0]["title"];
        posts.type = x["data"]["post"][0]["type"];
        posts.postcat = x["data"]["post"][0]["category"];
        posts.guid = x["data"]["post"][0]["guid"];
        posts.active = x["data"]["post"][0]["active"];
        posts.image = x["data"]["post"][0]["image_url"];
        img.editorData = x["data"]["post"][0]["content"];
      });
    }

    function submitpost() {
      let sub = {
        key: "subpost",
        data: posts,
        id: routee.params.id,
        content: img.editorData,
      };
      api.post(sub).then((x) => {
        if (x["data"]["code"] == 1) {
          console.log(x);
          toast.notify("success", x["data"]["message"]);
        }
      });
    }

    function mark() {
      let sub = {
        key: "mark",
        data: posts,
        id: routee.params.id,
      };
      api.post(sub).then((x) => {
        if (x["data"]["code"] == 1) {
          toast.notify("success", x["data"]["message"]);
        }
      });
    }

    const isInitial = computed(() => {
      return state.currentStatus === STATUS_INITIAL;
    });
    const isSaving = computed(() => {
      return state.currentStatus === STATUS_SAVING;
    });
    const isSuccess = computed(() => {
      return state.currentStatus === STATUS_SUCCESS;
    });

    const isFailed = computed(() => {
      return state.currentStatus === STATUS_FAILED;
    });

    const reset = onMounted(() => {
      state.currentStatus = STATUS_INITIAL;
      state.uploadedFiles = [];
      state.uploadError = null;
      cat();
    });

    function filesChange(fieldName, fileList) {
      let fileToUpload = fileList[0];
      var reader = new FileReader();
      reader.onload = (event) => {
        posts.image = event.target.result;
      };
      reader.readAsDataURL(fileToUpload);

      const formData = new FormData();
      if (!fileList.length) return;
      formData.append(fieldName, fileList[0], fileList[0].name);
      formData.append("key", "fileupload");
      formData.append("id", routee.params.id);
      save(formData);
    }

    function cat() {
      let data = {
        key: "cat",
      };
      api.post(data).then((x) => {
        posts.category = x["data"]["cat"];
      });
    }

    function save(formData) {
      formData;
      // upload data to the server
      state.currentStatus = STATUS_SAVING;

      api
        .post(formData)
        .then((x) => {
          posts.image_url = x["data"]["pics"];
          state.currentStatus = STATUS_SUCCESS;
        })
        .catch((err) => {
          state.uploadError = err.response;
          state.currentStatus = STATUS_FAILED;
        });
    }

    let state = reactive({
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: "photo",
    });

    return {
      img, // !ckeditor reactive
      state,
      mark,
      cat,
      posts,
      isInitial, //Computed
      isSaving, //computed
      isSuccess, // computed
      isFailed, //computed
      reset, //mounted
      filesChange,
      submitpost, // ! submit post
    };
  },
};
</script>

<style lang="scss">
//@import "../../styles/scss/css/dropzone.scss";

.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  margin-top: 12px;
  cursor: pointer;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}

.dz-image {
  border-radius: 20px;
  overflow: hidden;
  width: 120px;
  height: 120px;
  margin: 5px auto;
  display: block;
  z-index: 10;
}

////khiiihihih
.card {
  transition: 0.5s;
  border: 0;
  position: relative;
  width: 100%;
  background: transparent;
  border-radius: 0.55rem;
  margin-top: 7px;
  margin-bottom: 10px !important;

  .body {
    font-size: 14px;
    padding: 20px;
    border-radius: 0.55rem;
    background: #fff;
    color: #616161;
    font-weight: 400;
    transition: all 0.2s ease-in-out;
  }
}
</style>
