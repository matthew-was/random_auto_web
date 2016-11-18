var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      head: false,
      title: 'Express',
      body: ''
    });
});

module.exports = router;
