// Create bullet image globally to avoid re-creating it
var bullet = new Image();
bullet.src = "sprites/cannon_ball.png";


function shoot() {
    var a = calc_a(aimingpointx, aimingpointy);
    var b = calc_b(aimingpointx,aimingpointy);
    bullet_animate(a, b);

    for (var x=tankx; x<edgeofscreen; x++) {
        y = a*x + b*(x*x)
    }
}

function bullet_animate(a,b) {
    var bulletx = 30;
    var bullety = 30;

    context.drawImage(bullet, bulletx, bullety);
}
