
window.onload=function() {
    //bullet_animate();
    draw_map();
    //shoot();
    }

// Preview for bullet trajectory
function draw(context) {
    if (aiming) {
        stealth();

        // Tank positions
        let tankX = (turn === 1) ? BLUETANKx : REDTANKx;
        let tankY = (turn === 1) ? BLUETANKy : REDTANKy;

        // Calculate shot parameters
        let result = calc_a();
        let a = result.a;
        let b = calc_b(-result.angle);
        let v = result.v;
        let angle = -result.angle;

        // Velocity components
        const vx = v * Math.cos(angle);
        const vy = v * Math.sin(angle);

        // **Lock the preview length to a fixed value**
        const preview_length = 200; // Fixed length in pixels

        // **Determine step size based on velocity**
        let step_size = Math.max(10, v / 5); // Faster shots → more spaced-out dots

        // **Number of preview points based on fixed preview length**
        let preview_points = Math.floor(preview_length / step_size);

        let travel_distance = 0; // Tracks actual traveled distance along the curve

        for (let i = 0; i < preview_points; i++) {
            // **Calculate time based on travel distance**
            let time = travel_distance / Math.abs(vx); // Travel distance converted to time

            // Calculate projectile position
            let previewx = tankX + vx * time;
            let previewy = tankY + vy * time - (0.5 * -g * time * time);

            // Ensure preview stays in bounds
            if (previewx < 0 || previewx > battlefieldWidth || previewy < 0 || previewy > battlefieldHeight) {
                break;
            }

            // **Draw preview dot (circle)**
            context.fillStyle = "red";
            context.beginPath();
            context.arc(previewx+22, previewy+22, ballWidth / 2, 0, Math.PI * 2); // Draws a circle
            context.fill();

            // Move forward in travel distance
            travel_distance += step_size;
        }
    }


    if (hitNotTank){
        exploding = true;
    }

    if (exploding){
        explosionframe+=0.5;
        if (explosionframe > 6){
            explosionframe = 0;
            exploding = false;
            bulletActive = false;
        }
    }


    if (bulletActive) {
        if (turn === 1){
            if (exploding){
                context.drawImage(boom, 0, (Math.floor(explosionframe))*44, 44, 44, BLUETANKx+Bulletx,Bullety, 44, 44);
            }

            else{
                context.drawImage(bullet, BLUETANKx+Bulletx+22, Bullety+10/*+Bullety*/);
            } 
        }
        if (turn === 2){
            if (exploding) {
                context.drawImage(boom, 0, (Math.floor(explosionframe))*44, 44, 44, REDTANKx+Bulletx,Bullety, 44, 44);
            }
            else{
                context.drawImage(bullet, REDTANKx+Bulletx+22, Bullety+10/*+Bullety*/);
            }
        }
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
    var context = canvas.getContext("2d");


    if (!canvas) {
        console.error("Canvas element with ID 'battlefield' not found!");
        return;
    }

    

    // Clear the canvas at the start of each frame
    if (drawing) {
        context.clearRect(tankX, tankY, tankWidth, tankHeight);
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

    bulletActive = false;
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
    hitTank = false;
    hitNotTank = false;
    console.log(bluemeter)
    console.log(turn);
}
