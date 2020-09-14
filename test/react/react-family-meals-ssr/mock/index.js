const list = require('./data.js');
const router = require('koa-router')();
module.exports = router;
// 接口的开放
router.get('/mock/api/data', async (ctx) => {
    ctx.body = list;
});
