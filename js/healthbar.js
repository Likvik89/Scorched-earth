var ctx = healthCanvas.getContext("2d");  // Use the context of the already defined healthCanvas
var health_red = 195;
var health_blue = 195;
var healthbar = new Image();
healthbar.src = "./sprites/healthbar.png";
var flightbar = new Image();
flightbar.src = "./sprites/flightbar.png";
var stealthbar = new Image();
stealthbar.src = "./sprites/stealthbar.png";

// Function to draw the health bar
function drawHealthBar() {
    ctx.clearRect(0, 0, healthCanvas.width, healthCanvas.height); // Clear the canvas

    const scaleX = healthCanvas.width / 1000; // Original canvas width
    const scaleY = healthCanvas.height / 200; // Original canvas height

    // Draw static images and dynamic health bars
    ctx.drawImage(healthbar, 137 * scaleX, 0, healthbar.width * scaleX, healthbar.height * scaleY);
    ctx.drawImage(flightbar, 0, 0, flightbar.width * scaleX, flightbar.height * scaleY);
    ctx.drawImage(flightbar, 915 * scaleX, 0, flightbar.width * scaleX, flightbar.height * scaleY);
    ctx.drawImage(stealthbar, 185 * scaleX, 90 * scaleY, stealthbar.width * scaleX, stealthbar.height * scaleY);
    ctx.drawImage(stealthbar, 690 * scaleX, 90 * scaleY, stealthbar.width * scaleX, stealthbar.height * scaleY);

    // Draw health and other dynamic elements
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.fillRect(162 * scaleX, 40 * scaleY, health_red * scaleX, 25 * scaleY);
    ctx.fillStyle = 'rgb(0, 150, 255)';
    ctx.fillRect(667 * scaleX, 40 * scaleY, health_blue * scaleX, 25 * scaleY);
    ctx.fillStyle = 'rgb(132, 150, 251)';
    ctx.fillRect(950 * scaleX, 40 * scaleY, 15 * scaleX, 105 * scaleY);
    ctx.fillStyle = 'rgb(132, 150, 251)';
    ctx.fillRect(35 * scaleX, 40 * scaleY, 15 * scaleX, 105 * scaleY);
    ctx.fillStyle = 'rgb(249, 156, 255)';
    ctx.fillRect(209 * scaleX, 130 * scaleY, 102 * scaleX, 18 * scaleY);
    ctx.fillStyle = 'rgb(249, 156, 255)';
    ctx.fillRect(714 * scaleX, 130 * scaleY, 102 * scaleX, 18 * scaleY);
}

// Ensure images are loaded before drawing
flightbar.onload = drawHealthBar;
healthbar.onload = drawHealthBar;
stealthbar.onload = drawHealthBar;
