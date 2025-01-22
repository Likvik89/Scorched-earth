
window.onload=function() {
    
    movement();    



    var loaded_images = 0;
    var images = 2;

    function load_image() {
        loaded_images++;
        if (loaded_images >= images) {
            animate();

        }
    }

    //draw tank after it has loaded
    BLUETANK.onload = function(){
        load_image();
    };

    REDTANK.onload = function(){
        load_image();
    }
}

function start(){

    //game_loop()
}

function animate(){
    var canvas = document.getElementById("battlefield");
    var context = canvas.getContext("2d");
    //                   img        x          y
    context.drawImage(BLUETANK, BLUETANKx, BLUETANKy);
    console.log(context);

}
/*
function game_loop() {

}
*/
