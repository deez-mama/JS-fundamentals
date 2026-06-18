//canvas API -> means for drawing graphics
//              used for animation, games, data visualization

//We can also write texts into canvas through .filltext but I havent done it

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");



// Triangle
ctx.lineWidth = 10;
ctx.fillStyle = "orange";
ctx.beginPath();
ctx.moveTo(250, 0);   // Top point
ctx.lineTo(0, 250);  // Bottom left
ctx.lineTo(500, 250);  // Bottom right
ctx.lineTo(250, 0);
ctx.closePath();
ctx.fill();
ctx.stroke();
 
// Rectangle


ctx.fillStyle = "red";
ctx.beginPath();
ctx.rect(0, 250, 250, 125); // x, y, width, height
ctx.fill();
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.rect(250, 250, 250, 125); // x, y, width, height
ctx.fill();
ctx.stroke();

ctx.fillStyle = "blue";
ctx.beginPath();
ctx.rect(0, 375, 250, 125); // x, y, width, height
ctx.fill();
ctx.stroke();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.rect(250, 375, 250, 125); // x, y, width, height
ctx.fill();
ctx.stroke();

// Circle
ctx.fillStyle = "purple";
ctx.beginPath();
ctx.arc(250, 375, 50, 0, 2 * Math.PI); // x, y, radius, startAngle (radian), endingAngle (radian) (0->2PI is a full circle in radian), counterclockwise
ctx.fill();
ctx.stroke();