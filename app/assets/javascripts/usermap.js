function initUserPage() {
  var mapDiv = document.getElementById('usermap-canvas');
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

var usermarkerarray = [];
var markersArray = [];

function createUserMarkers(usermarkerarray){
  var map = initUserPage();
  if (markersArray) {
    for (var i = 0; i < markersArray.length; i++){
      markersArray[i].setMap(null);
    }
  }

  var length = usermarkerarray.length;
  var bounds = new google.maps.LatLngBounds();

  for (var i = 0; i < length; i++){
    var pinposition = usermarkerarray[i];
    bounds.extend(pinposition);
    var marker = new google.maps.Marker({
        position: pinposition,
        map: map,
        animation: google.maps.Animation.DROP
        });// create the marker here
    markersArray.push(marker);
  }
  map.fitBounds(bounds); 
}