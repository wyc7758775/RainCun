import { baseUrl } from './env'
import axios from 'axios'

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 50000
})

export async function upInitUrl(url = '', data = {} , dataType = 'json') {

  if( dataType === 'json' ) {
    instance.defaults.headers.post['Content-Type'] = 'application/json'
  } else {
    instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  }

  try {
    let res = await instance.post(url, data)
    return new Promise((resolve) => {
      resolve(res)
      // if (res.data.status === 200) {
      //   resolve(res)
      // } else {
      //   resolve(res)
      // }
    })
  } catch (err) {
    console.log(err)
  }
}