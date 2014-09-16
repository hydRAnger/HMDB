var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()
var bodyParser = require('body-parser')

app.set('views', './views/pages')
app.set('view engine', 'jade')//default template engine
app.use(bodyParser())
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

console.log('HMDB start on port:' + port)

//index page
app.get('/', function(req, res){
  res.render('index', {
    title : 'HMDB homepage',
    movies : [
      {
        title : 'Bat Man',
        _id : 1,
        poster : 'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX640_SY720_.jpg'
      },
      {
        title : 'Matrix',
        _id : 2,
        poster : 'http://ia.media-imdb.com/images/M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_SX640_SY720_.jpg'
      }
    ]
  })
})

//detail page
app.get('/movie/:id', function(req, res){
  res.render('detail', {
    title : 'HMDB detail page',
    movie : {
      director : "Norlan",
      nation : "US",
      title : "Bat Man",
      year : 2008,
      poster : 'http://player.youku.com/player.php/sid/XMzE2ODM0Njk2/v.swf',
      language : "English",
      summary : "从亲眼目睹父母被人杀死的阴影中走出来的“蝙蝠侠”，经历了成长之后，已经不再是那个桀骜不的孤单英雄了。在警官吉姆·戈登和检查官哈维·登特的通力帮助下，“蝙蝠侠”无后顾之忧地继续满世界的奔波，与日益增长起来的犯罪威胁做着永无休止的争斗，而他所在的高谭市，也是进展最为明显的地方，犯罪率以一种惊人的速度持续下降着，毕竟对方是能够上天入地的“蝙蝠侠”，不借两个胆子谁还敢造次呢？不过像高谭这种科技与污秽并存的城市，平静是不可能维持太久的，果不其然，新一轮的混乱很快就席卷了整个城市，人们再一被被恐慌所笼罩着，而声称愿意为这一切负责的，自然就是所有混乱的源头以及支配者--“小丑”了。 ",
      flash : "http://v.youku.com/v_show/id_XMzE2ODM0Njk2.html"

    }
  })
})

//admin page
app.get('/admin/movie', function(req, res){
  res.render('admin', {
    title : 'HMDB admin page',
    movie : {
      title : '',
      director : '',
      nation : '',
      year : '',
      poster : '',
      flash : '',
      summary : '',
      language : ''
    }
  })
})

//list page
app.get('/admin/list', function(req, res){
  res.render('list', {
    title : 'HMDB list page'
  })
})

