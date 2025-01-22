/**  SKAL KALDE EN ANDEN FUNKTION! IKKE SLET 
 * export function shoot () {
    
}
**/

function movement() {
    console.log(health);

    // Set to keep track of currently pressed keys
    const pressedKeys = new Set();

    // Event listeners for keydown and keyup
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    // Function for handling keydown events
    function keyDownHandler(e) {
        pressedKeys.add(e.keyCode); // Add the pressed key to the set

        // BLUETANK x,y movement
        if (pressedKeys.has(87)) { // W
            BLUETANKy -= speed;
        }
        if (pressedKeys.has(83)) { // S
            BLUETANKy += speed;
        }
        if (pressedKeys.has(68)) { // D
            BLUETANKx += speed;
        }
        if (pressedKeys.has(65)) { // A
            BLUETANKx -= speed;
        }
        if (pressedKeys.has(32)) { // Spacebar
            jump = true;
        }

        // REDTANK x,y movement
        if (pressedKeys.has(73)) { // I
            REDTANKy -= speed;
        }
        if (pressedKeys.has(75)) { // K
            REDTANKy += speed;
        }
        if (pressedKeys.has(74)) { // J
            REDTANKx -= speed;
        }
        if (pressedKeys.has(76)) { // L
            REDTANKx += speed;
        }

        // Debugging: Log pressed keys
        console.log("Keys currently pressed:", Array.from(pressedKeys));
    }

    // Function for handling keyup events
    function keyUpHandler(e) {
        pressedKeys.delete(e.keyCode); // Remove the released key from the set

        // Reset specific actions
        if (e.keyCode === 32) { // Spacebar
            jump = false;
        }

        // Debugging: Log released key
        console.log("Key released:", e.keyCode);
    }
}