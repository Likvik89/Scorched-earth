window.onload = function() {
    animate(); // Start animation loop
    mapBorder(); // Assuming this function is doing something related to the map

window.onload=function() {
    movement();
    //mapBorder();
    draw_map();
}



function draw(context) {
    // Draw images only when they are ready
    if (images_ready) {
        // Draw the images at their current positions
        context.drawImage(BLUETANK, BLUETANKx, BLUETANKy);
        context.drawImage(REDTANK, REDTANKx, REDTANKy);
    } else {
        // If images aren't ready, initialize them at their starting positions
        context.drawImage(BLUETANK, blue_start_x, blue_start_y);
        context.drawImage(REDTANK, red_start_x, red_start_y);

        // Set images_ready to true after the first draw
        images_ready = true;
    }
function draw(context){

    context.drawImage(BLUETANK, 0, 0, 45, 45, BLUETANKx, BLUETANKy, 45, 45);
    context.drawImage(REDTANK, 0, frame*45, 45, 45, REDTANKx, REDTANKy, 45, 45);
    context.restore();
    
}

var frame = 1;

function animate() {
    var canvas = document.getElementById("battlefield");

    if (!canvas) {
        console.error("Canvas element with ID 'battlefield' not found!");
        return;
    }

    var context = canvas.getContext("2d");

    // Clear the canvas at the start of each frame
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Update tank movement and draw them
    updateMovement();  // Update tank movement
    draw(context);     // Draw the tanks on the canvas

    // Call animate recursively using requestAnimationFrame for smooth looping
    requestAnimationFrame(animate);
}

// Start the animation loop after the DOM is fully loaded
window.onload = function () {
    animate();
};
