<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide" v-for="(item,index) in banner" :key="index">
        <a class="imgWrapper" :href="item.clickUrl">
          <img class="goods-main-photo fadeIn" :src="item.img">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.min.css";
import Swiper from 'swiper'

export default {
  data: function() {
    return {};
  },
  props: {
    banner: Array
  },
  mounted(){
    var swiper = new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    })
  },
  // 这里遇到了一个小坑
  // watch: {
  //   banner: function(value) {
  //     this.$nextTick(() => {
  //       var swiper = new Swiper(".swiper-container", {
  //         loop: true,
  //         pagination: {
  //           el: ".swiper-pagination"
  //         }
  //       });
  //     });
  //   }
  // }
};
</script>

<style scoped>
.imgWrapper img{
  width: 100%
}
</style>

