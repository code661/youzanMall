import "./assets/cart.css";
import "./assets/cart_base.css";
import "./assets/cart_trade.css";
import "modules/css/common.css";
import Vue from "vue";
import mixin from "modules/js/mixin.js";
import Cart from "modules/js/cartService.js"

new Vue({
  el: ".container",
  data: {
    cartList: null,
    totalPrice: 0,
    editingShop: null,
    editingShopIndex: -1,
    removeMsg: "",
    showRemovePopup: false,
    removeData: null
  },
  computed: {
    isAllSelected: {
      get() {
        if (this.cartList && this.cartList.length) {
          return this.cartList.every(shop => {
            return shop.checked;
          });
        }
        return false;
      },
      set(newVal) {
        this.cartList.map(shop => {
          shop.checked = newVal;
          shop.goodsList.map(good => {
            good.checked = newVal;
          });
        });
      }
    },
    selectList() {
      if (this.cartList && this.cartList.length) {
        let tempArr = [];
        let total = 0;
        this.cartList.map(shop => {
          shop.goodsList.map(good => {
            if (good.checked) {
              tempArr.push(good);
              total += good.price * good.number;
            }
          });
        });
        this.totalPrice = total;
        return tempArr;
      }
      return [];
    },
    editModeIsAllSelected: {
      get() {
        if (this.editingShop) {
          return this.editingShop.editModeChecked;
        }
      },
      set(newVal) {
        if (this.editingShop) {
          this.editingShop.editModeChecked = newVal;
          this.editingShop.goodsList.map(good => {
            good.editModeChecked = newVal;
          });
        }
      }
    },
    editModeSelectList() {
      if (this.editingShop) {
        let tempArr = [];
        this.editingShop.goodsList.map(good => {
          if (good.editModeChecked) {
            tempArr.push(good);
          }
        });
        return tempArr;
      }
      return [];
    }
  },
  methods: {
    getCartList() {
      Cart.list().then(res => {
        let resData = res.data.cartList;
        resData.map(shop => {
          shop.checked = true;
          shop.inEditing = false;
          shop.editMsg = "编辑";
          shop.editModeChecked = false;
          shop.goodsList.map(good => {
            good.checked = true;
            good.editModeChecked = false;
          });
        });
        this.cartList = resData;
      });
    },
    selectGood(good, shop) {
      let attr = this.editingShop ? "editModeChecked" : "checked";
      good[attr] = !good[attr];
      shop[attr] = shop.goodsList.every(good => {
        return good[attr];
      });
    },
    selectShop(shop) {
      let attr = this.editingShop ? "editModeChecked" : "checked";
      shop[attr] = !shop[attr];
      shop.goodsList.map(good => {
        good[attr] = shop[attr];
      });
    },
    selectAll() {
      let attr = this.editingShop ? "editModeIsAllSelected" : "isAllSelected";
      this[attr] = !this[attr];
    },
    switchMode(shop, shopIndex) {
      shop.inEditing = !shop.inEditing;
      shop.editMsg = this.editingShop ? "编辑" : "完成";

      this.cartList.map((item, index) => {
        if (shopIndex !== index) {
          (item.inEdting = false),
            (item.editMsg = shop.inEditing ? "" : "编辑");
        }
      });

      this.editingShop = shop.inEditing ? shop : null;
      this.editingShopIndex = shop.inEditing ? shopIndex : -1;
    },
    remove(shop, shopIndex, good, goodIndex) {
      this.showRemovePopup = true;
      this.removeMsg = "是否删除该商品";
      this.removeData = { shop, shopIndex, good, goodIndex };
    },
    removeList() {
      this.showRemovePopup = true;
      this.removeMsg = `是否删除这${this.editModeSelectList.length}件商品`;
    },
    removeConfirm() {
      if (this.removeMsg === "是否删除该商品") {
        let { shop, shopIndex, good, goodIndex } = this.removeData;
        Cart.remove(good.id).then(res => {
          if (res.data.status) {
            shop.goodsList.splice(goodIndex, 1);
            if (!shop.goodsList.length) {
              this.cartList.splice(shopIndex, 1);
              this.afterRemoveShop();
            }
            this.showRemovePopup = false;
          }
        });
      } else {
        let ids = [];
        this.editModeSelectList.map(good => {
          ids.push(good.id);
        });
        Cart.mrremove(ids).then(res => {
          if (res.status === 200) {
            let arr = [];
            this.editingShop.goodsList.map(good => {
              let index = this.editModeSelectList.findIndex(item => {
                return item.id === good.id;
              });
              if (index === -1) {
                arr.push(good);
              }
            });
            this.editingShop.goodsList = arr;
            this.showRemovePopup = false;
            if (!arr.length) {
              this.cartList.splice(this.editingShopIndex, 1);
              this.showRemovePopup = false;
              this.afterRemoveShop();
            }
          }
        });
      }
    },
    afterRemoveShop() {
      this.editingShop = null;
      this.editingShopIndex = -1;
      this.cartList.map(shop => {
        shop.inEditing = false;
        shop.editMsg = "编辑";
      });
    },
    minus(good) {
      if (good.number === 1) return;
      Cart.minus(good.id).then(res => {
        good.number--;
      });
    },
    plus(good) {
      Cart.plus(good.id).then(res => {
        good.number++;
      });
    }
  },
  created() {
    this.getCartList();
  },
  mixins: [mixin]
});
