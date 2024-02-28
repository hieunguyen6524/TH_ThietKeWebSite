var canvas=document.getElementById("myCanvas")
canvas.width=200;
canvas.height=100;
var ctx=canvas.getContext("2d")

var grd= ctx.createLinearGradient(0,0,200,0)
grd.addColorStop(0,"red");
grd.addColorStop(1,"yellow");

ctx.beginPath();
ctx.fillStyle =grd;
ctx.fillRect(10,10,180,30);

ctx.beginPath();
ctx.fillStyle =grd;
ctx.fillRect(10,60,180,30);
