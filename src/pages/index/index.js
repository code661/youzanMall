require("index/assets/index.css");
require("modules/css/common.css");
import Vue from "vue";
import axios from "axios";
import url from "modules/js/API.js";
import { InfiniteScroll } from "mint-ui";

Vue.use(InfiniteScroll);

new Vue({
  el: "#app",
  data: {
    hotList: null,
    pageNum: 1,
    pageSize: 6,
    loading: false,
    allLoaded: false
  },
  methods: {
    getHotList() {
      this.loading = true;
      axios
        .get(url.hotList, {
          params: {
            pageNum: this.pageNum,
            pageSize: this.pageSize
          }
        })
        .then(response => {
          if(this.allLoaded){return}
          let responseList = response.data.lists;
          if (responseList < this.pageSize){
            this.allLoaded = true
          }
          if (this.hotList) {
            this.hotList = this.hotList.concat(responseList);
          } else {
            this.hotList = responseList;
          }
          this.loading = false;
          this.pageNum++;
        })
        .catch((err)=>{
          console.log('api错误',err)
          this.loading = false;
        })
    }
  },
  created() {
    this.getHotList();
  }
});
