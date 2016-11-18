var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/page1', function(req, res, next) {
  res.render('index', {
    head: true,
    title: 'Page 1',
    body: 'This is a random text for page 1.'
  });
});

router.get('/page2', function(req, res, next) {
  res.render('index', {
    head: true,
    title: 'Page 2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum nibh at nibh aliquet, sit amet dapibus mi pellentesque. Proin ipsum ipsum, maximus ac pulvinar quis, volutpat non sem. Maecenas a lacus est. Maecenas id risus sit amet metus facilisis ornare id non dolor. Praesent nec erat sit amet augue dictum dapibus in ut quam. Sed vel accumsan tellus. Phasellus nisl enim, varius vitae massa tincidunt, viverra porta sapien.'
  });
});

router.get('/page3', function(req, res, next) {
  res.render('index', {
    head: true,
    title: 'Page 3',
    body: 'Nothing special here...'
  });
});

module.exports = router;