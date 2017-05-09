$(()=>{
	
	//find the rest of amount
	const content = ($('#amount-of-products').text()).split('')
	const amount = parseInt(content[5])
	let options = ''

	//show the number of select list 
	for ( let i = 0 ; i < amount ; i++ ){
		options += '<option value = '+(i+1)+'>'+(i+1)+'</option>'
	}
	$('#amount').html(options)
});

(function(){
	$('#next').click(()=>{
		const name = $('#name').val()
		const psd = $('#password').val()
		const mail = $('#mail').val()
		const phone = $('#phoneNumber').val()
		if ( name && psd && mail && phone) {
			$('.trade').css({
			'z-index':"2"
			})
			$('.creditCardBox').css({
				'z-index':"1"
			})
			$('.steps > .step1').css({
				"background-color":"#C1C4C8"
			})
			$('.steps > .step2').css({
				"background-color":"#2471A3"
			})
			$('#remind1').html('')
		}else{
			$('#remind1').html('請填寫完所有表格~')
		}
	})
	$('#previous').click(()=>{
		$('.trade').css({
			'z-index':"1"
		})
		$('.creditCardBox').css({
			'z-index':"2"
		})
		$('.steps > .step2').css({
			"background-color":"#C1C4C8"
		})
		$('.steps > .step1').css({
			"background-color":"#2471A3"
		})
	})
	$('#complete').click(()=>{
		let form_content = {
			userName: $('#name').val(),
			password: $('#password').val(),
			mail: $('#mail').val(),
			phoneNumber: $('#phoneNumber').val(),
			amount: $('#amount').val()
		}
		$.post('trade/deal',form_content,(data,status)=>{
			$('body').html('')
		})
	})
})()