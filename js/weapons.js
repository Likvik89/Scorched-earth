function calc_a(){
    //console.log("calculating a");

    let x = 0;
    let y = 0;

    if (turn === 1) {
        x = (BLUETANKx-aimingpointx)
        y = (BLUETANKy-aimingpointy)
    }
    if (turn === 2) {
        x= (REDTANKx-aimingpointx);
        y = (REDTANKy-aimingpointy);
    }

    // regn distancen fra mus til tank
    c = Math.sqrt(x*x + y*y);
    v = c/3; //skalér hastighed baseret på distance

    //vinkel af skud
    angle = Math.atan2(-y,x);

    a = -g/(2*(v*Math.cos(angle))**2);

    return(a);
}

function calc_b () {
    //console.log("calculating b");

    b = Math.tan(angle);
    
    return(b);

}

function shoot() {
    stealth()
    a = calc_a();
    b = calc_b();
    shooting = true;
    //bullet_animate();
    console.log("a: ", a, "b: ",b);
    bulletTravel(v, g, a, b, 0)
    aiming = false;
}

function bulletTravel(v, g, a, b, start) {

    console.log("Mouse position", "x:", aimingpointx, "y:", aimingpointy);
    console.log("Tank position", "x:", BLUETANKx, "y:", BLUETANKy);
    console.log("Difference", "x:", BLUETANKx - aimingpointx, "y:", BLUETANKy - aimingpointy);
    console.log("c (distance):", c);
    console.log("Angle (degrees):", angle * (180 / Math.PI));

    // Calculate travel time
    const vx = v * Math.cos(angle); // Horizontal velocity
    const vy = v * Math.sin(angle); // Vertical velocity
    const travelTime = (-vy - Math.sqrt(vy ** 2 - 2 * -g * BLUETANKy)) / -g;

    // Calculate total distance
    const distance = vx * travelTime;

    // Check for invalid travel time
    if (travelTime <= 0 || isNaN(travelTime)) {
        console.error("Invalid travel time:", travelTime);
        return;
    }

    // Calculate per-second horizontal travel
    const travelPerSecond = distance / travelTime;

    let secondsPassed = 0;
    let m = start;

    console.log("Time that needs to pass:", travelTime);

    // Interval to calculate positions
    const interval = setInterval(() => {
        m += travelPerSecond * 0.05; // Increment x per time step
        secondsPassed += 0.01;

        // Calculate y using the quadratic equation
        blueBulletx = m;
        blueBullety = battlefieldHeight - ((a * blueBulletx ** 2) + (b * blueBulletx) + BLUETANKy);

        console.log("Bullet x:", blueBulletx.toFixed(2), "Bullet y:", blueBullety.toFixed(2))+BLUETANKy;

        // Stop interval when bullet hits the left wall
        if (blueBulletx <= -BLUETANKx){
            clearInterval(interval);
            shooting = false;
            console.log("Bullet hit left wall:","x", m.toFixed(2),"y",blueBullety.toFixed(2));
            resetbluemeter()
        }
        // stop interval when bullet hits right wall
        if (blueBulletx >=battlefieldWidth/2){
            clearInterval(interval);
            shooting = false;
            console.log("Bullet hit right wall:","x", m.toFixed(2),"y",blueBullety.toFixed(2)); 
        }
        // stop bullet when bullet hits roof
        if (blueBullety <= 0){
            clearInterval(interval);
            shooting = false;
            console.log("Bullet hit roof:","x", m.toFixed(2),"y",blueBullety.toFixed(2));
            resetbluemeter()
        }

        if (blueBullety >= battlefieldHeight){
            clearInterval(interval);
            shooting = false;
            console.log("Bullet hit ground:","x", m.toFixed(2),"y",blueBullety.toFixed(2));
        }

        if (secondsPassed >= travelTime) {
            clearInterval(interval);
            console.log("Final value:","x", m.toFixed(2),"y",blueBullety.toFixed(2));
            resetbluemeter()
        }
        
    }, 1000 * 0.01); // Run every 0.01 seconds
}
