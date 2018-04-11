$(function(){
	$('#btnsubmit').on('click', function(e){
		e.preventDefault();
		$.ajax({
			url: '/receive',
			type: 'get',
			dataType: 'json',
			data: {
				username: $('#username').val()
			},
			success: function(data){
				console.log(data);
			},
			error: function(){

			}
		})
	})
})