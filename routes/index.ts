
import express from 'express';
let router = express.Router();
export default router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
})

router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', { title: 'About Us' });
})
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
})

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
})

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
})

//module.exports = router;
