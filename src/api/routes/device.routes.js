const {Router} = require('express')
const router = Router();

import {
    renderAdd,
    renderAll,
    renderUpdate,
    renderDelete
} from '../controllers/device.controllers';


router.post('/add', renderAdd);   // ejecuta una funcion que esta en archivos controladores
router.get('/all', renderAll);

router.put('/update/:id', renderUpdate);
router.delete('/delete/:id', renderDelete);



module.exports = router;



// ./api/device/add