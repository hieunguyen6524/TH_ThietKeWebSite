var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
canvas.width=400;
canvas.height=220;

ctx.fillStyle="#A2C9E2";
ctx.fillRect(0,0,400,220);
ctx.lineWidth=10;
// nua vong tron
ctx.beginPath();
ctx.arc(200,0,110,0,1*Math.PI)
ctx.strokeStyle="darkgreen";
ctx.stroke();


ctx.beginPath();
ctx.arc(200,0,130,0,1*Math.PI)
ctx.strokeStyle="red";
ctx.stroke();

ctx.beginPath();
ctx.arc(200,0,150,0,1*Math.PI)
ctx.strokeStyle="blue";
ctx.stroke();
//hufi 2021
ctx.font=("30px Arial");
ctx.fillStyle="black";
ctx.fillText("HUFI 2021",130,60);
//line
ctx.strokeStyle="darkgreen";
ctx.lineWidth=3;
ctx.moveTo(10,160)
ctx.lineTo(270,160)

ctx.moveTo(10,180)
ctx.lineTo(330,180)

ctx.moveTo(10,200)
ctx.lineTo(380,200)
ctx.stroke();
