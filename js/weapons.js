// Create bullet image globally to avoid re-creating it
var bullet = new Image();
bullet.src = "sprites/cannon_ball.png";

function calc_a(){
    console.log("calculating a");

    let x = 0;
    let y = 0;

    if (turn === 1) {
        //x = BLUETANKx-aimingpointx;
        x = -1*(-BLUETANKx+aimingpointx)
        y = -1*(-BLUETANKy+aimingpointy)
        //y = BLUETANKy-aimingpointy;  
    }
    if (turn === 2) {
        x= REDTANKx-aimingpointx;
        y = REDTANKy-aimingpointy;
    }

    c = Math.sqrt(x*x + y*y);
    v = c/100;

    angle = Math.acos((x*x+c*c-y*y)/(2*x*c));

    a = -g/(2*(v*Math.cos(angle))**2);

    return(a);
}

function calc_b () {
    console.log("calculating b");

    let x = 0;
    let y = 0;

    if (turn === 1) {
        x = BLUETANKx-aimingpointx;
        y = BLUETANKy-aimingpointy;  
    }
    if (turn === 2) {
        x= REDTANKx-aimingpointx;
        y = REDTANKy-aimingpointy;
    }

    
    b = Math.tan(angle);
    return(b);

}

function shoot() {
    a = calc_a(/*aimingpointx, aimingpointy*/);
    b = calc_b(/*aimingpointx, aimingpointy*/);
    shooting = true;
    //bullet_animate();
    console.log("a: ", a, "b: ",b);
    bulletTravel(v, g, a, b, 0)
    aiming = false;
}


function bulletTravel (v, g, a, b, start){
console.log("mouse position", "x",aimingpointx, "y", aimingpointy)
console.log("tank position", "x", BLUETANKx, "y", BLUETANKy)
console.log("difference", "x", -1*(-BLUETANKx+aimingpointx), "y", -1*(-BLUETANKy+aimingpointy))
console.log("c",c)

        let m = start;
        //traveltime = (-v-sqrt(v**2-2*g*(y_0-y)))/g
        //y0 is the initial height of the launch
        //y is the final height of the bullet
        const travelTime = (-v-Math.sqrt(v**2-2*-g*(BLUETANKy-0)))/-g;
        const distance = ((-b-(Math.sqrt(b**2-4*a*BLUETANKy)))/(2*a));
        
        if (travelTime <= 0 || isNaN(travelTime)){
            console.error("invalid travel time", travelTime);
            return;
        }

        const travelPerSecond = distance/travelTime; //rate of increase of x
        let secondsPassed = 0;
        console.log("time that needs to pass", travelTime)

        //interval that increases m per second
        const interval = setInterval(() =>{
            m += travelPerSecond*0.1;
            console.log("Current value", m.toFixed(2))
            secondsPassed += 0.1;
            blueBulletx = m;
            blueBullety = (a*blueBulletx**2)+(b*blueBulletx)+BLUETANKy;
            if (blueBullety<0){
                blueBullety = 0;
            }
            console.log( "bullet x",blueBulletx.toFixed(2),"bullet y", blueBullety.toFixed(2))

            //stop interval when time traveltime is reached
            if (secondsPassed >= travelTime) {
                clearInterval(interval);
                console.log("final value", m.toFixed(2));
            }
        }, 1000*0.1);


    
    
}

function bullet_animate() {
    const ctx = document.getElementById("battlefield").getContext("2d");

    //console.log("a: ", a, "b: ",b);

    var hældning = b*bulletx;
    //console.log("Hældning: ", hældning);

    var krumning = a*(bulletx*bulletx);

    //console.log("kruming: ", krumning);

    bullety = hældning+krumning;
    
    
   // console.log("bulletx: ",bulletx, "bullety: ", bullety);

    ctx.drawImage(bullet, bulletx, bullety);

    if (shooting) {
        //requestAnimationFrame(bullet_animate);
        setTimeout(bullet_animate, 5);
    } 
}
