var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('plane', { title: 'search results plane' });
});

module.exports = router;
