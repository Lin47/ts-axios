import axios from '../../src/axios'


const CancelToken = axios.CancelToken
const source = CancelToken.sourse()

axios.get('/cancel/get', {
  cancelToken: source.token
}).catch(e => {
  if (axios.isCancel(e)) {
    console.log('request canceled', e.message)
  }
})

setTimeout(() => {
  source.cancel('operation canceled by the user')

  axios.post('/cancel/post', { a: 1 }, {
    cancelToken: source.token
  }).catch(e => {
    if (axios.isCancel(e)) {
      console.log(e.message)
    }
  })
}, 100);