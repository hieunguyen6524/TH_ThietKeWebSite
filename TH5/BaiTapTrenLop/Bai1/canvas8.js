var canvas=document.getElementById("myCanvas");
canvas.width=200;
canvas.height=200;
var ctx=canvas.getContext("2d");

var grd=ctx.createRadialGradient(100,100,30,100,100,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

ctx.beginPath();
ctx.fillStyle=grd;
ctx.arc(100,100,90,0,2*Math.PI)
ctx.fill();