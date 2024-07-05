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