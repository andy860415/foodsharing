
var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var app = express()

//set the viewegin fiele path
app.set('views', __dirname + '/views')

//default view engine is jade
app.set('view engine', 'ejs')
app.use(express.static( __dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) 
app.all('/', function(req, res) {
	res.render('index_mainPage')
 });  
app.all('/foodpage',(req, res) =>{  
	res.render('index')
});
app.get('/ajax',(req,res) =>{
	res.send('hi'+req.query.name)
})  

 var server = app.listen(3000, function() {  
  console.log('Listening on port 3000');  
 });   