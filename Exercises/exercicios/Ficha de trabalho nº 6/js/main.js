$(function(){

  //alinea 3

  const youtubeAPIKey ="AIzaSyAvt_YeiVfbMrGKdNFaMuMo760ViQemm0k";

  $("button").click(function(){
   let query =$('#search');
   let url ="https://www.googleapis.com/youtube/v3/search?q="+query+"&maxResults=5&part=snippet&key="+youtubeAPIKey;
   url=encodeURI(url);
   let i = 0;
   $.get(url,function(response,status){
     if (status=='success') {
       for (let resultado of response.items) {
         let img = $("<img>").attr('src', resultado.snippet.thumbnails.default.url).attr('width', resultado.snippet.thumbnails.default.width).attr('height', resultado.snippet.thumbnails.default.height).attr("id", "id"+i );

           img.click(function(){
            window.open("https://www.youtube.com/embed/"+resultado.id.videoId);
            // console.log(resultado);
           });
           $("#resposta").append("<br>").append(img);
           i++;
       }
     }
     console.log('status, response');
   });
 });
});
