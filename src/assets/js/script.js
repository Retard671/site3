// КАРТЫ
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 55.74804965161254, lng: 37.627272913547024 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: { lat: 55.74844965161254, lng: 37.627272913547024 },
    // center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: "assets/img/12map/map_icon.png",
  });

  infowindow = new google.maps.InfoWindow({
    // pixelOffset: new google.maps.Size(200, 100),
    content:
      '<div class="map_window"><div class="map_window__city">г. Москва</div><div class="map_window__adress_and_phone">ул. Садовническая, дом 5, офис 4-6 <br />700 от м. Новокузнецкая</div><div class="map_window__adress_and_phone">Тел: +7 (926) 423 01 00</div><div class="map_window__mail">info@glopt.ru</div></div>',
  });
  infowindow.open(map, marker);
}

window.initMap = initMap;

// КАРТЫ



$(document).ready(function(){
  $('.reviews__slider').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
          centerMode: true,
          slidesToShow: 3
        }
      },
  ]
  });
});


