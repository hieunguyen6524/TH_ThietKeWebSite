var canvas = document.getElementById("myCanvas");

canvas.width = 200;
canvas.height= 100;

var ctx= canvas.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
ctx.moveTo(200,0);
ctx.lineTo(0,100);
ctx.stroke();
