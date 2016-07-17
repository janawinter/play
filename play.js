$(document).ready(function(){

    $( ".button" ).click(function() {
        var drum = $(this).attr("id");
        var audio = new Audio("myaudio/"+drum+".mp3")
        audio.play();
    });

    $(document).keydown(function(e){
        var drum ="";
        var char = String.fromCharCode(e.which).toLowerCase();
        console.log(char);
        switch(char){
            case "a" :
            drum="kick";
            break;

            case "s" :
            drum="snare";
            break;

            case "d":
            drum="tomtom1";
            break;

            case "f":
            drum="clap";
            break;

            case "j":
            drum="hihat";
            break;

            case "k":
            drum="cymbal";
            break;

            case "l":
            drum="tomtom2"
            break;

            case "º":
            drum="tomtom3";
            break;
        }
        if (typeof(drum) !=='undefined'){
        $("#"+drum).click();
        }

    });
});


