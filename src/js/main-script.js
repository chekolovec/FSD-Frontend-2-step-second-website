$('.messenger-wrapper .messenger-button').click(function(event) {
	$('.messenger').toggle();
	var text = $(this).text();
    $(this).text(
        text == "Напишите нам сообщение" ? "Скрыть чат" : "Напишите нам сообщение");
});