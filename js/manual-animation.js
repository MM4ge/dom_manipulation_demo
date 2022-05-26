const buttons = document.querySelectorAll("button");
for(var i=0; i<buttons.length;i++) {
    let currentButton = buttons[i];
    currentButton.addEventListener('mouseenter', () => changeToCoral(event.target));
    currentButton.addEventListener('mouseleave', () => backToNormal(event.target));
    currentButton.addEventListener('click', ()=> moveImage(event.target.id))
}

function changeToCoral(eventTarget) {
    eventTarget.style.backgroundColor = "coral";
}

function changeToWhite() {
    eventTarget.style.backgroundColor = "white";
}

function backToNormal(eventTarget) {
    eventTarget.style.backgroundColor='';
}

function moveImage(direction) {
    let imgObjStyle = imgObj.style;
    let topVal = parseInt(imgObjStyle.top, 10);
    let leftVal = parseInt(imgObjStyle.left, 10);
    let speed = 30;

    if(direction === 'KeyA') {
        imgObjStyle.left = (leftVal - speed) + "px";
//        imgObjStyle.left = (leftVal - deltaX) + "px";
    }

    if(direction === 'KeyW') {
        imgObjStyle.top = (topVal - speed) + "px";
//        imgObjStyle.top = (topVal - deltaY) + "px";
    }

    if(direction === 'KeyD') {        
        imgObjStyle.left = (leftVal + speed) + "px";
//        imgObjStyle.left = (leftVal + deltaX) + "px";
    }

    
    if(direction === 'KeyS') {
        imgObjStyle.top = (topVal + speed) + "px";
//        imgObjStyle.top = (topVal + deltaY) + "px";
    }

    if(direction === 'Forward') {
        let angle = currentDegrees * Math.PI / 180; // Degrees to Radians
        let deltaX = Math.sin(angle) * speed;
        let deltaY = Math.cos(angle) * speed;
        imgObjStyle.top = (topVal - deltaY) + "px";
        imgObjStyle.left = (leftVal + deltaX) + "px";
    }
}

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';

    // Additional Listeners
    currentDegrees = 0;
    degreeIncrement = 1;
    imgObj.addEventListener("click", function() {degreeIncrement = 0 - degreeIncrement; });
    imgObj.addEventListener("pointerover", function() {rotateShip(); });
    imgObj.addEventListener("pointerout", function() { clearInterval(hoverForward); });
}

function rotateShip()
{
    hoverForward = setInterval( function() {
    currentDegrees += degreeIncrement;
//    console.log("Ship rotated to " + currentDegrees + " degrees");
    imgObj.style.transform = 'rotate(' + currentDegrees + 'deg)';
    }, 10);
}



window.onload = init;