const {Router} = require('express')
const router = Router();

import { renderLogin } from '../controllers/ht.controllers';


router.get('/login', renderLogin);


module.exports = router;