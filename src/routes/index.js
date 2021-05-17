const { Router } = require('express')


const router = Router();

router.use('/', require('./ht'));        // aqui enlazamos HTTPS


module.exports = router;
