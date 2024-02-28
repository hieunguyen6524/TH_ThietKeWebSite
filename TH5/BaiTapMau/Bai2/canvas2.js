var canvas = document.getElementById("myCanvas");

canvas.width = 200;
canvas.height= 200;

var ctx= canvas.getContext("2d");

ctx.moveTo(100,100)
ctx.lineTo(0,100);
ctx.stroke();
ctx.moveTo(100,100)
ctx.lineTo(200,100);
ctx.stroke();

ctx.moveTo(100,100)
ctx.lineTo(100,50);
ctx.stroke();
ctx.moveTo(100,100)
ctx.lineTo(100,150);
ctx.stroke();

ctx.moveTo(100,100)
ctx.lineTo(50,50);
ctx.stroke();
ctx.moveTo(100,100)
ctx.lineTo(150,50);
ctx.stroke();

ctx.moveTo(100,100)
ctx.lineTo(50,150);
ctx.stroke();
ctx.moveTo(100,100)
ctx.lineTo(150,150);
ctx.stroke();