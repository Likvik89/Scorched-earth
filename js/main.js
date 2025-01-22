
window.onload=function() {
    movement();
}

function draw(context){
    //                   img        x          y
    context.drawImage(BLUETANK, BLUETANKx, BLUETANKy);
    context.drawImage(REDTANK, REDTANKx, REDTANKy);
    context.restore();
}

function animate(){
    var canvas = document.getElementById("battlefield");
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, 1000, 800);
    draw(context);
    setTimeout(animate,5);

}