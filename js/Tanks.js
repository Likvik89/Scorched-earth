let pressedKeys = new Set();
let originalPositions = {
    BLUETANKx: 750,
    BLUETANKy: 400,
    REDTANKx: 250,
    REDTANKy: 400}

    // Event listeners for keydown and keyup
document.addEventListener("keydown", (e) => {
    pressedKeys.add(e.keyCode); // Add keycode to the set when key is pressed
}, false);

document.addEventListener("keyup", (e) => {
    pressedKeys.delete(e.keyCode); // Remove keycode from the set when key is released
}, false);

function updateMovement() {
    // Tank movement
    if (pressedKeys.has(87) && BLUETANKy > 0 && !shooting) { // W
        
        //Tjekker turen, og flytter den tilsavrende tank
        if (turn === 1 && blue_current_steps < max_steps){
            BLUETANKy -= movementSpeed;
            blue_current_steps++;
        }
        if (turn === 2 && red_current_steps < max_steps){
            REDTANKy -= movementSpeed;
            red_current_steps++;
        }
    }

    if (pressedKeys.has(83) && BLUETANKy < battlefieldHeight - tankHeight && !shooting) { // S
        
        if (turn === 1 && blue_current_steps < max_steps) {
            BLUETANKy += movementSpeed;
            blue_current_steps++;
        }
        if (turn === 2 && red_current_steps < max_steps) {
            REDTANKy += movementSpeed;
            red_current_steps++;
        }
    }

    if (pressedKeys.has(68) && BLUETANKx < battlefieldWidth - tankWidth && !shooting) { // D
        if (turn === 1 && blue_current_steps < max_steps) {
            BLUETANKx += movementSpeed;
            blue_current_steps++;
        }
        if (turn === 2 && red_current_steps < max_steps) {
            REDTANKx += movementSpeed;
            red_current_steps++;
        }
    }

    if (pressedKeys.has(65) && BLUETANKx > 0 && !shooting) { // A
        if (turn === 1 && blue_current_steps < max_steps){
            BLUETANKx -= movementSpeed;
            blue_current_steps++;
        }
        if (turn === 2 && red_current_steps < max_steps){
            REDTANKx -= movementSpeed;
            red_current_steps++;
        }
    }

    if (fullscreen){

        // scale when fullscreen
        let scaleX = battlefieldWidth/1024
        let scaleY = battlefieldHeight/800
    
        if (hasScaled === false){

            BLUETANKx *= scaleX
            REDTANKx *= scaleX
        
            BLUETANKy *= scaleY
            REDTANKy *= scaleY
            hasScaled = true;
        }
        
        
        console.log("blue tank x", BLUETANKx, "blue tank y", BLUETANKy )
    }
    else{

        let scaleX = battlefieldWidth/1024
        let scaleY = battlefieldHeight/800

        if (hasScaled) {
            BLUETANKx /= scaleX
            REDTANKx /= scaleX
        
            BLUETANKy /= scaleY
            REDTANKy /= scaleY

            hasScaled = false;  // Reset the scaling flag
            }
        }
    
   
/*
    // REDTANK movement
    if (pressedKeys.has(73) && REDTANKy > 0) { // I
        REDTANKy -= movementSpeed;
    }
    if (pressedKeys.has(75) && REDTANKy < battlefieldHeight - tankHeight) { // K
        REDTANKy += movementSpeed;
    }
    if (pressedKeys.has(76) && REDTANKx < battlefieldWidth - tankWidth) { // L
        REDTANKx += movementSpeed;
    }
    if (pressedKeys.has(74) && REDTANKx > 0) { // J
        REDTANKx -= movementSpeed;
    }
*/
}

