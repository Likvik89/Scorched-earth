
window.onload=function() {
    
        
    var canvas = document.getElementById("battlefield");
    var context = canvas.getContext("2d");

    var tnak = new Image();
    tnak.src = "sprites/blue_tank.png";

    //draw tank after it has loaded
    tnak.onload = function(){
        context.drawImage(tnak, 300, 300);
    };
    
    console.log(context);
    

}
