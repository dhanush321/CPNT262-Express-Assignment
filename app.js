const path = require('path');
const express = require('express');
const ejs = require('ejs');
const pageInfo = require('./pageInfo');
const app = express();

app.set('view engine','ejs');

app.get('/',function(req, res) {  
  res.render('index',pageInfo.index);
});

app.get('/index',function(req, res) {  
  res.render('index',pageInfo.index);
});

app.get('/about',function(req, res) {  
  res.render('about',pageInfo.about);
});

app.get('/projects',function(req, res) {  
  res.render('projects',pageInfo.projects);
});

app.get('/contact',function(req, res) {  
  res.render('contact',pageInfo.contact);
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});