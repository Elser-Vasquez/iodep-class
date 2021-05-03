const { Router } = require('express')

const router = Router();


router.use('/device', require('./device.routes'));


module.exports = router;
