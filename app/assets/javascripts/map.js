$(function() {
  initindexPage();
});
$(window).bind('page:change', function() {
  initindexPage();
});
 
function initindexPage() {
  var mapDiv = document.getElementById('map-canvas');
  var latlng = new google.maps.LatLng(39.97, -75.15);
  var mapOptions = {
    zoom: 2,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROAD,
    scaleControl: true,
    mapTypeControl: true,
    mapTypeControlOptions:{
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds:[
        google.maps.MapTypeId.ROADMAP,
        google.maps.MapTypeId.SATELLITE,
        google.maps.MapTypeId.HYBRID
        ]
    }

  };
  var map = new google.maps.Map(mapDiv, mapOptions); 
  return map;
}

function createMarker(lat, lng){
  var map = initPage();
  var pinposition = new google.maps.LatLng(lat, lng);
  map.setCenter(pinposition);
  var marker = new google.maps.Marker({
    position: pinposition,
    animation: google.maps.Animation.DROP
  });
  marker.setMap(map);
}