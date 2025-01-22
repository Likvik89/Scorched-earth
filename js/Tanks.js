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

		// BLUETANK x,y movement
		if(e.keyCode == 87) { //W
			movementW = true;
			BLUETANKy -= speed; 
		}

		else if(e.keyCode == 83) { //S
			movementS = true;
			BLUETANKy += speed;
		}

		else if(e.keyCode == 68) { // Pressed: "D"
			movementD = true;
			BLUETANKx += speed;
		}
		else if(e.keyCode == 65) { // Pressed "A"
			movementA = true;
			BLUETANKx -= speed;
		}
		else if(e.keyCode == 32) { // spacebar 
			jump = true;
		}

		// REDTANK x,y movement
		else if(e.keyCode == 73){ //I
			movementI = true;
			REDTANKy -= speed;
		}

		else if(e.keyCode == 75){ //K
			movementK = true;
			REDTANKy += speed;
		}

		else if(e.keyCode == 74){ //J
			movementJ = true;
			REDTANKx -= speed;
		}

		else if(e.keyCode == 76){ //L
			movementL = true;
			REDTANKx += speed;
		}
		
	}

	function keyUpHandler(e) {

		//BLUETANK x,y 
		if(e.keyCode == 87){ //W
			movementW = false;
		}

		else if(e.keyCode == 83){ //S
			movementS = false;
		}

		else if(e.keyCode == 68){ //D
			movementD = false;
		}

		else if(e.keyCode == 65){//A
			movementA = false;
		}

		else if(e.keyCode == 32){//Spacebar
			jump = false;
		}

		//REDTANK x,y
		else if(e.keyCode == 73){ //I
			movementI = false;
		}

		else if(e.keyCode == 75){ //K
			movementK = false;
		}

		else if(e.keyCode == 74){ //J
			movementJ = false;
		}

		else if(e.keyCode == 76){ //L
			movementL = false;
		}

	}

};
