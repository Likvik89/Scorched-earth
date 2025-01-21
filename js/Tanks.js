/**  SKAL KALDE EN ANDEN FUNKTION! IKKE SLET 
 * export function shoot () {
    
}
**/


function movement(){
	console.log(health);

    // Event listeners for keydown and keyup
	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);

	// Function for handling keydown events
	function keyDownHandler(e) {
		if(e.keyCode == 38) { // arrowUp
			arrowUp = true;
			console.log("Arrow Up pressed");
		}
		else if(e.keyCode == 40) { // arrowDown
			arrowDown = true;
			console.log("Arrow Down pressed");
		}
		else if(e.keyCode == 32) { // spacebar for jump
			jump = true;
			console.log("Spacebar pressed");
		}
	}

	function keyUpHandler(e) {
		if(e.keyCode == 38){
			arrowUp = false;
		}

		else if(e.keyCode == 40){
			arrowDown = false;
		}

		else if(e.keyCode == 32){
			jump = false;
		}
	}

};
