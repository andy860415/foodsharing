
const doLogin = function ( req , res ) {
	if ( req.body['account'] ){
		res.cookie('userid',req.body['account'],{path: '/',signed: true})
		res.cookie('password',req.body['password'],{path: '/',signed: true})
		return res.redirect('/foodpage')
	}else{
		return res.redirect('/login')
	}
}

exports.doLogin = doLogin
