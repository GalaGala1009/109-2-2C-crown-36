var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('CROWN_36', { title: '吳偉政 409417036' });
});

module.exports = router;