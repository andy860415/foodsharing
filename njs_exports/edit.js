const doPreview = function (req, res, post_data, link) {
  res.render('preview',{
    logo_text: post_data.logo_text,
    pic_path: link,
    food: post_data.food,
		price: post_data.price,
		number: post_data.number,
    place: post_data.place,
		time: post_data.time,
    gettime: post_data.gettime,
		suggest: post_data.suggest
  })
}

exports.doPreview = doPreview
