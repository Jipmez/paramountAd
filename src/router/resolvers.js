import api from "../services/call";
import store from "../store";

async function listresolve(to, from, next) {
  let post = {
    key: "gtTrans",
  };
  await api.post(post).then((res) => {
    if (res["data"]["access"] == true) {
      to.meta["list"] = res["data"]["message"];
    }
  });
  next();
}

async function userResolve(to, from, next) {
  let ds = {
    key: "getAlluser",
    authorization: localStorage.getItem("sid"),
  };

  await api.post(ds).then((res) => {
    if (res["data"]["access"] == true) {
      store.state.user = res["data"]["message"];
    }
  });
  next();
}

async function getUser(to, from, next) {
  await api.getus().then((x) => {
    store.state.user = x["data"]["message"];
  });
  next();
}

async function getAdminData(to, from, next) {
  let data = {
    key: "adminData",
  };
  await api.post(data).then((x) => {
    store.state.admin = x["data"][0];
  });
  next();
}

async function getPosts(to, from, next) {
  let data = {
    key: "getPosts",
  };
  await api.post(data).then((x) => {
    to.meta["ad"] = x["data"]["ads"];
  });
  next();
}

async function geteditPost(to, from, next) {
  let data = {
    key: "geteditPosts",
  };
  await api.post(data).then((x) => {
    to.meta["geted"] = x["data"]["post"];
  });
  next();
}

async function getPay(to, from, next) {
  let depN = {
    key: "depN",
  };
  await api.post(depN).then((x) => {
    to.meta["getPayy"] = x["data"];
  });
  next();
}

export default {
  listresolve,
  userResolve,
  getUser,
  getPosts,
  getPay,
  getAdminData,
  geteditPost,
};
