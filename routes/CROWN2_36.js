var express = require('express');
var router = express.Router();


const categories = require('../data/categories');

const crown2Controller_36 = require('../controllers/crown2Controller_36');


const db = require('../utils/database'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('CROWN2_36', { 
    title: '吳偉政 409417036(static)',
    data: categories
  });
});

router.get('/homepage', crown2Controller_36.getHomepage );

router.get('/shop_36/:product', crown2Controller_36.getProductsByCategory);


module.exports = router;