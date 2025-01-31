function calc_a(){
    //console.log("calculating a");

    let x = 0;
    let y = 0;
    let c, v, angle, a;

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

    return{a, v, angle,c};
}

function calc_b (angle) {
    //console.log("calculating b");
    
    return(Math.tan(angle));

}


function shoot() {
    if (hasShot){
        console.log("You can only shoot once ^^")
        return;
    }
    stealth()
    
    let result = calc_a();
    let a = result.a;
    let v = result.v;
    let angle = result.angle;
    let c = result.c;
    b = calc_b(angle);
    
    shooting = true;   
    //bullet_animate();
    console.log("a: ", a, "b: ",b);
    
    bulletTravel(v, g, a, b, 0, c, angle)
    aiming = false;

    hasShot = true;
}

function bulletTravel(v, g, a, b, start, c, angle) {

        if (turn === 1) {
            console.log("Blue tank Position: x:", BLUETANKx, "y:", BLUETANKy);
        } else {   
            console.log("Red tank Position: x:", REDTANKx, "y:", REDTANKy);
        }
        
        console.log("Mouse Position: x:", aimingpointx, "y:", aimingpointy);
        console.log("c (distance):", c);
        console.log("Angle (degrees):", angle * (180 / Math.PI));
    
        const vx = v * Math.cos(angle);
        const vy = v * Math.sin(angle);
        const tankY = turn === 1 ? BLUETANKy : REDTANKy;
        const travelTime = (-vy - Math.sqrt(vy ** 2 - 2 * -g * tankY)) / -g;
    
        if (travelTime <= 0 || isNaN(travelTime)) {
            console.error("Invalid travel time:", travelTime);
            return;
        }
    
        const distance = vx * travelTime;
        const travelPerSecond = distance / travelTime;
    
        let secondsPassed = 0;
        let m = start;
    
        console.log("Time needed:", travelTime);
        const interval = setInterval(() => {
            m += travelPerSecond * 0.05;
            secondsPassed += 0.01;
    
            Bulletx = m;
            Bullety = Bullety = battlefieldHeight - ((a * Bulletx ** 2) + (b * Bulletx) + tankY);
    
            console.log("Bullet x:", Bulletx.toFixed(2), "Bullet y:", Bullety.toFixed(2));
    
            if ((turn === 1 && Bulletx <= -BLUETANKx) || (turn === 2 && Bulletx <= -REDTANKx) ||
            Bulletx >= battlefieldWidth / 2 || Bullety <= 0 || Bullety >= battlefieldHeight) {

                clearInterval(interval);
                shooting = false;
                console.log("Bullet impact: x", m.toFixed(2), "y", Bullety.toFixed(2));
                
                if (turn === 1) {
                    resetbluemeter();
                } else {
                    resetredmeter();
                }
            }
        
            if (secondsPassed >= travelTime) {
                clearInterval(interval);
                console.log("Final Position: x", m.toFixed(2), "y", Bullety.toFixed(2));
                 // toggle turn
            }
    
        }, 1000 * 0.01);
}
