var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views')
app.set('view engine', 'jade')//default template engine
app.listen(port)

console.log('HMDB start on port:' + port)

//index page
app.get('/', function(req, res){
  res.render('index', {
    title : 'HMDB homepage'
  })
})

//detail page
app.get('/movie/:id', function(req, res){
  res.render('detail', {
    title : 'HMDB detail page'
  })
})

//admin page
app.get('/admin/movie', function(req, res){
  res.render('admin', {
    title : 'HMDB admin page'
  })
})

//list page
app.get('/admin/list', function(req, res){
  res.render('list', {
    title : 'HMDB list page'
  })
})

