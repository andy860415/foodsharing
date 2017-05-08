
var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var user = require('./njs_exports/user')
var edit = require('./njs_exports/edit')
var foodpage = require('./njs_exports/foodpage')
var app = express()

//set the viewegin fiele path
app.set('views', __dirname + '/views')

//default view engine is jade
app.set('view engine', 'ejs')
app.use(express.static( __dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.cookieParser('secret'))
app.use(bodyParser.json())
app.all('/', function(req, res) {
	res.render('index_mainPage')
 });
app.all('/foodpage',(req, res) =>{
	foodpage.index(req,res)
});
app.all('/login',(req,res) =>{
	res.render('login',{
		userName: '',
		userPassword: ''
	})
})
app.all('/register',(req,res) =>{
	res.render('register',{
		userName: '',
		userPassword: ''
	})
})
app.all('/edit', function(req,res) {
  res.render('edit')
})
app.post('/doLogin',(req,res) =>{
	user.doLogin(req,res)
})
app.post('/doRegister',(req,res) => {
	user.doRegister(req,res)
})
app.get('/ajax',(req,res) =>{
	res.send('hi'+req.query.name)
})
app.post('/doPreview',(req,res) => {
	edit.doPreview(req,res)
})


var server = app.listen(3333, function() {
  console.log('Listening on port 3333');
});