var geocoder
var map

(function(){
  window.onload = function(){
    var mapDiv = document.getElementById('map-canvas');
    var latlng = new google.maps.LatLng(39.97, -75.15);
    var mapOptions = {
      zoom: 9,
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
    map = new google.maps.Map(mapDiv, mapOptions); 
  }
})();