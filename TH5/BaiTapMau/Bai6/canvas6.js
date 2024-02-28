var canvas=document.getElementById("myCanvas");
canvas.width=200;
canvas.height=100;
var ctx=canvas.getContext("2d");
//create gradient
var grd=ctx.createLinearGradient(0,0,200,0)
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
//fill with gradient
ctx.fillStyle=grd;
ctx.fillRect(10,10,180,80);