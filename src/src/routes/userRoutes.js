const  express = require('express');
const auth=require('../middleware/auth')
const { list, details ,updates,destroy,save} = require('../controllers/userController');
const router=express.Router();

router.get('/auth' ,list);

router.post('/create',save);

router.get('/:id',details);

router.put('/:id',updates);

router.delete('/:id',destroy);



module.exports =router;