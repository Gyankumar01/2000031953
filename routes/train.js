const express=require('express');

const router= express.Router();


const trainController=require('../controller/trainController');


router.get('/trains',trainController.home);

router.get('/trains/:id',trainController.getById);

router.post('/register',trainController.Register);

router.post('/auth',trainController.Register);



module.exports = router;