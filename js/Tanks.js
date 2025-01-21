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
		if(e.keyCode == 68) { // Pressed: "D"
			movementD = true;
			BLUETANKx++;
			console.log(BLUETANKx + "," + BLUETANKy);
		}
		else if(e.keyCode == 65) { // Pressed "A"
			movementA = true;
			BLUETANKx--;
		}
		else if(e.keyCode == 32) { // spacebar for jump
			jump = true;
			console.log("Spacebar pressed");
		}
	}

	function keyUpHandler(e) {
		if(e.keyCode == 68){
			movementD = false;
		}

		else if(e.keyCode == 65){
			movementA = false;
		}

		else if(e.keyCode == 32){
			jump = false;
		}
	}

};
