var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AR - Web Portfolio' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'AR - About'});
})

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'AR - Projects'})
})

module.exports = router;
