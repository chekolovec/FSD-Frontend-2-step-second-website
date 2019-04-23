$(".stages-slider-1").slider({
    min: 1,
    max: 3,
    value: 1,
    range: "min",
    animate: "slow",
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

$(".stages-slider-1").bind( "slidechange", function(event, ui){
  $('.contact-form__block1').hide();
  $('.contact-form__block2').hide();
  $('.contact-form__block3').hide();
  $('.contact-form__block'+ui.value).show();
  $('.arrow-wrapper-left').css('display', ui.value > 1 ? 'block' : 'none');
  $('.arrow-wrapper-right').css('display', ui.value < $(".stages-slider-1").slider( "option", "max" ) ? 'block' : 'none');
});

$('.arrow-right').on('click', function(event) {
  var value = $(".stages-slider-1").slider( "option", "value" );
  $('.stages-slider-1').slider("value", value+1);
});

$('.arrow-left').on('click', function(event) {
  var value = $(".stages-slider-1").slider( "option", "value" );
  $('.stages-slider-1').slider("value", value-1);
});

// Определяем переменную map
var map;
// Функция initMap которая отрисует карту на странице
window.initMap = function() {

    // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
    map = new google.maps.Map(document.getElementById('map'), {
        // При создании объекта карты необходимо указать его свойства
        // center - определяем точку на которой карта будет центрироваться
        center: {lat: 59.808016, lng: 30.379293},
        zoom: 10,
        disableDefaultUI: true,
    });
    var marker = new google.maps.Marker({
    position: {lat: 59.808016, lng: 30.379293},
    map: map,
    title: 'Hello World!',
    icon: './img/marker-icon.png'
    });
};

$('.contact-form__block1 .input').on('input', function(event) {
  if ($(this).val() !== '') {
    $(this).parent().removeClass('input-error').addClass('input-success');
  } else {
    $(this).parent().removeClass('input-success').addClass('input-error');
  }
  event.preventDefault();
});
