var ctx = healthCanvas.getContext("2d");  // Use the context of the already defined healthCanvas

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

    // red healthbar
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.fillRect(162 * scaleX, 40 * scaleY, health_red * scaleX, 25 * scaleY);

    // blue healthbar
    ctx.fillStyle = 'rgb(0, 150, 255)';
    ctx.fillRect(667 * scaleX, 40 * scaleY, health_blue * scaleX, 25 * scaleY);
    
    

    // movement bar
    ctx.fillStyle = 'rgb(132, 150, 251)';
    ctx.fillRect(950 * scaleX, 145 * scaleY, 15 * scaleX, -(max_steps-blue_current_steps * scaleY));
    ctx.fillStyle = 'rgb(132, 150, 251)';
    ctx.fillRect(35 * scaleX, 145 * scaleY, 15 * scaleX, -(max_steps-red_current_steps * scaleY));


    // super bar
    ctx.fillStyle = 'rgb(249, 156, 255)';
    ctx.fillRect(209 * scaleX, 130 * scaleY, redmeter * scaleX, 18 * scaleY);
    ctx.fillStyle = 'rgb(249, 156, 255)';
    ctx.fillRect(714 * scaleX, 130 * scaleY, bluemeter * scaleX, 18 * scaleY);

    if(bluemeter>101){
        ctx.fillStyle = 'rgb(240, 223, 125)';
        ctx.fillRect(759 * scaleX, 119 * scaleY, 12 * scaleX, 6 * scaleY);
    }
    if(redmeter>101){
        ctx.fillStyle = 'rgb(240, 223, 125)';
        ctx.fillRect(254 * scaleX, 119 * scaleY, 12 * scaleX, 6 * scaleY);
    }


    //new health
    if (hitTank){
        exploding = true;
        if (turn === 1)
            {
            TotalDamage.red += dmg;  
            hitTank = false;
            healthNow = health_blue-TotalDamage.red;
            console.log("tank is hit")
            console.log("Red Health: ", healthNow,"Damage", TotalDamage.red);
        }
        else{
            TotalDamage.blue += dmg;  
            hitTank = false;
            healthNow = health_red-TotalDamage.blue;
            console.log("tank is hit")
            console.log("Blue Health: ", healthNow, "Damage", TotalDamage.blue);
        }

        if (healthNow <= 0 ){
            hitTank = false;
            aiming = false;
            if (turn === 1){
                console.log("Game over, blue won")
            }
            else{
                console.log("Game over, red won")
            }
            
        }

    }
    // red damage
    ctx.fillStyle = 'rgb(42, 42, 42)';
    ctx.fillRect(162 * scaleX + health_red * scaleX - TotalDamage.red * scaleX, 40 * scaleY, TotalDamage.red * scaleX, 25 * scaleY);
    // blue damage
    ctx.fillStyle = 'rgb(42, 42, 42)';
    ctx.fillRect(667 * scaleX + health_blue * scaleX - TotalDamage.blue * scaleX, 40 * scaleY, TotalDamage.blue * scaleX, 25 * scaleY);
}
// Ensure images are loaded before drawing
flightbar.onload = drawHealthBar;
healthbar.onload = drawHealthBar;
stealthbar.onload = drawHealthBar;




