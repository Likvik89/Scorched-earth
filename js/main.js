
window.onload=function() {
    //bullet_animate();
    draw_map();
    //shoot();
    }

function draw(context){
    if (aiming) {
        a = calc_a();
        b = calc_b();
    
        for (let x = 0; x < preview_lenght; x++) {
            context.fillStyle = "red";

            var previewx = x+BLUETANKx+22;
            //console.log(previewx);

            var previewy = ((a * previewx ** 2) + (b * previewx) + BLUETANKy);
            //console.log(previewy);

            context.fillRect(previewx, previewy, 10, 10); 
        }
    }

    if (turn === 1){
        context.drawImage(bullet, BLUETANKx+Bulletx, Bullety/*+Bullety*/); 
    }
    if (turn === 2){
        context.drawImage(bullet, REDTANKx+Bulletx, Bullety/*+Bullety*/);
    }

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
    hasShot = false;
    console.log(bluemeter)
    console.log(turn);
}