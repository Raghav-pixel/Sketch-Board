let optionsCont = document.querySelector('.option-cont');
let iconElem = optionsCont.children[0];
let toolsCont = document.querySelector('.tools-cont');
let optionFlag = true;
let pencilToolCont = document.querySelector('.pencil-tool-cont');
let eraserToolCont = document.querySelector('.eraser-tool-cont');
let pencilFlag = false;
let eraserFlag = false;
let pencil = document.querySelector('.pencil');
let eraser = document.querySelector('.eraser');
let sticky = document.querySelector('.sticky');

// true -> tools show  false -> hide tools
optionsCont.addEventListener('click', (e) => {
    optionFlag = !optionFlag;
    if(optionFlag) openTools();
    else closeTools();
});

function openTools() {
    iconElem.classList.remove('fa-times');
    iconElem.classList.add('fa-bars');
    toolsCont.style.display = 'flex';
}

function closeTools() {
    iconElem.classList.remove('fa-bars');
    iconElem.classList.add('fa-times');
    toolsCont.style.display = 'none';
    pencilToolCont.style.display = 'none';
    eraserToolCont.style.display = 'none';
}

pencil.addEventListener('click', (e) => {
    pencilFlag = !pencilFlag;
    if(pencilFlag) {
        pencilToolCont.style.display = 'block';
    } else {
        pencilToolCont.style.display = 'none';
    }
});

eraser.addEventListener('click', (e) => {
    eraserFlag = !eraserFlag;
    if(eraserFlag) {
        eraserToolCont.style.display = 'flex';
    } else {
        eraserToolCont.style.display = 'none';
    }
});

sticky.addEventListener('click', (e) => {
    let stickyCont = document.createElement('div');
    stickyCont.setAttribute('class', 'sticky-cont');
    stickyCont.innerHTML = `        
    <div class="header-cont">
        <div class="minimize"></div>
        <div class="remove"></div>
    </div>
    <div class="note-cont">
        <textarea></textarea>
    </div>
    `;
    document.body.appendChild(stickyCont);

    let minimize = stickyCont.querySelector(".minimize");
    let remove = stickyCont.querySelector(".remove");
    // noteActions(minimize, remove, stickyCont);

    stickyCont.onmousedown = function(event) {
        dragAndDrop(stickyCont, event);
    };
      
    stickyCont.ondragstart = function() {
        return false;
    };
});

// function noteActions(minimize, remove, stickyCont) {
//     console.log("inside notes action", remove);

//     remove.addEventListener('click', (e) => {
//         console.log("clicked", stickyCont);
//         stickyCont.remove();
//     });
//     // minimize.addEventListener('click', (e) => {

//     // })
// }

function dragAndDrop(element, event) {
    let shiftX = event.clientX - element.getBoundingClientRect().left;
    let shiftY = event.clientY - element.getBoundingClientRect().top;
  
    element.style.position = 'absolute';
    element.style.zIndex = 1000;
    document.body.append(element);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the element at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      element.style.left = pageX - shiftX + 'px';
      element.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the element on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the element, remove unneeded handlers
    element.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      element.onmouseup = null;
    };
}