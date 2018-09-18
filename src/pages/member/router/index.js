import Vue from "vue";
import VueRouter from "vue-router";
import member from "../components/member.vue";
import address from "../components/address.vue"
import addressList from "../components/addressList.vue"
import form from "../components/form.vue"

Vue.use(VueRouter);

const routes = [
  { path: "/", component: member }, 
  { path: "/address" , component: address,
    children:[
      {path:'',redirect: "all"},
      {path: "all", component: addressList},
      {path: "form", component: form}
    ]
  }
];

export default new VueRouter({
  routes
});
