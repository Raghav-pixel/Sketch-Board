let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouseDown = false;

// Api
let tool = canvas.getContext('2d');

tool.strokeStyle = 'red';
tool.lineWidth = '3';

// mousedown -> starts new path, mousemove -> fill path (graphics)
canvas.addEventListener('mousedown', (e) => {
    mouseDown = true;
    tool.beginPath();
    tool.moveTo(e.clientX, e.clientY);
});

canvas.addEventListener('mousemove', (e) => {
    if(mouseDown) {
        tool.lineTo(e.clientX, e.clientY);
        tool.stroke();
    }
});

canvas.addEventListener('mouseup', (e) => {
    mouseDown = false;
})