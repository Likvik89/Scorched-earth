//her har vi alle vores globale variabler

//Genereal global variables
var drawing = false;
var frame = 0;
var time = 0;
var turn = 1;

//aiming / shooting variables
var mouseX = 0;
var mouseY = 0;
var aimingpointx = 0;
var aimingpointy = 0;
var aiming = false;
var shooting = false;
var preview_lenght = 45;

//global værdier til affyring
var g = 9.8;
var hasShot = false;

//Skud variabler
var Bulletx;
var Bullety;



//movement variables
var max_steps = 105;
var blue_current_steps = 0;
var red_current_steps = 105;

//health
var health_red = 195;
var health_blue = 195;

//super meters
var maxmeter = 102;
var bluemeter = 0;
var redmeter = 0;

//position and speed
var BLUETANKx = 750;
var BLUETANKy = 400;
var REDTANKx = 250;
var REDTANKy = 400;
var movementSpeed = 2;

//Dimensioner på tanks
var tankHeight = 45;
var tankWidth = 45;




//REDTANK Movement variable: 
var movementI = false;
var movementK = false; 
var movementJ = false;
var movementL = false;


var REDTANK = new Image();
REDTANK.src = "sprites/red_tank.png"

var BLUETANK = new Image();
BLUETANK.src = "sprites/blue_tank.png";

var bullet = new Image();
bullet.src = "sprites/cannon_ball.png"
function stealth(){
    if (bluemeter>101){
        bullet.src = "sprites/supernova.png"
    }
    else{
        bullet.src = "sprites/cannon_ball.png";
    }
}

function resetbluemeter(){
    if (bluemeter>101){
        bluemeter=0;
    }
}

function resetredmeter(){
    if (redmeter>101){
        redmeter = 0;
    }
}


var loaded_images = 0;
var images = 3;

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

bullet.onload = function(){
    load_image();
    console.log("bullet loaded");
}