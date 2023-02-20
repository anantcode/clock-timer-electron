const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set the circle color
ctx.fillStyle = 'red';

// Draw the circle
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.fill();