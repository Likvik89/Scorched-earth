
window.onload=function() {
    
        
    var canvas = document.getElementById("battlefield");
    var context = canvas.getContext("2d");

    var tnak = new Image();
    tnak.src = "sprites/blue_tank.png";

    context.drawImage(tnak, 300, 300);
    

    console.log(context);
    

}
