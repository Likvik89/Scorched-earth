
window.onload=function() {
    //bullet_animate();
    draw_map();
    //shoot();
    }

function draw(context){
    context.drawImage(bullet, BLUETANKx+blueBulletx, blueBullety/*+blueBullety*/);
    context.drawImage(BLUETANK, 0, (Math.floor(frame))*45, 45, 45, BLUETANKx, BLUETANKy, 45, 45);
    context.drawImage(REDTANK, 0, (Math.floor(frame))*45, 45, 45, REDTANKx, REDTANKy, 45, 45);
    context.restore();
    
}

function animate() {
    
    drawHealthBar();
    frame+=0.2;

    if (frame>4) {
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
}

function endturn(){
    turn++;
    
    
    if (turn > 2){
        redmeter += (max_steps-red_current_steps)/2
        if (redmeter>maxmeter){
            redmeter=102
        }
        turn = 1;
        blue_current_steps = 0;
        
    }
    else {
        bluemeter += (max_steps-blue_current_steps)/2
        if (bluemeter>maxmeter){
            bluemeter=102
        }
        red_current_steps = 0;
    }

    console.log(bluemeter)
    console.log(turn);
}