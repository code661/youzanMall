import "./search.css";
import "modules/css/common.css";
import Vue from "vue";
import axios from 'axios'
import url from 'modules/js/API.js'
import mixin from 'modules/js/mixin.js'
import qs from 'qs'
import 'velocity-animate'

var {keyword,id} = qs.parse(location.search.substr(1))

new Vue({
  el: ".container",
  data: {
    searchData: null,
    keyword: keyword,
    toTopIsShow: false
  },
  methods:{
    getSearchList(){
      axios
        .get(url.search,{params:{id,keyword}})
        .then((res)=>{
          this.searchData = res.data.lists
        })
    },
    move(){
      var top =document.body.scrollTop || document.documentElement.scrollTop;
      if (top > 150){
        this.toTopIsShow = true
      }else{
        this.toTopIsShow = false
      }
    },
    goToTop(){
      Velocity(document.body,'scroll',{duration: 800})
      this.toTopIsShow = false
    }
  },
  created(){
    this.getSearchList()
  },
  mixins:[mixin]
});
