
function bullet_animate() {
    var canvas = document.getElementById("battlefield");
    var context = canvas.getContext("2d");

    var bullet = new Image();
    bullet.src = "sprites/cannon_ball.png";
    var bulletx = 30;
    var bullety = 30;


    context.drawimage(bullet, bulletx, bullety);
}