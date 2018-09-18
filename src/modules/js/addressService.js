import url from "./API.js"
import fetch from "./fetch.js"

class Address {
  static list(){
    return fetch(url.addressList)
  }
}

export default Address