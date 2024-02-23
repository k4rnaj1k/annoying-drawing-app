const image = document.querySelector('img');

image.style.position = 'absolute';
image.style.transitionDuration = '1s';
image.style.transitionProperty = 'top, left';
image.style.left = 0;
image.style.top = 0;

setInterval(() => {
    const position = Math.floor(Math.random() * 4);
    let top = 0;
    let left = 0;
    switch (position) {
        case 1: //top
            left = Math.random() * 100;
            break;
        case 2: //right
            left = 100;
            top = Math.random() * 100;
            break;
        case 3: //left
            top = Math.random() * 100;
            break;
        case 4: //bottom
            top = 100;
            left = Math.random() * 100;
            break;
    }
    image.style.left = left + '%';
    image.style.top = top + '%';
}, 1000);