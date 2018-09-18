<template>
    <div class="container " style="min-height: 597px;">
    <div class="block-list address-list section section-first js-no-webview-block">
      <a v-for="item in addressList" :key="item.id" class="block-item js-address-item address-item address-item-default" href="javascript:;">
        <i class="address-item-checkBtn" :class="{checked: item.isDefault}"></i>
        <div class="address-title">{{item.name}} {{item.tel}}</div>
        <p>{{item.provinceName}} {{item.cityName}} {{item.districtName}} {{item.address}}</p>
        <i class="address-list address-item-edit" @click="editAddress(item)">修改</i>
      </a>
    </div>
    <div class="block stick-bottom-row center">
      <router-link :to="{path:'form',query:{type:'add'}}" class="btn btn-blue js-no-webview-block js-add-address-btn" href="javascript:;">新增地址</router-link>
    </div>
  </div>
</template>

<script>
import Address from "modules/js/addressService.js"

export default {
  data(){
    return {
      addressList: null,
    }
  },
  methods:{
    editAddress(item){
      this.$router.push({path: "form",query:{type:"edit",instance:item}})
    },
    getAddressList(){
      Address.list().then((res)=>{
        this.addressList = res.data.lists
      })
    }
  },
  created(){
    this.getAddressList()
  }
};
</script>

<style scoped>
@import url("../assets/address_base.css");
@import url("../assets/address.css");

.block-item .address-item-edit {
  position: absolute;
  font-size: 12px;
  padding-left: 25px;
  color: #999;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 20px;
  background: url("https://b.yzcdn.cn/v2/image/pf/icon/m.png") no-repeat 5px 4px;
  background-size: 14px;
}

.block-item .address-item-checkBtn.checked {
  width: 20px;
  height: 20px;
  background-size: 20px;
  background-image: url("https://b.yzcdn.cn/v2/image/pf/icon/check.png")
}


.block-item .address-item-checkBtn {
  position: absolute;
  content: '';
  top: 20px;
  left: 10px;
  width: 22px;
  height: 22px;
  background-size: 22px;
  background-image: url("https://b.yzcdn.cn/v2/image/pf/icon/uncheck.png")
}


</style>



