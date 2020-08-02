const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home unlogged page. */
router.get('/home', function(req, res, next) {
  res.render('home');
});

module.exports = router;
