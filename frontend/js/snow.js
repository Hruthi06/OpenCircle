const canvas = document.createElement('canvas');
canvas.id = 'snow-canvas';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

let width, height;
let snowflakes = [];

function initSnow() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Style canvas to be fixed behind everything
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none'; // so it doesn't block clicks
    canvas.style.zIndex = '-1';

    snowflakes = [];
    const count = width < 768 ? 50 : 150; // fewer flakes on mobile

    for (let i = 0; i < count; i++) {
        snowflakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 3 + 1,
            speedY: Math.random() * 1 + 0.5,
            speedX: Math.random() * 0.5 - 0.25,
            opacity: Math.random() * 0.5 + 0.3
        });
    }
}

function drawSnow() {
    ctx.clearRect(0, 0, width, height);

    snowflakes.forEach(flake => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();

        // Update position
        flake.y += flake.speedY;
        flake.x += flake.speedX;

        // Reset if off screen
        if (flake.y > height) {
            flake.y = 0;
            flake.x = Math.random() * width;
        }
    });

    requestAnimationFrame(drawSnow);
}

window.addEventListener('resize', initSnow);

// Initialize on load
initSnow();
drawSnow();
