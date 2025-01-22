var health_red = 195
var health_blue = 195
var canvas = document.getElementById("health");
var ctx = canvas.getContext("2d");

var healthbar = new Image();
healthbar.src = "./sprites/healthbar.png";
var flightbar = new Image();
flightbar.src = "./sprites/flightbar.png";
var stealthbar = new Image();
stealthbar.src = "./sprites/stealthbar.png";
flightbar.onload = function() {
    ctx.drawImage(healthbar, 137, 0);
    ctx.drawImage(flightbar, 0, 0);
    ctx.drawImage(flightbar, 915, 0);
    ctx.drawImage(stealthbar, 185, 90);
    ctx.drawImage(stealthbar, 690, 90);
    ctx.fillStyle = 'rgb(255, 0, 0)'
    ctx.fillRect(162,40, health_red,25);
    ctx.fillStyle = 'rgb(0, 150, 255)'
    ctx.fillRect(667,40, health_blue,25);
    ctx.fillStyle = 'rgb(132, 150, 251)'
    ctx.fillRect(950,40, 15,105);
    ctx.fillStyle = 'rgb(132, 150, 251)'
    ctx.fillRect(35,40, 15,105);
    ctx.fillStyle = 'rgb(249, 156, 255)'
    ctx.fillRect(209,130, 102,18);
    ctx.fillStyle = 'rgb(249, 156, 255)'
    ctx.fillRect(714,130, 102,18);
}
