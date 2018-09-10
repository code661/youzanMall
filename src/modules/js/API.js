let host = 'http://rap2api.taobao.org/app/mock/19448/'

let url = {
  hotList: 'index/hotLists',
  banner: 'index/banner',
  topList: 'category/topList',
  sublList: 'category/subList',
  rank: 'category/rank',
  search: 'search/list'
}

for (let key in url){
  url[key] = host + url[key]
}

export default url