$(function() {
  const youtubeAPIKey =
    "AIzaSyAvt_YeiVfbMrGKdNFaMuMo760ViQemm0k";
  let url =
    "https://www.googleapis.com/youtube/v3/search?q=" + query + "&maxResults=5&part=snippet&key=" + youtubeAPIKey;
});