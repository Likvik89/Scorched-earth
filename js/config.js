//her har vi alle vores globale variabler

//Genereal global variables
var drawing = false;
var frame = 0;
var turn = 1;

//movement variables
var max_steps = 105;
var blue_current_steps = 0;
var red_current_steps = 0;

//health
var health_red = 195;
var health_blue = 195;

//super meters
var maxmeter = 100;
var bluemeter = 0;
var redmeter = 0;

//position and speed
var BLUETANKx = 300;
var BLUETANKy = 300;
var REDTANKx = 400;
var REDTANKy = 400;
var movementSpeed = 2;

//Dimensioner på tanks
var tankHeight = 45;
var tankWidth = 50;


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