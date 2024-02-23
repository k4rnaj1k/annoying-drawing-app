const canvasElement = document.querySelector('#canvas');
canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

const context = canvasElement.getContext('2d');
let prevPositionX = false;
let prevPositionY = false;

let mousePressed = false;

setInterval(() => {
    const { height, width, x, y } = image.getBoundingClientRect();
    context.clearRect(x, y, width, height);
}, 30);

canvasElement.addEventListener('mousedown', () => {
    mousePressed = true;
});

canvasElement.addEventListener('mouseup', () => {
    mousePressed = false;
});

canvasElement.addEventListener('mousemove', (e) => {
    if (mousePressed) {
        if (!prevPositionX) {
            prevPositionX = e.clientX;
            prevPositionY = e.clientY;
        }
        context.fillStyle = 'green';
        context.lineCap = 'round';
        context.beginPath();
        context.moveTo(prevPositionX, prevPositionY);
        prevPositionX = e.clientX;
        prevPositionY = e.clientY;
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
    } else {
        prevPositionX = false;
    }
})