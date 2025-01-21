
window.onload=function() {
    
        
    var canvas = document.getElementById("battlefield");
    var context = canvas.getContext("2d");

    var REDTANK = new Image();
    REDTANK.src = "sprites/red_tank.png"

    var BLUETANK = new Image();
    BLUETANK.src = "sprites/blue_tank.png";

    var loaded_images = 0;
    var images = 2;

    function load_image() {
        loaded_images++;
        if (loaded_images >= images) {
            start();
        }
    }

    //when the images are loaded, they 
    BLUETANK.onload = function(){
        load_image();
    };

    REDTANK.onload = function(){
        load_image();
    }
}

function start() {
    //                   img        x          y
    context.drawImage(BLUETANK, BLUETANKx, BLUETANKy);
    context.drawImage(REDTANK, REDTANKx, REDTANKy);
}