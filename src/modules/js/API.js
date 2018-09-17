let host = 'http://rap2api.taobao.org/app/mock/19448/'

let url = {
  hotList: 'index/hotLists',
  banner: 'index/banner',
  topList: 'category/topList',
  sublList: 'category/subList',
  rank: 'category/rank',
  search: 'search/list',
  goodsDetail: 'goods/detail',
  deal: 'goods/deal',
  addCart: 'cart/add',
  cartList: 'cart/list',
  minus: 'cart/minus',
  plus: 'cart/plus',
  remove: 'cart/remove',
  mrremove: 'cart/mrremove',
  addAddress: 'address/add',
  removeAddress: 'address/remove',
  addressList: 'address/list',
  updateAddress: 'address/update',
  setDefault: 'address/setDefault'

}

for (let key in url){
  url[key] = host + url[key]
}

export default url