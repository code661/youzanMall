import './assets/cart.css'
import './assets/cart_base.css'
import './assets/cart_trade.css'
import 'modules/css/common.css'
import Vue from 'vue';
import bottomNav from 'components/bottomNav.vue'

new Vue({
  el:'.container',
  components:{
    'bottom-nav': bottomNav
  }
})