/**  SKAL KALDE EN ANDEN FUNKTION! IKKE SLET 
 * export function shoot () {
    
}
**/



function movement(){
	console.log(health);
    
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
