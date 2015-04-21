$(document).ready(function(){/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

  /* position Amsterdam */
  var latlng = new google.maps.LatLng(39.97, -75.15);

  var mapOptions = {
    mapTypeId: google.maps.MapTypeId.ROAD,
    scaleControl: true,
    center: latlng,
    scrollWheel: false,
    mapTypeControl: true,
    mapTypeControlOptions:{
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        mapTypeIds:[
          google.maps.MapTypeId.ROADMAP,
          google.maps.MapTypeId.SATELLITE,
          google.maps.MapTypeId.HYBRID
          ]
      },
    zoom: 12,
  };
  
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

};
/* end google maps -----------------------------------------------------*/
});