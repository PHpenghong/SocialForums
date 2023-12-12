import request from '@/utils/request/index'
import { API, GET } from '../const'

export const testReq = () => {
  return request({
    url: `${API}test?val=test`,
    method: GET
  })
}
