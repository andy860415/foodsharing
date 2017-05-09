

var fs = require('fs')
const getLocation = function(req,res){
	const postList = JSON.parse(fs.readFileSync('./articles.json'))
	res.render('map_index',{
		locations: [
			{
				lat: 22.997846,
				lng: 120.218399
			},
			{
				lat: 22.994846,
				lng: 120.222399
			},
			{
				lat: 22.969846,
				lng: 120.238399
			},
			{
				lat: 22.973846,
				lng: 120.241323
			},
			{
				lat: 22.979843,
				lng: 120.221389
			},
			{
				lat: 22.979846,
				lng: 120.221399
			},
			{
				lat: 22.959846,
				lng: 120.251399
			},
			{
				lat: 22.959846,
				lng: 22.959846
			},
		],
		posts: postList["posts"]
	})
}

exports.getLocation = getLocation