
window.onload=function() {
    //movement();
    //mapBorder();
    draw_map();
    }

function draw(context) {
    
    context.drawImage(BLUETANK, BLUETANKx, BLUETANKy);
    context.drawImage(REDTANK, REDTANKx, REDTANKy);
    context.restore();

}
function draw(context){

    context.drawImage(BLUETANK, 0, 0, 45, 45, BLUETANKx, BLUETANKy, 45, 45);
    context.drawImage(REDTANK, 0, frame*45, 45, 45, REDTANKx, REDTANKy, 45, 45);
    context.restore();
    
}


function animate() {
    frame+=1;

    if (frame>3) {
        frame = 0;
    }

    var canvas = document.getElementById("battlefield");

    if (!canvas) {
        console.error("Canvas element with ID 'battlefield' not found!");
        return;
    }

    var context = canvas.getContext("2d");

    // Clear the canvas at the start of each frame
    if (drawing) {
        context.clearRect(BLUETANKx, BLUETANKy, tankWidth, tankHeight);
        context.clearRect(REDTANKx,REDTANKy, tankWidth, tankHeight);
    }
    else {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Update tank movement and draw them
    updateMovement();  // Update tank movement
    draw(context);     // Draw the tanks on the canvas

    // Call animate recursively using requestAnimationFrame for smooth looping
    requestAnimationFrame(animate);
    
    console.log(drawing);
}
