var pos = 0;
const pageWidth = window.innerWidth;
const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png']
];
var direction = 0;
var focus = 0
const pacMen = [];

function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}

function makePac() {
    let velocity = setToRandom(10);
    let position = setToRandom(200);
    let game = document.getElementById('game');
    let newimg = document.createElement('img');
    newimg.style.position = 'absolute';
    newimg.src = './images/pacMan1.png';
    // function Run() {
    //     focus = (focus + 1) % 2;
    //     direction = update();
    //     if (direction) {
    //         img.style.left = pos + "px";
    //     } else {
    //         img.style.left = pos + 'px';
    //     }
    // }

    newimg.width = 100;
    newimg.style.left = position.x;
    newimg.style.top = position.y;
    game.appendChild(newimg);
    return {
        position,
        velocity,
        newimg
    }
}

function update() {
    
    pacMen.forEach((item) => {
        checkCollisions(item)
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        item.newimg.style.left = item.position.x;
        item.newimg.style.top = item.position.y;
    })
    setTimeout(update, 20);
}

function checkCollisions(item) {
    if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
        item.position.x + item.velocity.x < 0) item.velocity.x = -item.velocity.x;
    if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
        item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
}

function Run() {
    let imgWidth = img.width
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
    img.src = pacArray[direction][focus];
    if (direction) {
        pos -= 20;
        img.style.left = pos + "px";
    } else {
        pos += 20;
        img.style.left = pos + 'px';
    }
}

setInterval(Run, 75);

function makeOne() {
    pacMen.push(makePac()); // add a new PacMan
}