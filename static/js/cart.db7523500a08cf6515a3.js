webpackJsonp([4],{"+SCt":function(t,e){},"035s":function(t,e){},"2GpX":function(t,e){},"5tW2":function(t,e,i){"use strict";var n={hotList:"index/hotLists",banner:"index/banner",topList:"category/topList",sublList:"category/subList",rank:"category/rank",search:"search/list",goodsDetail:"goods/detail",deal:"goods/deal",addCart:"cart/add",cartList:"cart/list",minus:"cart/minus",plus:"cart/plus",remove:"cart/remove",mrremove:"cart/mrremove",addAddress:"address/add",removeAddress:"address/remove",addressList:"address/list",updateAddress:"address/update",setDefault:"address/setDefault"};for(var o in n)n[o]="http://rap2api.taobao.org/app/mock/19448/"+n[o];e.a=n},"9LH8":function(t,e){},"U/rD":function(t,e,i){"use strict";var n=i("mw3O"),o=i.n(n).a.parse(location.search.substr(1)).nav,s=[{href:"index.html",icon:"icon-home",title:"首页"},{href:"category.html",icon:"icon-category",title:"分类"},{href:"cart.html",icon:"icon-cart",title:"购物车"},{href:"member.html",icon:"icon-user",title:"我"}],r={data:function(){return{navConfig:s,currentNavIndex:parseInt(o)||0}},methods:{changeNav:function(t,e){location.href=location.origin+"/"+t+"?nav="+e}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bottom-nav"},[i("ul",t._l(t.navConfig,function(e,n){return i("li",{key:n,class:{active:t.currentNavIndex===n},on:{click:function(i){t.changeNav(e.href,n)}}},[i("a",[i("i",{class:e.icon}),t._v(" "),i("div",[t._v(t._s(e.title))])])])}))])},staticRenderFns:[]};var a={components:{"bottom-nav":i("VU/8")(r,c,!1,function(t){i("2GpX")},"data-v-38910452",null).exports},filters:{currencyFormat:function(t){var e=t+"";if(e.indexOf(".")>-1){var i=e.split(".");return i[0]+"."+(i[1]+"0").substr(0,2)}return e+".00"}}};e.a=a},gWPi:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("kA4s"),i("+SCt"),i("9LH8"),i("035s");var n=i("7+uW"),o=i("U/rD"),s=i("Zrlr"),r=i.n(s),c=i("wxAW"),a=i.n(c),d=i("5tW2"),u=i("wI4f"),h=function(){function t(){r()(this,t)}return a()(t,null,[{key:"plus",value:function(t){return Object(u.a)(d.a.plus,{id:t,number:1})}},{key:"minus",value:function(t){return Object(u.a)(d.a.minus,{id:t,number:1})}},{key:"list",value:function(){return Object(u.a)(d.a.cartList)}},{key:"remove",value:function(t){return Object(u.a)(d.a.remove,{id:t})}},{key:"mrremove",value:function(t){return Object(u.a)(d.a.mrremove,{ids:t})}}]),t}();new n.default({el:".container",data:{cartList:null,totalPrice:0,editingShop:null,editingShopIndex:-1,removeMsg:"",showRemovePopup:!1,removeData:null},computed:{isAllSelected:{get:function(){return!(!this.cartList||!this.cartList.length)&&this.cartList.every(function(t){return t.checked})},set:function(t){this.cartList.map(function(e){e.checked=t,e.goodsList.map(function(e){e.checked=t})})}},selectList:function(){if(this.cartList&&this.cartList.length){var t=[],e=0;return this.cartList.map(function(i){i.goodsList.map(function(i){i.checked&&(t.push(i),e+=i.price*i.number)})}),this.totalPrice=e,t}return[]},editModeIsAllSelected:{get:function(){if(this.editingShop)return this.editingShop.editModeChecked},set:function(t){this.editingShop&&(this.editingShop.editModeChecked=t,this.editingShop.goodsList.map(function(e){e.editModeChecked=t}))}},editModeSelectList:function(){if(this.editingShop){var t=[];return this.editingShop.goodsList.map(function(e){e.editModeChecked&&t.push(e)}),t}return[]}},methods:{getCartList:function(){var t=this;h.list().then(function(e){var i=e.data.cartList;i.map(function(t){t.checked=!0,t.inEditing=!1,t.editMsg="编辑",t.editModeChecked=!1,t.goodsList.map(function(t){t.checked=!0,t.editModeChecked=!1})}),t.cartList=i})},selectGood:function(t,e){var i=this.editingShop?"editModeChecked":"checked";t[i]=!t[i],e[i]=e.goodsList.every(function(t){return t[i]})},selectShop:function(t){var e=this.editingShop?"editModeChecked":"checked";t[e]=!t[e],t.goodsList.map(function(i){i[e]=t[e]})},selectAll:function(){var t=this.editingShop?"editModeIsAllSelected":"isAllSelected";this[t]=!this[t]},switchMode:function(t,e){t.inEditing=!t.inEditing,t.editMsg=this.editingShop?"编辑":"完成",this.cartList.map(function(i,n){e!==n&&(i.inEdting=!1,i.editMsg=t.inEditing?"":"编辑")}),this.editingShop=t.inEditing?t:null,this.editingShopIndex=t.inEditing?e:-1},remove:function(t,e,i,n){this.showRemovePopup=!0,this.removeMsg="是否删除该商品",this.removeData={shop:t,shopIndex:e,good:i,goodIndex:n}},removeList:function(){this.showRemovePopup=!0,this.removeMsg="是否删除这"+this.editModeSelectList.length+"件商品"},removeConfirm:function(){var t=this;if("是否删除该商品"===this.removeMsg){var e=this.removeData,i=e.shop,n=e.shopIndex,o=e.good,s=e.goodIndex;h.remove(o.id).then(function(e){e.data.status&&(i.goodsList.splice(s,1),i.goodsList.length||(t.cartList.splice(n,1),t.afterRemoveShop()),t.showRemovePopup=!1)})}else{var r=[];this.editModeSelectList.map(function(t){r.push(t.id)}),h.mrremove(r).then(function(e){if(200===e.status){var i=[];t.editingShop.goodsList.map(function(e){-1===t.editModeSelectList.findIndex(function(t){return t.id===e.id})&&i.push(e)}),t.editingShop.goodsList=i,t.showRemovePopup=!1,i.length||(t.cartList.splice(t.editingShopIndex,1),t.showRemovePopup=!1,t.afterRemoveShop())}})}},afterRemoveShop:function(){this.editingShop=null,this.editingShopIndex=-1,this.cartList.map(function(t){t.inEditing=!1,t.editMsg="编辑"})},minus:function(t){1!==t.number&&h.minus(t.id).then(function(e){t.number--})},plus:function(t){h.plus(t.id).then(function(e){t.number++})}},created:function(){this.getCartList()},mixins:[o.a]})},kA4s:function(t,e){},wI4f:function(t,e,i){"use strict";var n=i("//Fk"),o=i.n(n),s=i("mtWM"),r=i.n(s);e.a=function(t,e){return new o.a(function(i,n){r.a.post(t,e).then(function(t){200===t.data.status&&i(t),300===t.data.status&&(location.href="login.html",i(t)),i(t)})}).catch(function(t){reject(t)})}}},["gWPi"]);
//# sourceMappingURL=cart.db7523500a08cf6515a3.js.map