$(".stages-slider-1").slider({
    min: 1,
    max: 5,
    value: 4,
    range: "min",
    animate: "fast",
});
var opt = $(".stages-slider-1").data().uiSlider.options,
min = opt.min,
raz = opt.max - min;
value = opt.value;
for (var i = 0; i <= raz; i++) {
    $(".stages-slider-1").append($('<div class="slider-point point-'+(min)+'">'+(min++)+'</div>').css('left',(i/raz*100)+'%'));
};
for(let i = 1; i <= value; i++) {
	$('.stages-slider-1').children('.point-'+i).addClass('coloured');
}


console.log($(".stages-slider-1").slider("value"));
$(".stages-slider-1").slider({
   change: function(event, ui) {
   	for(let i = 1; i <= ui.value; i++) {
   		$(this).children('.point-'+i).addClass('coloured');
   };
	var max = $(this).slider( "option", "max" );
   	for(let j = ui.value + 1; j <= max; j++) {
   		$(this).children('.point-'+j).removeClass('coloured');
   	};
   }
});