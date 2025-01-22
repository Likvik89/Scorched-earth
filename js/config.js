//her har vi alle vores globale variabler

var health = 999;
var time = 0;
var time_increase = 1;
var frame = 1;
var BLUETANKx = 300;
var BLUETANKy = 300;
var REDTANKx = 600;
var REDTANKy = 600;
var speed = 2;


//vi skal endten bruge max_distance eller max_steps når vi afgør hvor langt man kan bevæge sig på en tur
var max_distance = 65;
var max_steps = 10;

//BLUETANK Movement variable:
var movementD = false;
var movementA = false; 
var movementW = false;
var movementS = false;
var jump = false; 

//REDTANK Movement variable: 
var movementI = false;
var movementK = false; 
var movementJ = false;
var movementL = false;


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