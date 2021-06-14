<template>
  <aside id="minileftbar" class="minileftbar">
    <ul class="menu_list">
      <li>
        <router-link :to="{ name: 'Home' }" class="navbar-brand">
          <img
            src="https://www.wrraptheme.com/templates/alpino/main/assets/images/logo.svg"
            alt="paramount"
          />
        </router-link>
        <small class="text-white">Admin</small>
      </li>
      <li>
        <router-link to="/dashadmin" class="btn_overlay hidden-sm-down">
          <i class="fa fa-home"></i>
        </router-link>
      </li>
      <!--  <li>
        <a href="javascript:void(0);" class="menu-sm"
          ><i class="fa fa-bring-front"></i
        ></a>
      </li> -->
      <li class="notifications badgebit">
        <router-link :to="{ name: 'contt', params: { id: state.id } }">
          <i class="fa fa-blog"></i>
          <div class="notify">
            <span class="heartbit" style="background-color: red !important"></span>
            <span class="point"></span>
          </div>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'with' }">
          <i class="fa fa-inbox-out"></i>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'subs' }">
          <i class="fa fa-dollar-sign"></i>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'users' }">
          <i class="fa fa-user"></i>
        </router-link>
      </li>
      <li class="power">
        <a href="#usersettings" class="js-right-sidebar"
          ><i class="fa fa-cog zmdi-hc-spin"></i
        ></a>
        <a class="mega-menu" href="javascript:void(0);" @click="logout"
          ><i class="fa fa-sign-out"></i
        ></a>
      </li>
    </ul>
  </aside>

  <section class="content blog-page index-isotope v3">
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import { reactive } from "vue";
import api from "../../services/call";
import router from "../../router";

export default {
  name: "dashadmin",
  setup() {
    const state = reactive({
      id: null,
    });

    function logout() {
      api.logoutA() == true ? router.push({ path: "/" }) : false;
    }

    let data = {
      key: "getSpons",
    };
    api.post(data).then((x) => {
      state.id = x["data"]["id"];
    });

    return {
      state,
      logout,
    };
  },
};
</script>
