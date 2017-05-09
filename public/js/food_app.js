$(function(){
	$(window).scroll(function(){
	    let scrollVal = $(this).scrollTop()
	    let speed = 50
	    if( scrollVal >= 20 ) {
	        $("header.top").css({
	        	"background":"rgba(1,1,1,1)"
        	})
	    }else{
	    	$("header.top").css({
	    		"background": "rgba(0,0,0,0)"
	    		
        	})
	    }
	})
});

$(function(){
	$('.intros .member a').click(function(){
		const index = $(this).parents('.member').index()
		$(this).html('<br>')
		switch(index){
			case 0:
				$(this).parents('.intro').append('<p>你知道的太多了</p>')
				break
			case 1:
				$(this).parents('.intro').append('<p>沒有更多了</p>')
				break
			case 2:
				$(this).parents('.intro').append('<p>同上</p>')
				break
			case 3:
				$(this).parents('.intro').append('<a>更少..</a>')
				break
			case 4:
				$(this).parents('.intro').append('<p>忘了寫ㄏㄏ</p>')
				break
		}
	})
})
