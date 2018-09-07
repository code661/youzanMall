import 'modules/css/common.css'
import './category.css'
import url from 'modules/js/API.js'
import Vue from 'vue'
import bottomNav from 'components/bottomNav.vue'
import axios from 'axios'

new Vue({
  el: '#app',
  components: {
    'bottom-nav': bottomNav,
  },
  data:{
    topList: null,
    currentTabIndex: 0,
    rank: null,
    subList: null
  },
  methods:{
    getTopList(){
      axios
        .get(url.topList)
        .then((response)=>{
          this.topList = response.data.lists
        })
    },
    clickCategoryTab(index, id){
      this.currentTabIndex = index
      if (index === 0 ){return}
      this.getSubListData(id)
    },
    getRankData(){
      axios
        .get(url.rank)
        .then((response)=>{
          this.rank = response.data.data
        })
    },
    getSubListData(id){
      axios
        .get(url.sublList,{
          params: {id}
        })
        .then((response)=>{
          this.subList = response.data.data
        })
    }
  },
  created(){
    this.getTopList()
    this.getRankData()
  }
})