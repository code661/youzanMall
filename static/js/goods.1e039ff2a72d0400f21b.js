webpackJsonp([1],{"+mQk":function(t,a,n){"use strict";n("mgS3");var e=n("DNVT"),i={data:function(){return{}},props:{banner:Array},mounted:function(){new e.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"}})}},s={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},this._l(this.banner,function(t,n){return a("div",{key:n,staticClass:"swp-page swiper-slide"},[a("a",{staticClass:"imgWrapper",attrs:{href:t.clickUrl}},[a("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])})),this._v(" "),a("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]};var o=n("VU/8")(i,s,!1,function(t){n("ImDT")},"data-v-e345fa9c",null);a.a=o.exports},"247o":function(t,a){},"2GpX":function(t,a){},"4p1N":function(t,a){},"5tW2":function(t,a,n){"use strict";var e={hotList:"index/hotLists",banner:"index/banner",topList:"category/topList",sublList:"category/subList",rank:"category/rank",search:"search/list",goodsDetail:"goods/detail",deal:"goods/deal",addCart:"cart/add",cartList:"cart/list",minus:"cart/minus",plus:"cart/plus",remove:"cart/remove",mrremove:"cart/mrremove",addAddress:"address/add",removeAddress:"address/remove",addressList:"address/list",updateAddress:"address/update",setDefault:"address/setDefault"};for(var i in e)e[i]="http://rap2api.taobao.org/app/mock/19448/"+e[i];a.a=e},"6rqk":function(t,a){},HFfA:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("4p1N"),i=(n.n(e),n("oqmH")),s=(n.n(i),n("LgPl")),o=(n.n(s),n("V2ET")),r=(n.n(o),n("rDKA")),c=(n.n(r),n("6rqk")),d=(n.n(c),n("247o")),u=(n.n(d),n("7+uW")),l=n("mtWM"),f=n.n(l),h=n("U/rD"),m=n("5tW2"),p=n("mw3O"),g=n.n(p),v=n("+mQk"),w=g.a.parse(location.search.substr(1)).id;new u.default({el:"#app",data:{id:w,goodDetail:null,detailTabs:["商品详情","本店成交"],currentTab:0,deal:null,bannerList:null,SKUisShow:!1,SKUtype:0,goodNum:1,addedToCart:!1,showAddedMsg:!1},methods:{getGoodsDetail:function(){var t=this;f.a.get(m.a.goodsDetail,{params:{id:w}}).then(function(a){t.goodDetail=a.data.data,t.bannerList=[],t.goodDetail.imgs.map(function(a){t.bannerList.push({clickUrl:"javascript:;",img:a})})})},changeTab:function(t){this.currentTab=t,1===t?this.getDeal():this.deal=null},getDeal:function(){var t=this;f.a.get(m.a.deal,{params:{id:w}}).then(function(a){t.deal=a.data.data.lists})},showSKU:function(t){this.SKUtype=t,this.SKUisShow=!0},changeGoodNum:function(t){1===this.goodNum&&-1===t||(this.goodNum+=t)},addToCart:function(){var t=this;f.a.post(m.a.addCart,{id:this.id,num:this.goodNum}).then(function(a){200===a.data.status&&(t.addedToCart=!0,t.SKUisShow=!1,t.showAddedMsg=!0,setTimeout(function(){t.showAddedMsg=!1},800))}).catch(function(t){console.log(t)})}},watch:{SKUisShow:function(t){var a=document.querySelector("html");document.body.style.overflow=t?"hidden":"auto",a.style.overflow=t?"hidden":"auto"}},created:function(){this.getGoodsDetail()},components:{swiper:v.a},mixins:[h.a]})},ImDT:function(t,a){},LgPl:function(t,a){},"U/rD":function(t,a,n){"use strict";var e=n("mw3O"),i=n.n(e).a.parse(location.search.substr(1)).nav,s=[{href:"index.html",icon:"icon-home",title:"首页"},{href:"category.html",icon:"icon-category",title:"分类"},{href:"cart.html",icon:"icon-cart",title:"购物车"},{href:"member.html",icon:"icon-user",title:"我"}],o={data:function(){return{navConfig:s,currentNavIndex:parseInt(i)||0}},methods:{changeNav:function(t,a){location.href=location.origin+"/"+t+"?nav="+a}}},r={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"bottom-nav"},[n("ul",t._l(t.navConfig,function(a,e){return n("li",{key:e,class:{active:t.currentNavIndex===e},on:{click:function(n){t.changeNav(a.href,e)}}},[n("a",[n("i",{class:a.icon}),t._v(" "),n("div",[t._v(t._s(a.title))])])])}))])},staticRenderFns:[]};var c={components:{"bottom-nav":n("VU/8")(o,r,!1,function(t){n("2GpX")},"data-v-38910452",null).exports},filters:{currencyFormat:function(t){var a=t+"";if(a.indexOf(".")>-1){var n=a.split(".");return n[0]+"."+(n[1]+"0").substr(0,2)}return a+".00"}}};a.a=c},V2ET:function(t,a){},mgS3:function(t,a){},oqmH:function(t,a){},rDKA:function(t,a){}},["HFfA"]);
//# sourceMappingURL=goods.1e039ff2a72d0400f21b.js.map