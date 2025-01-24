// Create bullet image globally to avoid re-creating it
var bullet = new Image();
bullet.src = "sprites/cannon_ball.png";

function calc_a(){
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

    a = g/(2*(v*Math.cos(angle)*v*Math.cos(angle)));

    return(a);
}

function calc_b () {
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
    var a = calc_a(aimingpointx, aimingpointy);
    var b = calc_b(aimingpointx, aimingpointy);
    bullet_animate(a, b);


}

var bulletx = 30;
var bullety = 30;

function bullet_animate(a,b) {
    const ctx = document.getElementById("battlefield").getContext("2d");

    if (turn === 1) {
        
        bulletx = BLUETANKx + time;

    }

    if (turn === 2 ){
        bulletx = REDTANKx + time;
    }

    time += 1;

    bullety = b*bulletx + a*(bulletx*bulletx);
    
    console.log(bulletx,bullety);

    ctx.drawImage(bullet, bulletx, bullety);
    requestAnimationFrame(bullet_animate);
}
