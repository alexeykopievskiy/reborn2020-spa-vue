// =========================================================
// * Vue Material Kit PRO - v1.2.2
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-kit-pro
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from "vue";
import App from "./App.vue";
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router";

import MaterialKit from "./plugins/material-kit";

var VueScrollTo = require('vue-scrollto');
 
Vue.use(VueScrollTo)
 
// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })

import 'leaflet/dist/leaflet.css';

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

Vue.use(MaterialKit);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
