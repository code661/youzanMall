let host = 'http://rap2api.taobao.org/app/mock/7058/'

let url = {
  hotList: 'index/hotLists'
}

for (let key in url){
  url[key] = host + url[key]
}

export default url