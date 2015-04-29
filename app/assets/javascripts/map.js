var map
var markersArray = [];
function  initialize(){
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
    map = new google.maps.Map(mapDiv, mapOptions); 
  }