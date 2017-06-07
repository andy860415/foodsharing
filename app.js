
// modules - make sure you install all the module
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs-extra')
const formidable = require('formidable')

// custom function
const user = require('./njs_exports/user')
const trade = require('./njs_exports/trade')
const foodpage = require('./njs_exports/foodpage')
const map = require('./njs_exports/map')
const data = require('./njs_exports/data')
const edit = require('./njs_exports/edit')
const imgur = require('./njs_exports/upload_imgur')

const app = express()

//set the viewegin fiele path
app.set('views', __dirname + '/views')

//default view engine is jade
app.set('view engine', 'ejs')
app.use(express.static( __dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.cookieParser('secret'))
app.use(bodyParser.json())
app.all('/', (req, res)=>{
	res.render('index_mainPage')
 })
app.all('/foodpage',(req, res) =>{
	foodpage.index(req,res)
})
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

app.all('/trade/:id',(req,res) =>{
	data.findTradePage(req,res)
})
app.all('/foodpage/:id',(req,res)=>{
	data.findPostPage(req,res)
})
app.all('/near',(req,res)=>{
	map.getLocation(req,res)
})
app.post('/deal',(req,res)=>{
	trade.check(req,res)
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


// Upload image & preview
app.post('/upload',  function(req, res) {
  var post_data = {};

  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    // Store post data
    post_data.logo_text = fields.logo_text;
    post_data.food = fields.food;
    post_data.price = fields.price;
    post_data.number = fields.number;
    post_data.place = fields.place;
    post_data.time = fields.time;
    post_data.gettime = fields.gettime;
    post_data.suggest = fields.suggest;
  });

  form.on('end', function(fields, files) {
    /* Temporary location of the upload file */
    var temp_path = this.openedFiles[1].path;
    /* The file name of the upload file */
    var file_name = this.openedFiles[1].name;
    /* Location where we put the uploaded file */
    var new_location = 'uploads/';

    // copy image to server
    fs.copy(temp_path, new_location + file_name, function(err) {
			if (err) {
        console.log(err);
      } else {
        // upload to imgur
        imgur.setup(req, res);
        imgur.upload(req, res, new_location + file_name, (link) => {
          post_data.pic_path = link;
          // preview post
          edit.doPreview(req, res, post_data, link);
        });
      }
    });
  });
});



var server = app.listen(3333, function() {
  console.log('Listening on port 3333')
})
