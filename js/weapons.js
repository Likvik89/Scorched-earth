// Create bullet image globally to avoid re-creating it
var bullet = new Image();
bullet.src = "sprites/cannon_ball.png";

function bullet_animate() {
    var bulletx = 30;
    var bullety = 30;
    context.drawImage(bullet, bulletx, bullety);
}
