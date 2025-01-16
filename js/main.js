import {movement} from "./Tanks.js";

window.onload=function() {
    var canvas = document.getElementById("battlefield");
    var context = canvas.getContext("2d");

    var redtank = new Image();
    redtank.src = "sprites/red_tank.png";

    var redbarrel = new Image();
    redbarrel.src = "sprites/red_barrel.png";

    var redtank_x = 300;
    var redtank_y = 300;
    var red_barrel_x = redtank_x+25;
    var red_barrel_y = redtank_y;

    context.clearRect(0,0,1024,800);
    context.drawImage(redbarrel, red_barrel_x, red_barrel_y);
    context.drawImage(redtank, redtank_x, redtank_y);

    //KALD FUNKTIONER HER: 
    movement();
    

}
