// Определяем переменную map
var map;
// Функция initMap которая отрисует карту на странице
window.initMap = function() {

    // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
    map = new google.maps.Map(document.getElementById('map'), {
        // При создании объекта карты необходимо указать его свойства
        // center - определяем точку на которой карта будет центрироваться
        center: {lat: 59.950742, lng: 30.350184},
        zoom: 9,
        disableDefaultUI: true,
    });
    var marker = new google.maps.Marker({
    position: {lat: 59.834240, lng: 30.309668},
    map: map,
    title: 'Hello World!',
    icon: './img/marker-icon.png'
    });
    var marker = new google.maps.Marker({
    position: {lat: 59.826510, lng: 30.402879},
    map: map,
    title: 'Hello World!',
    icon: './img/marker-icon.png'
    });
    var marker = new google.maps.Marker({
    position: {lat: 59.947155, lng: 30.498849},
    map: map,
    title: 'Hello World!',
    icon: './img/marker-icon.png'
    });
    var marker = new google.maps.Marker({
    position: {lat: 60.096091, lng: 30.365904},
    map: map,
    title: 'Hello World!',
    icon: './img/marker-icon.png'
    });
    var marker = new google.maps.Marker({
    position: {lat: 60.071697, lng: 30.208847},
    map: map,
    title: 'Hello World!',
    icon: './img/marker-icon.png'
    });
    var marker = new google.maps.Marker({
    position: {lat: 60.022528, lng: 30.441236},
    map: map,
    title: 'Hello World!',
    icon: './img/marker-icon.png'
    });
};
