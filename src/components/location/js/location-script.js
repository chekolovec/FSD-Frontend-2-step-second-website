// Определяем переменную map
var map;
// Функция initMap которая отрисует карту на странице
window.initMap = function() {

    // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
    map = new google.maps.Map(document.getElementById('map'), {
        // При создании объекта карты необходимо указать его свойства
        // center - определяем точку на которой карта будет центрироваться
        center: {lat: 37.7920069, lng: -122.4191175},
        zoom: 13.5,
        disableDefaultUI: true,
    });
    var marker = new google.maps.Marker({
    position: {lat: 37.7920069, lng: -122.4191175},
    map: map,
    title: 'Hello World!',
    icon: './img/marker-icon.png'
    });
};
