
window.onload=function() {
    
    movement();    

    var loaded_images = 0;
    var images = 2;

    function load_image() {
        loaded_images++;

        if (loaded_images == images) {
            animate();
            console.log(animate);
        }
    }

    //draw tank after it has loaded
    BLUETANK.onload = function(){
        load_image();
        console.log("bluetank loaded");
    };

    REDTANK.onload = function(){
        load_image();
        console.log("redtank loaded");
    }
}

function draw(context){
    //                   img        x          y
    context.drawImage(BLUETANK, BLUETANKx, BLUETANKy);
    context.drawImage(REDTANK, REDTANKx, REDTANKy);
    context.restore();
}

function animate(){
    var canvas = document.getElementById("battlefield");
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, 1000, 800);
    draw(context);
    setTimeout(animate,5);


    console.log(context);

}