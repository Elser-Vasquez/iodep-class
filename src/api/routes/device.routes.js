const {Router} = require('express')
const router = Router();

import {
    renderAdd,
    renderAll
} from '../controllers/device.controllers';


router.post('/add', renderAdd);
router.get('/all', renderAll);



module.exports = router;