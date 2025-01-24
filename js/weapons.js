// Create bullet image globally to avoid re-creating it
var bullet = new Image();
bullet.src = "sprites/cannon_ball.png";

function calc_a(){
    console.log("calculating a");

    var a;
    var x = 0;
    var y = 0;
    var g = 9.8;

    if (turn === 1) {
        x = BLUETANKx-aimingpointx;
        y = BLUETANKy-aimingpointy;  
    }
    if (turn === 2) {
        x= REDTANKx-aimingpointx;
        y = REDTANKy-aimingpointy;
    }

    var c = Math.sqrt(x*x + y*y);
    var v = c * 2

    var angle = Math.acos((-x)/c);

    a = -g/(2*(v*Math.cos(angle)*v*Math.cos(angle)));

    return(a);
}

function calc_b () {
    console.log("calculating b");

    var b;
    var x = 0;
    var y = 0;
    var g = 9.8;

    if (turn === 1) {
        x = BLUETANKx-aimingpointx;
        y = BLUETANKy-aimingpointy;  
    }
    if (turn === 2) {
        x= REDTANKx-aimingpointx;
        y = REDTANKy-aimingpointy;
    }

    var c = Math.sqrt(x*x + y*y);
    var angle = Math.acos((-x)/c);
    
    b = Math.tan(angle);
    return(b);

}

function shoot() {
    a = calc_a(/*aimingpointx, aimingpointy*/);
    b = calc_b(/*aimingpointx, aimingpointy*/);
    shooting = true;
    bullet_animate();
    console.log("a: ", a, "b: ",b);
    aiming = false;
}

var bulletx = 30;
var bullety = 30;

function bullet_animate() {
    const ctx = document.getElementById("battlefield").getContext("2d");

    console.log("a: ", a, "b: ",b);

    var hældning = b*bulletx;
    console.log("Hældning: ", hældning);

    var krumning = a*(bulletx*bulletx);

    console.log("kruming: ", krumning);

    bullety = hældning+krumning;
    
    
    console.log("bulletx: ",bulletx, "bullety: ", bullety);

    ctx.drawImage(bullet, bulletx, bullety);

    if (shooting) {
        //requestAnimationFrame(bullet_animate);
        setTimeout(bullet_animate, 5);
    } 
}
