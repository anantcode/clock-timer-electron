const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set the circle parameters
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 50;
const startAngle = 0;
const endAngle = 2 * Math.PI;

// Set the timer parameters
let totalTime = 10; // Total time in seconds
let remainingTime = totalTime; // Remaining time in seconds
let timeInterval = 100; // Time interval in milliseconds
let timePerFrame = 1 / (totalTime * 1000 / timeInterval); // Fraction of circle to draw per frame
let currentAngle = startAngle;

// Set the circle color
ctx.fillStyle = 'red';

// Draw the initial circle
ctx.beginPath();
ctx.arc(centerX, centerY, radius, startAngle, endAngle);
ctx.fill();

// Update the circle every timeInterval milliseconds
let intervalId = setInterval(() => {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Calculate the current angle based on the remaining time
  currentAngle = (totalTime - remainingTime) / totalTime * 2 * Math.PI;
  
  // Draw the circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, currentAngle);
  ctx.fill();
  
  // Update the remaining time
  remainingTime -= timeInterval / 1000;
  
  // Check if the timer has ended
  if (remainingTime <= 0) {
    clearInterval(intervalId);
  }
}, timeInterval);