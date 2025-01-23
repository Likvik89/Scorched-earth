
function draw_map() {
    const ctx = document.getElementById("battlefield").getContext("2d");

    drawing = true;

    // Track the state of the mouse button (whether it is held down or not)
    let isMouseDown = false;

    // When the mouse button is pressed
    document.addEventListener("mousedown", function(event) {
        isMouseDown = true;
        //console.log("Mouse button is pressed.");
    });

    // When the mouse button is released
    document.addEventListener("mouseup", function(event) {
        isMouseDown = false;
        //console.log("Mouse button is released.");
    });

    // Track the mouse movement
    document.addEventListener("mousemove", function(event) {
        var mouseX = event.offsetX;
        var mouseY = event.offsetY;

        //console.log("Mouse X: " + mouseX + ", Mouse Y: " + mouseY);

        // If the mouse button is down, log that it's being dragged
        if (isMouseDown) {

            if (drawing) {
            ctx.fillStyle = "brown";
            ctx.fillRect(mouseX-10, mouseY-10, 20, 20); 
            }
            console.log("Mouse is being dragged at X: " + mouseX + ", Y: " + mouseY);
        }
    });

}



/*
function mapBorder(){
    if(BLUETANKy == 0){
        BLUETANKy++;
    }
}
*/