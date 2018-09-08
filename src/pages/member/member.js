import './assets/member.css'
import './assets/member_base.css'
import 'modules/css/common.css'
import bottomNav from 'components/bottomNav.vue'
import Vue from 'vue';

new Vue({
  el:'.container',
  components: {
    'bottom-nav': bottomNav
  }
})