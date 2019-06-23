import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'

function axios(config: AxiosRequestConfig): AxiosPromise {
  // TODO
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transifomURL(config)
  config.headers = transfromHeaders(config)
  config.data = transformRequestData(config)
}

function transifomURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transfromHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data = null } = config
  return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}

export default axios
