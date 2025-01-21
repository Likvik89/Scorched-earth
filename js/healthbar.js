var health_red = 195
var health_blue = 195
var canvas = document.getElementById("health");
var ctx = canvas.getContext("2d");

var healthbar = new Image();
healthbar.src = "./sprites/healthbar.png";
healthbar.onload = function() {
    ctx.drawImage(healthbar, 0, 0);
    ctx.fillStyle = 'rgb(255, 0, 0)'
    ctx.fillRect(25,40, health_red,25);
    ctx.fillStyle = 'rgb(0, 150, 255)'
    ctx.fillRect(530,40, health_blue,25);
}
