const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const gridSize = 20;
const tileCount = canvas.width / gridSize;
let snake = [{ x: 10, y: 10 }];
let velocity = { x: 0, y: 0 };
let food = randomPosition();
let grow = 0;

function randomPosition() {
    return {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
    };
}

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (velocity.y === 1) break; // prevent reversing
            velocity = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (velocity.y === -1) break;
            velocity = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (velocity.x === 1) break;
            velocity = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (velocity.x === -1) break;
            velocity = { x: 1, y: 0 };
            break;
    }
});

function gameLoop() {
    const head = { x: snake[0].x + velocity.x, y: snake[0].y + velocity.y };

    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount ||
        snake.slice(1).some(seg => seg.x === head.x && seg.y === head.y)) {
        alert('Game Over');
        snake = [{ x: 10, y: 10 }];
        velocity = { x: 0, y: 0 };
        food = randomPosition();
        grow = 0;
        return setTimeout(gameLoop, 100);
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        grow += 1;
        food = randomPosition();
    }
    if (grow === 0) {
        snake.pop();
    } else {
        grow -= 1;
    }

    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

    ctx.fillStyle = 'green';
    snake.forEach(seg => {
        ctx.fillRect(seg.x * gridSize, seg.y * gridSize, gridSize, gridSize);
    });

    setTimeout(gameLoop, 100);
}

gameLoop();
