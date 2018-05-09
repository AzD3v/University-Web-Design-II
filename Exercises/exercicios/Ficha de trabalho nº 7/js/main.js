let map;
let gMapsLoaded = false;

window.loadGoogleMaps = function(){
if(gMapsLoaded) return window.gMapsCallback();


let script=$("<script></script>").attr("src", "http://maps.google.com/maps/api/js?key=AIzaSyCxeGbO1IDl9mhaMo6vEy1IUDgDE3ABd2E&callback=gMapsCallback").attr("type", 'text/javascript');

$("head").append(script);

}
window.gMapsCallback = function(){
gMapsLoaded = true;
 $(window).trigger('gmaps-script-loaded');
}

$(function(){
  /*  Esta função serve de callback para quando o browser adquire a posição*/
  function geoSuccess(pos) {
    map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
  }

  /*Função que deve ser aplicada ao evento‘click’do botão*/

  $("#getMyLocation").click(function(){
    navigator.geolocation.getCurrentPosition(geoSuccess);
  });
  //

  function initialize(){
  var mapOptions = {
  zoom: 8,
  center: new google.maps.LatLng(38.7437396, 9.2302438),
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map  = new google.maps.Map($("#map-canvas").get(0) ,mapOptions);}
  /*Evento  que  chama  a  função  initialize()  e  que é desencadeado  dentro  da  função chamada pelo script após o seu carregamento*/
  $(window).bind('gmaps-script-loaded', initialize);
  /*Chamada à função para carregar o script do google maps.*/
  window.loadGoogleMaps();
});
