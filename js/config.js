//her har vi alle vores globale variabler
var fullscreen = false;
var hasScaled = false;

// Health values
var health_red = 195;
var health_blue = 195
var healthStart, healthNow;
var dmg; // defined on stealth function
var TotalHP;

if (turn === 1){
    TotalHP = 100; //total HP of the red tank
}else{
    TotalHP = 100 // total HP of the blue tank
}

var TotalDamage = {
    red: 0,
    blue: 0
};

//Genereal global variables
var drawing = false;
var frame = 0;
var time = 0;
var turn = 1;
var explosionframe = 0;
var exploding = false;

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
var hasShot = false; //sættes til true, hvis man har skudt
var hitTank = false; //Sættes til true, hvis skudet rammer en tank
var hitNotTank = false; // sættes til true, hvis skuddet rammer en væg, tag eller gulv.
var bulletActive = false; // sættes til true, når skuddet er tegnet

//Skud variabler
var Bulletx;
var Bullety;

//movement variables
var max_steps = 105;
var blue_current_steps = 0;
var red_current_steps = 105;



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
var ballHeight;
var ballWidth;
//var space_scale = 5; //scale the air between the prediction line
//var preview_length = 20;




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

var boom = new Image();
boom.src = "sprites/boom.png";


function stealth(){
    if (bluemeter>101){
        bullet.src = "sprites/supernova.png"
        ballWidth = 106
        ballHeight = 112 
        dmg = (40/TotalHP)*195; // 195 should not be changed
    }
    else{
        bullet.src = "sprites/cannon_ball.png";
        ballHeight = 15;
        ballWidth = 15;
        dmg = (20/TotalHP)*195; // 195 should not be changed    
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
var images = 4;

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
}

boom.onload = function(){
    load_image();
    console.log("boom loaded");
}