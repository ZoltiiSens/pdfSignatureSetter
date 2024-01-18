// function handleDragStart(e) {
//     console.log(this);
//     this.style.opacity = '0.4';
//     this.style.color = "red";
// }

// function handleDragEnd(e) {
//     this.style.opacity = '1';
//     this.style.color = "black";
// }

// let signature = document.getElementById("signatureWrapper");
// signature.addEventListener('dragstart', handleDragStart);
// signature.addEventListener('dragend', handleDragEnd);





// function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
// }

// function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
// }

// function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;
// }

const IMAGE_WIDTH = 201;
const IMAGE_HEIGHT = 45;

var draggable = document.getElementById('signatureWrapper');
var canvasBlock = document.getElementById('canvasBlock');

var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

draggable.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

document.getElementById('sendData').addEventListener('click', function(event){
    let sign = document.getElementById('signatureWrapper');
    let left = parseInt(sign.style.left.slice(0, -2));
    let bottom = 794 - IMAGE_HEIGHT - parseInt(sign.style.top.slice(0, -2));
    let pageNum = document.getElementById('npages').innerHTML;
    document.getElementById('outputData').innerHTML = `
        x: ${left},
        y: ${bottom},
        page: ${pageNum}.
    `
});

function mouseDown(e) {
    console.log("down");
    e.preventDefault();
    posX = e.clientX - draggable.offsetLeft;
    posY = e.clientY - draggable.offsetTop;
    window.addEventListener('mousemove', moveElement, false);
}

function mouseUp() {
    console.log("up");
    window.removeEventListener('mousemove', moveElement, false);
}

function moveElement(e) {
    mouseX = e.clientX - posX;
    mouseY = e.clientY - posY;
    if (mouseX <= 0){
        draggable.style.left = '0px';
    } else if(mouseX >= 614 - IMAGE_WIDTH){
        draggable.style.left = 614 - IMAGE_WIDTH + 'px';
    } else{
        draggable.style.left = mouseX + 'px';
    }
    
    if (mouseY <=0){
        draggable.style.top = '0px';
    } else if (mouseY >= 794 - IMAGE_HEIGHT){
        draggable.style.top = 794 - IMAGE_HEIGHT + 'px';
    } else {
        draggable.style.top = mouseY + 'px';
    }
    
}