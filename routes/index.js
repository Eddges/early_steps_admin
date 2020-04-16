var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin_login', { title: 'Express' });
});

router.get('/admin_login', function(req, res, next) {
  res.render('admin_login', { title: 'Express' });
});

// router.get('/register', function(req, res, next) {
//   res.render('register', { title: 'Express' });
// });

router.get('/admin_register', function(req, res, next) {
  res.render('admin_register', { title: 'Express' });
});

// router.get('/dashboard', function(req, res, next) {
//   res.render('dashboard', { title: 'Express' });
// });

router.get('/admin_schedule', function(req, res, next) {
  res.render('admin_schedule', { title: 'Express' });
});

router.get('/admin_videos', function(req, res, next) {
  res.render('admin_videos', { title: 'Express' });
});

router.get('/admin_profile', function(req, res, next) {
  res.render('admin_profile', { title: 'Express' });
});

router.get('/admin_progress', function(req, res, next) {
  res.render('admin_progress', { title: 'Express' });
});

router.get('/admin_feedback', function(req, res, next) {
  res.render('admin_feedback', { title: 'Express' });
});

router.get('/admin_course', function(req, res, next) {
  res.render('admin_course', { title: 'Express' });
});

router.get('/admin_courseUpdate', function(req, res, next) {
  res.render('admin_courseUpdate', { title: 'Express' });
});

router.get('/admin_task', function(req, res, next) {
  res.render('admin_task', { title: 'Express' });
});

router.get('/admin_notification', function(req, res, next) {
  res.render('admin_notification', { title: 'Express' });
});

router.get('/admin_bootcamp', function(req, res, next) {
  res.render('admin_bootcamp', { title: 'Express' });
});

router.get('/view_feedback', function(req, res, next) {
  res.render('view_feedback', { title: 'Express' });
});

router.get('/admin_progressUpdate', function(req, res, next) {
  res.render('admin_progressUpdate', { title: 'Express' });
});

router.get('/admin_findUser', function(req, res, next) {
  res.render('admin_findUser', { title: 'Express' });
});

router.get('/view_users', function(req, res, next) {
  res.render('view_users', { title: 'Express' });
});

router.get('/bootcamps', function(req, res, next) {
  res.render('bootcamps', { title: 'Express' });
});

router.get('/courses', function(req, res, next) {
  res.render('courses', { title: 'Express' });
});

router.get('/classes', function(req, res, next) {
  res.render('classes', { title: 'Express' });
});

router.get('/assignments', function(req, res, next) {
  res.render('assignments', { title: 'Express' });
});

router.get('/feedbacks', function(req, res, next) {
  res.render('feedbacks', { title: 'Express' });
});

router.get('/view_progress', function(req, res, next) {
  res.render('view_progress', { title: 'Express' });
});


module.exports = router;
