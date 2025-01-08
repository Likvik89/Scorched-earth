window.onload=function() {
    var canvas = document.getElementById("battlefield");
    var context = canvas.getContext("2d");
    var redtank = new Image();
    redtank.src = "sprites/red_tank.png";

    context.clearRect(0,0,1024,800);
    context.drawImage(redtank,300,300);


}
