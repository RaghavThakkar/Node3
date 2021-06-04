
import express from 'express';
let router = express.Router();
export default router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,page:'main'});
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home',page:'main' });
})

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Us',page:'about' });
})
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Projects',page:'project' });
})

router.get('/service', function(req, res, next) {
  res.render('index', { title: 'Services',page:'service' });
})

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact',page:'contact' });
})

//module.exports = router;
