import "./assets/goods_common.css";
import "./assets/goods_custom.css";
import "./assets/goods.css";
import "./assets/goods_theme.css";
import "./assets/goods_mars.css";
import "./assets/goods_sku.css";
import "./assets/goods_transition.css";

import Vue from "vue";
import axios from "axios";
import mixin from "modules/js/mixin.js";
import url from "modules/js/API.js";
import qs from "qs";
import swiper from "components/swiper.vue";

var { id } = qs.parse(location.search.substr(1));

new Vue({
  el: "#app",
  data: {
    id: id,
    goodDetail: null,
    detailTabs: ["商品详情", "本店成交"],
    currentTab: 0,
    deal: null,
    bannerList: null,
    SKUisShow: false,
    SKUtype: 0,
    goodNum: 1,
    addedToCart: false,
    showAddedMsg: false
  },
  methods: {
    getGoodsDetail() {
      axios.get(url.goodsDetail, { params: { id } }).then(res => {
        this.goodDetail = res.data.data;
        // 为了复用 swiper 组件
        this.bannerList = [];
        this.goodDetail.imgs.map(img => {
          this.bannerList.push({
            // 不跳转
            clickUrl: "javascript:;",
            img: img
          });
        });
      });
    },
    changeTab(index) {
      this.currentTab = index;
      if (index === 1) {
        this.getDeal();
      } else {
        this.deal = null;
      }
    },
    getDeal() {
      axios.get(url.deal, { params: { id } }).then(res => {
        this.deal = res.data.data.lists;
      });
    },
    showSKU(type) {
      this.SKUtype = type;
      this.SKUisShow = true;
    },
    changeGoodNum(num) {
      if (this.goodNum === 1 && num === -1) return;
      this.goodNum += num;
    },
    addToCart() {
      axios.post(url.addCart, { id: this.id, num: this.goodNum }).then(res => {
        if (res.data.status === 200) {
          this.addedToCart = true;
          this.SKUisShow = false;
          this.showAddedMsg = true;
          setTimeout(() => {
            this.showAddedMsg = false;
          }, 800);
        }
      }).catch((err)=>{console.log(err)});
    }
  },
  watch: {
    SKUisShow(val) {
      document.body.style.overflow = val ? "hidden" : "auto";
    }
  },
  created() {
    this.getGoodsDetail();
  },
  components: {
    swiper
  },
  mixins: [mixin]
});
