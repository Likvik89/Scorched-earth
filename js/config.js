//her har vi alle vores globale variabler

var health = 999;
var time = 0;
var time_increase = 1;
var BLUETANKx = 300;
var BLUETANKy = 300;
var REDTANKx = 600;
var REDTANKy = 600;

//Movement var:
var movementD = false;
var movementA = false; 
var jump = false; 


var REDTANK = new Image();
REDTANK.src = "sprites/red_tank.png"

var BLUETANK = new Image();
BLUETANK.src = "sprites/blue_tank.png";


var loaded_images = 0;
var images = 2;

function load_image() {
    loaded_images++;

    if (loaded_images == images) {
        animate();
        console.log(animate);
    }
}

//draw tank after it has loaded
BLUETANK.onload = function(){
    load_image();
    console.log("bluetank loaded");
};

REDTANK.onload = function(){
    load_image();
    console.log("redtank loaded");
}