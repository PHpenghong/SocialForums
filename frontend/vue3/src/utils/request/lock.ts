const maxConn = 6
let conn = 0
const queue: Function[] = []

const lock = (fn: Function) =>
  new Promise((resolve, reject) => {
    const request = async () => {
      console.log('in-----lock---')

      try {
        const res = await fn()
        resolve(res)
      } catch (error) {
        reject(error)
      } finally {
        conn--
        next()
      }
    }

    conn++
    if (conn >= maxConn) {
      queue.push(request)
    } else {
      request()
    }

    const next = () => {
      if (queue.length === 0) {
        return
      }
      const req: any = queue.shift()
      req()
    }
  })

export default lock
