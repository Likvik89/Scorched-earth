let pressedKeys = new Set();
let movementSpeed = speed; // Set a speed value for smooth movement

// Event listeners for keydown and keyup
document.addEventListener("keydown", (e) => {
    pressedKeys.add(e.keyCode); // Add keycode to the set when key is pressed
}, false);

document.addEventListener("keyup", (e) => {
    pressedKeys.delete(e.keyCode); // Remove keycode from the set when key is released
}, false);

function updateMovement() {
    // BLUETANK movement
    if (pressedKeys.has(87) && BLUETANKy > 0) { // W
        BLUETANKy -= movementSpeed;
    }
    if (pressedKeys.has(83) && BLUETANKy < battlefieldHeight - tankHeight) { // S
        BLUETANKy += movementSpeed;
    }
    if (pressedKeys.has(68) && BLUETANKx < battlefieldWidth - tankWidth) { // D
        BLUETANKx += movementSpeed;
    }
    if (pressedKeys.has(65) && BLUETANKx > 0) { // A
        BLUETANKx -= movementSpeed;
    }

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
}
