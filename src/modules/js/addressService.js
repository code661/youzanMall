import url from "./API.js"
import fetch from "./fetch.js"

class Address {
  static list(){
    return fetch(url.addressList)
  }
  static add(addressData){
    return fetch(url.addAddress,addressData)
  }

  static update(id){
    return fetch(url.updateAddress,{id:id})
  }

  static remove(id){
    return fetch(url.removeAddress,{id:id})
  }

  static setDefault(id){
    return fetch(url.setDefault,{id:id})
  }
}

export default Address