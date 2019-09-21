var express = require('express');
var router = express.Router();
var os = require('os');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register',function(req,res)
{
  var hostname = os.hostname()
  res.send(hostname);
});

router.get('/admin',function(req,res)
{
  res.render('admin');
});

router.get('/list',function(req,res)
{
  user.find(function(err,data)
  {
    if(err){res.send(err);
    }
    res.render("entered",{data:data});
  });
})






module.exports = router;
