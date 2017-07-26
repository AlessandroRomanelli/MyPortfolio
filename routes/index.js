var express = require('express');
var router = express.Router();
var projects = require('../data/projects');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'AR - Web Portfolio'
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'AR - About'});
})

router.get('/projects', function(req, res, next) {
  res.render('projects', {
    title: 'AR - Projects',
    projects: projects
  })
})

module.exports = router;
