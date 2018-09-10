import bottomNav from "components/bottomNav.vue";

var myMixin = {
  components: {
    "bottom-nav": bottomNav,
  },
  filters: {
    currencyFormat(price) {
      var priceStr = price + "";
      if (priceStr.indexOf(".") > -1) {
        let arr = priceStr.split(".");
        return arr[0] + "." + (arr[1] + "0").substr(0, 2);
      } else {
        return priceStr + ".00";
      }
    }
  }
};

export default myMixin;
