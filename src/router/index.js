import { createWebHistory, createRouter } from "vue-router";
import nav from "@/views/nav.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Forgot from "@/views/forgotpass.vue";
import reset from "@/views/reset.vue";
import email from "@/views/email.vue";
import ads from "@/views/ads.vue";
import signup from "@/views/signup.vue";
import dashadmin from "@/views/admin/layout.vue";
import adcontent from "@/views/admin/content.vue";
import dash from "@/views/dashboard/dashboard.vue";
import content from "@/views/dashboard/content.vue";
import withdraw from "@/views/dashboard/withdraw.vue";
import price from "@/views/dashboard/pricing.vue";
import profile from "@/views/dashboard/profile.vue";
import view from "@/views/dashboard/view.vue";
import contentview from "@/views/contentview.vue";
import post from "@/views/admin/post.vue";
import user from "@/views/admin/users.vue";
import dep from "@/views/admin/deposits.vue";
import withd from "@/views/admin/withdraw.vue";
import pro from "@/views/admin/profile.vue";
import resolve from "./resolvers";

function guardMyroute(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("sid")) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next();
  } else {
    next("/login");
  }
}
function guardMyrouteAdmin(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("aid")) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next();
  } else {
    next("/ads");
  }
}

const routes = [
  {
    path: "",
    name: "nav",
    component: nav,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/ads",
        name: "ads",
        component: ads,
        beforeEnter: resolve.getPosts,
      },
      {
        path: "/contentview/:id",
        name: "conte",
        component: contentview,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/resend",
    name: "resend",
    component: email,
  },
  {
    path: "/forgotpass",
    name: "Forgot",
    component: Forgot,
  },
  {
    path: "/signup",
    name: "signup",
    component: signup,
  },
  {
    path: "/reset_pass",
    name: "reset",
    component: reset,
  },
  {
    path: "/dash",
    name: "",
    beforeEnter: [guardMyroute, resolve.getUser],
    component: dash,
    children: [
      {
        path: "",
        name: "content",
        component: content,
        beforeEnter: resolve.getPosts,
      },
      {
        path: "content/:id",
        name: "cont",
        component: view,
      },
      {
        path: "pricing",
        name: "price",
        component: price,
        beforeEnter: resolve.getPay,
      },
      {
        path: "profile",
        name: "profile",
        component: profile,
      },
      {
        path: "withdraw",
        name: "withdraw",
        component: withdraw,
      },
    ],
  },
  {
    path: "/dashadmin",
    name: "dash",
    component: dashadmin,
    beforeEnter: [guardMyrouteAdmin, resolve.getAdminData],
    children: [
      {
        path: "",
        name: "adcontent",
        component: adcontent,
      },
      {
        path: "postadmin/:id",
        name: "post",
        component: post,
        beforeEnter: resolve.listresolve,
      },
      {
        path: "content/:id",
        name: "contt",
        component: view,
      },
      {
        path: "subscriptions",
        name: "subs",
        component: dep,
      },
      {
        path: "withdraw",
        name: "with",
        component: withd,
      },
      {
        path: "users",
        name: "users",
        component: user,
      },
      {
        path: "profile/:id",
        name: "pro",
        component: pro,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
