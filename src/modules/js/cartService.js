import url from "./API.js"
import fetch from "./fetch.js"

class Cart {
  static plus(id){
    return fetch(url.plus,{
      id: id,
      number: 1
    })
  }

  static minus(id){
    return fetch(url.minus,{
      id: id,
      number: 1
    })
  }

  static list(){
    return fetch(url.cartList)
  }

  static remove(id){
    return fetch(url.remove,{
      id: id
    })
  }
  static mrremove(ids){
    return fetch(url.mrremove, {
      ids: ids
    })
  }
}

export default Cart