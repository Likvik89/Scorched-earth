
window.onload=function() {
    
        
    var canvas = document.getElementById("battlefield");
    var context = canvas.getContext("2d");

    var BLUETANK = new Image();
    BLUETANK.src = "sprites/blue_tank.png";

    //draw tank after it has loaded
    tnak.onload = function(){
        //                 img      x           y
        context.drawImage(BLUETANK, BLUETANKx, BLUETANKy);
    };
    
    console.log(context);
    

}
