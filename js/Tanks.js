/**  SKAL KALDE EN ANDEN FUNKTION! IKKE SLET 
 * export function shoot () {
    
}
**/
window.onload=function movement(){
    //Id forkert?
    var canvas = document.getElementById("battlefield");
    var context = canvas.getContext("2d");
    var tank1 = new Image();
    tank1.src = "./sprites/blue_tank.png";
    xpos = 400;
    ypos = 512;


    //Tegner tank1 fra context
    function draw(context){
        context.drawImage(tank1, xpos,ypos);
        context.restore();
    }

    function animate(){
        
    }

    // eventlistnere
	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);
	// funktioner til tastatur
	function keyDownHandler(e) {
    if(e.keyCode == 38) {
        upPressed = true;
		}
    else if(e.keyCode == 40) {
        downPressed = true;
		}
	else if(e.keyCode == 32){
		skud = true;
		pposY = ypos + 5;
		}
	}
	function keyUpHandler(e) {
    if(e.keyCode == 38) {
        upPressed = false;
		}
    else if(e.keyCode == 40) {
        downPressed = false;
		}
	}
};