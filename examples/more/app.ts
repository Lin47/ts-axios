import axios from '../../src/axios'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

// document.cookie = 'a=b'
// axios.get('/more/get').then(res => {
//   console.log(res)
// })

// axios.post('http://127.0.0.1:8088/more/server2', {}, {
//   withCredentials: true
// }).then(res => {
//   console.log(res)
// })

// const instance = axios.create({
//   xsrfCookieName: 'XSRF-TOKEN-D',
//   xsrfHeaderName: 'X-XSRF-TOKEN-D'
// })

// instance.get('/more/get').then(res => {
//   console.log(res)
// })

// const instance = axios.create()

// function caculatePercentage(loaded: number, total: number) {
//   return Math.floor(loaded * 1.0) / total
// }

// function loadProgressBar() {
//   const setupStartProgress = () => {
//     instance.interceptors.request.use(config => {
//       NProgress.start()
//       return config
//     })
//   }
//   const setupUpdateProgress = () => {
//     const update = (e: ProgressEvent) => {
//       console.log(e)
//       NProgress.set(caculatePercentage(e.loaded, e.total))
//     }
//     instance.defaults.onDownloadProgress = update
//     instance.defaults.onUploadProgress = update
//   }
//   const setupStopProgress = () => {
//     instance.interceptors.response.use(response => {
//       NProgress.done()
//       return response
//     }, err => {
//       NProgress.done()
//       return Promise.reject(err)
//     })
//   }
//   setupStartProgress()
//   setupUpdateProgress()
//   setupStopProgress()
// }
// loadProgressBar()

// const downloadEL = document.getElementById('download')
// downloadEL!.addEventListener('click', e => {
//   instance.get('https://img.mukewang.com/5cc01a7b0001a33718720632.jpg')
// })

// const uploadEL = document.getElementById('upload')
// uploadEL!.addEventListener('click', e => {
//   const data = new FormData()
//   const fileEL = document.getElementById('file') as HTMLInputElement
//   if (fileEL.files) {
//     data.append('file', fileEL.files[0])
//     instance.post('/more/upload', data)
//   }
// })

axios.post('/more/post', {
  a: 1
}, {
  auth: {
    username: 'abc',
    password: 'fff'
  }
}).then(res => {
  console.log(res)
})