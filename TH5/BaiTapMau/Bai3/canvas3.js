var canvas= document.getElementById("myCanvas")

canvas.width=200;
canvas.height=200;

var ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.arc (100,100,70,0, 2*Math.PI)
ctx.stroke();