<template>
    <div class="container " style="min-height: 597px;">
    <div class="section section-first">
      <div class="block form js-form">
        <input class="js-id" name="id" type="hidden" value="69150287">
        <div class="block-item" style="border-top:0;">
          <label>收货人</label>
          <input type="text" v-model.trim="name" placeholder="请输入姓名" name="user_name" maxlength="20">
        </div>
        <div class="block-item">
          <label>联系电话</label>
          <input v-model.trim="tel" type="tel" placeholder="联系电话" name="tel" maxlength="11">
        </div>
        <div class="block-item">
          <label>选择地区</label>
          <div class="select-group">
            <select class="js-province-selector" v-model="provinceValue">
              <option disabled value="-1">选择省份</option>
              <option v-for="province in provinceList" :value="province.value">{{province.label}}</option>
            </select>
            <select class="js-city-selector" v-model="cityValue">
              <option disabled value="-1">选择城市</option>
              <option v-for="city in cityList" :value="city.value">{{city.label}}</option>              
            </select>
            <select v-model="districtValue" class="js-county-selector" name="area_code" >
              <option disabled value="-1">选择地区</option>
              <option v-for="district in districtList" :value="district.value">{{district.label}}</option>
            </select>
          </div>
        </div>
        <div class="block-item">
          <label>详细地址</label>
          <input v-model.trim="address" type="text" placeholder="街道门牌信息" name="address_detail" maxlength="100">
        </div>
      </div>
    </div>
    <div class="block section js-save block-control-btn">
      <div class="block-item c-blue center" @click="save">保存</div>
    </div>
    <div class="block section js-delete block-control-btn" v-show="type === 'edit'">
      <div class="block-item c-red center" @click="remove">删除</div>
    </div>
    <div class="block stick-bottom-row center js-save-default" v-show="type === 'edit'">
      <button class="btn btn-standard js-save-default-btn" @click="setDefault">设为默认收货地址</button>
    </div>
  </div>
</template>

<script>
import addressData from "../assets/address.json";
import {mapState} from "vuex"

export default {
  computed:{
    ...mapState(["list"])
  },
  data() {
    return {
      type: "",

      id: 0,
      name: "",
      tel: "",
      address: "",
      provinceValue: -1,
      cityValue: -1,
      districtValue: -1,
      provinceName: "",
      cityName: "",
      districtName: "",
      isDefault: false,

      provinceList: addressData.list,
      cityList: null,
      districtList: null,

      editData: { init: false, info: null }
    };
  },
  methods: {
    initEditData() {
      this.provinceValue = this.editData.info.provinceValue;
      this.name = this.editData.info.name;
      this.tel = this.editData.info.tel;
      this.address = this.editData.info.address;
      this.id = this.editData.info.id;
      this.isDefault = this.editData.info.isDefault
    },
    findIndexInList(list, value) {
      return list.findIndex(item => {
        return item.value === value;
      });
    },
    save() {
      let {
        id,
        name,
        tel,
        address,
        provinceValue,
        cityValue,
        districtValue,
        provinceName,
        cityName,
        districtName,
        isDefault
      } = this;

      let data = {
        id,
        name,
        tel,
        address,
        provinceValue,
        cityValue,
        districtValue,
        provinceName,
        cityName,
        districtName,
        isDefault
      };

      if(this.type === "edit"){
        this.$store.dispatch('updateAction',data)
      }else{
        this.$store.dispatch('addAction',data)
      }
    },
    remove(){
      this.$store.dispatch('removeAction',{id:this.id})
    },
    setDefault(){
      this.$store.dispatch('setDefaultAction',{id:this.id})
    }
  },
  created() {
    let query = this.$route.query;
    this.type = query.type;
    this.editData.info = query.instance;
    if (this.type === "edit") {
      this.initEditData();
    }
  },
  watch: {
    provinceValue(newVal) {
      let value = parseInt(newVal);
      if (value === -1) return;
      let index = this.findIndexInList(this.provinceList, value);
      this.cityList = this.provinceList[index].children;
      this.provinceName = this.provinceList[index].label;
      this.cityValue = -1;
      this.districtValue = -1;

      if (this.type === "edit" && this.editData.init === false) {
        this.cityValue = this.editData.info.cityValue;
      }
    },
    cityValue(newVal) {
      let value = parseInt(newVal);
      if (value === -1) {
        this.cityName = "";
        return;
      }
      let index = this.findIndexInList(this.cityList, value);
      this.districtList = this.cityList[index].children;
      this.cityName = this.cityList[index].label;
      this.districtValue = -1;

      if (this.type === "edit" && this.editData.init === false) {
        this.districtValue = this.editData.info.districtValue;
        this.editData.init = true;
      }
    },
    districtValue(newVal) {
      let value = parseInt(newVal);
      if (value === -1) {
        this.districtName = "";
        return;
      }
      let index = this.findIndexInList(this.districtList, value);
      this.districtName = this.districtList[index].label;
    },
    list:{
      handler(){
        this.$router.go(-1)
      },
      deep: true
    }
  }
};
</script>

<style scoped>
@import url("../assets/address_base.css");
@import url("../assets/address.css");
</style>

