let map;
let gMapsLoaded = false;

window.loadGoogleMaps = function(){
if(gMapsLoaded) return window.gMapsCallback();

// Exercício 2
let script = $("<script></script>").attr("src", "http://maps.google.com/maps/api/js?"
 + "key=AIzaSyCxeGbO1IDl9mhaMo6vEy1IUDgDE3ABd2E"
 + "&callback=gMapsCallback").attr("type", 'text/javascript');

    $("head").append(script);

}

window.gMapsCallback = function(){

    gMapsLoaded = true;

 $(window).trigger('gmaps-script-loaded');

}




$(function(){

  // Exercício 5
  // Esta função serve de callback para quando o browser adquire a posição
  function geoSuccess(pos) {
      map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
  }

  // Exercício 4
  // Função aplicada ao evento 'click' do botão
  $("#getMyLocation").click(function(){
    navigator.geolocation.getCurrentPosition(geoSuccess);
  });

// Exercício 3
function initialize(){

  var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(38.7437396, 9.2302438),
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map($("#map-canvas").get(0), mapOptions);}

  /* Evento  que tem por objetivo chamar a função initialize(),
  sendo desencadeado dentro  da função chamada pelo script após carregamento do mesmo */
  $(window).bind('gmaps-script-loaded', initialize);

  // A função que carrega o script do Google Maps é então chamada
  window.loadGoogleMaps();

});
