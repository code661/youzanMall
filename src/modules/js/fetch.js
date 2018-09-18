import axios from "axios"

function fetch(url, data){
  return new Promise((resolve, reject)=>{
    axios.post(url,data).then((res)=>{
      if(res.data.status === 200){
        resolve(res)
      }
      if(res.data.status === 300){
        location.href = "login.html"
        resolve(res)
      }
      resolve(res)
    })
  }).catch((err)=>{
    reject(err)
  })
}

export default fetch