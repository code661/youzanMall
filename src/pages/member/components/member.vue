<template>
    <div class="container " style="min-height: 581px;">
    <div class="content">
      <div class="user-infos">
        <div class="pull-left avatar">
          <div class="img" style="background-image: url(https://img.yzcdn.cn/upload_files/no_pic.png?imageView2/2/w/280/h/280/q/75/format/webp);"></div>
        </div>
        <div class="pull-left desc">
          <p>谭笃志</p>
        </div>
      </div>
      <div class="order-related">
        <ul class="uc-order list-horizon clearfix js-order-overview">
          <li>
            <a class="link clearfix relative link-topay" data-for="topay" href="https://h5.youzan.com/v2/trade/record/alllist?type=topay" target="_self">
              <p class="title-info c-black font-size-12">待付款</p>
            </a>
          </li>
          <li>
            <a class="link clearfix relative link-totuan" data-for="totuan" href="https://h5.youzan.com/v2/trade/record/alllist?type=totuan" target="_self">
              <p class="title-info c-black font-size-12">待接单</p>
            </a>
          </li>
          <li>
            <a class="link clearfix relative link-tosend" data-for="tosend" href="https://h5.youzan.com/v2/trade/record/alllist?type=tosend" target="_self">
              <p class="title-info c-black font-size-12">待发货</p>
            </a>
          </li>
          <li>
            <a class="link clearfix relative link-send" data-for="send" href="https://h5.youzan.com/v2/trade/record/alllist?type=send" target="_self">
              <p class="title-info c-black font-size-12">待收货</p>
            </a>
          </li>
          <li>
            <a class="link clearfix relative link-rights" href="https://h5.youzan.com/v2/trade/record/rightsOrder" target="_self">
              <p class="title-info c-black font-size-12">退款/维权</p>
            </a>
          </li>
        </ul>
        <div class="block block-list list-vertical">
          <a class="block-item link clearfix ico-order" href="https://h5.youzan.com/v2/trade/record/alllist?type=all" target="_self">
            <p class="title-info c-black font-size-14">全部订单</p>
          </a>
        </div>
        <div class="block block-list list-vertical">
          <a class="block-item link clearfix ico-favior js-login" href="https://maijia.youzan.com/mars/collect/goods" target="_self">
            <p class="title-info c-black font-size-14">收藏的商品</p>
          </a>
          <a class="block-item link clearfix ico-shop js-login" href="https://maijia.youzan.com/mars/collect/shop" target="_self">
            <p class="title-info c-black font-size-14">收藏的店铺</p>
          </a>
          <a class="block-item link clearfix ico-bought js-login" href="https://maijia.youzan.com/mars/record/bought" target="_self">
            <p class="title-info c-black font-size-14">我买过的</p>
          </a>
          <a class="block-item link clearfix ico-history js-login" href="https://maijia.youzan.com/mars/record/goodsbrowse" target="_self">
            <p class="title-info c-black font-size-14">我的浏览记录</p>
          </a>
        </div>
        <div class="block block-list list-vertical">
          <a class="block-item link clearfix ico-card" href="https://maijia.youzan.com/mars/record/MemberCard" target="_self">
            <p class="title-info c-black font-size-14">我的会员卡</p>
          </a>
          <a class="block-item link clearfix ico-coupon" href="https://h5.youzan.com/v2/ump/promocard/crosssite?empty_redirect=yzapp" target="_self">
            <p class="title-info c-black font-size-14">我的优惠券</p>
          </a>
          <a class="block-item link clearfix ico-luckymoney hide" href="https://h5.youzan.com/v2/trade/record/luckymoney?f_platform=yzapp" target="_self">
            <p class="title-info c-black font-size-14">我的红包</p>
          </a>
          <a class="block-item link clearfix ico-backs" href="https://h5.youzan.com/v2/trade/record/backs?f_platform=yzapp" target="_self">
            <p class="title-info c-black font-size-14">我的返现</p>
          </a>
        </div>
        <div class="block block-list list-vertical">
          <a class="block-item link clearfix ico-setting js-login" href="https://h5.youzan.com/v2/buyer/member/setting" target="_self">
            <p class="title-info c-black font-size-14">个人设置</p>
          </a>
          <router-link to="/address" class="block-item link clearfix ico-setting" target="_self">
            <p class="title-info c-black font-size-14">收货地址管理</p>
          </router-link>
        </div>
      </div>
    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import mixin from 'modules/js/mixin.js'
export default {
  mixins:[mixin]
}
</script>

<style scoped>
  @import "../assets/member.css";
  @import "../assets/member_base.css";
</style>


