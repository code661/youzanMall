let host = 'http://rap2api.taobao.org/app/mock/19448/'

let url = {
  hotList: 'index/hotLists',
  banner: 'index/banner'
}

for (let key in url){
  url[key] = host + url[key]
}

export default url