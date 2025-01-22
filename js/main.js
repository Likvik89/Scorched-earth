
window.onload=function() {
    movement();
    mapBorder();
    draw_map();
}



function draw(context){

    context.drawImage(BLUETANK, 0, 0, 45, 45, BLUETANKx, BLUETANKy, 45, 45);
    context.drawImage(REDTANK, 0, frame*45, 45, 45, REDTANKx, REDTANKy, 45, 45);
    context.restore();
    
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
