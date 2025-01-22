
window.onload=function() {
    movement();
}

function draw(context){
    if (images_ready) {
    
    context.drawImage(BLUETANK, BLUETANKx, BLUETANKy);
    context.drawImage(REDTANK, REDTANKx, REDTANKy);
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

    context.clearRect(0, 0, 1000, 800);
    draw(context);
    setTimeout(animate,5);

}