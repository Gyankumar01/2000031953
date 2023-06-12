const express=require('express');

const router= express.Router();

router.use('/train',require('./train'));




module.exports = router;

