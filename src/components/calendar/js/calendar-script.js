$('#datepicker-container').datepicker({
	showOtherMonths: true,
	selectOtherMonths: true,
	showButtonPanel: true,
	firstDay: 1
});

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
$('.calendar #today').text(dd);