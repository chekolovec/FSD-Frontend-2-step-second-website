$('#messenger__button').click(function(event) {
	let msg = $('#messageToSend').val();
	$('#messenger__message').append('<p class="myMessage">' + msg + '</p>');
	$('#messageToSend').val('');

});