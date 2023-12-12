const { getCaptcha, getTest } = require('../../../controllers/otherController')

const router = new (require('koa-router'))()

router.get('/captcha/:timer', getCaptcha)

router.get('/test', getTest)

// router.use(childRouter.routes())

module.exports = router
