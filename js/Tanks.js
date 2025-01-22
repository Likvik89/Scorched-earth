/**  SKAL KALDE EN ANDEN FUNKTION! IKKE SLET 
 * export function shoot () {
    
}
**/

function movement() {
    console.log(health);
    const pressedKeys = new Set();
    const movementSpeed = 5; // Set a speed value for smooth movement

    // Event listeners for keydown and keyup
    document.addEventListener("keydown", (e) => pressedKeys.add(e.keyCode), false);
    document.addEventListener("keyup", (e) => pressedKeys.delete(e.keyCode), false);

    // Function to update tank positions based on pressed keys
    function updateMovement() {
        // BLUETANK x,y movement
        if (pressedKeys.has(87)) { // W
            BLUETANKy -= movementSpeed;
        }
        if (pressedKeys.has(83)) { // S
            BLUETANKy += movementSpeed;
        }
        if (pressedKeys.has(68)) { // D
            BLUETANKx += movementSpeed;
        }
        if (pressedKeys.has(65)) { // A
            BLUETANKx -= movementSpeed;
        }

        // REDTANK x,y movement
        if (pressedKeys.has(73)) { // I
            REDTANKy -= movementSpeed;
        }
        if (pressedKeys.has(75)) { // K
            REDTANKy += movementSpeed;
        }
        if (pressedKeys.has(74)) { // J
            REDTANKx -= movementSpeed;
        }
        if (pressedKeys.has(76)) { // L
            REDTANKx += movementSpeed;
        }

        // Call the update function again
        requestAnimationFrame(updateMovement);
    }

    // Start the continuous update loop
    updateMovement();
}