import { message } from 'ant-design-vue'
import { useUserStore } from '@/store/modules/user'

// import router from '@/router/index'

const codeErr = (res: any) => {
  const { logout } = useUserStore()
  if (!res || !res.code) return
  switch (parseInt(res.code, 10)) {
    case 1001:
      message.error(res.message || '验证码不正确或已过期', 3)
      break
    case 1002:
      message.error(res.message || '用户名或密码错误', 3)
      logout()
      break
    case 1003:
      message.error(res.message || '缺少Token', 3)
      break
    case 1004:
      message.error(res.message || '未登录或Token过期', 3)
      break
    case 1005:
      message.error(res.message || '邮箱已被注册', 3)
      break
    default:
      message.error(
        res.message || `其他错误，状态码：${res.code}，请联系管理员`,
        3
      )
      break
  }
}

export default codeErr
