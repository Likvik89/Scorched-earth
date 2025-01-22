
window.onload=function() {
    movement();
    mapBorder();
}

function draw(context){
    var canvas = document.getElementById("battlefield");

    if (images_ready) {

        context.drawImage(BLUETANK, 0, 0, 45, 45, BLUETANKx, BLUETANKy, 45, 45);
        context.drawImage(REDTANK, 0, frame*45, 45, 45, REDTANKx, REDTANKy, 45, 45);

        context.restore();
    }

    else {
        images_ready = true;
        context.drawImage(BLUETANK, blue_start_x, blue_start_y);
        context.drawImage(REDTANK, red_start_x, red_start_y);
    }
    
}

function animate(){
    var canvas = document.getElementById("battlefield");
    var context = canvas.getContext("2d");

    frame++;
    if (frame >= 4) {
        frame = 1;
    }

    context.clearRect(0, 0, 1024, 800);
    draw(context);
    setTimeout(animate,5);

}