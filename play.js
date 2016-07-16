$(document).ready(function(){

$( ".button" ).click(function() {
    var drum = $(this).attr("id");
    var audio = new Audio("myaudio/"+drum+".mp3")
    audio.play();
});
});
