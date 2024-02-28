var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
canvas.width=400;
canvas.height=220;

//back ground
ctx.fillStyle="#A2C9E2"
ctx.fillRect(0,0,400,220)

//logo
ctx.beginPath();
ctx.strokeStyle="blue"
ctx.lineWidth=10;
ctx.arc(200,100,70,0,2*Math.PI)

ctx.moveTo(200,30);
ctx.lineTo(200,170);

ctx.moveTo(130,110);
ctx.lineTo(270,110);

ctx.moveTo(130,90);
ctx.lineTo(270,90);

ctx.moveTo(140,130);
ctx.lineTo(260,130);

ctx.moveTo(140,70);
ctx.lineTo(260,70);

ctx.moveTo(150,150);
ctx.lineTo(250,150);

ctx.moveTo(150,50);
ctx.lineTo(250,50);

ctx.stroke();



//cot song ben trai
ctx.beginPath();
ctx.arc(200,100,90,1*Math.PI,1.3*Math.PI)
ctx.stroke();
ctx.beginPath();
ctx.arc(200,100,110,1*Math.PI,1.3*Math.PI)
ctx.stroke();

//cot song ben phai
ctx.beginPath();
ctx.strokeStyle="gray"
ctx.arc(200,100,90,1.7*Math.PI,0*Math.PI)
ctx.stroke();
ctx.beginPath();
ctx.arc(200,100,110,1.7*Math.PI,0*Math.PI)
ctx.stroke();
ctx.beginPath();
ctx.arc(200,100,130,1.7*Math.PI,0*Math.PI)
ctx.stroke();
ctx.beginPath();
ctx.arc(200,100,150,1.7*Math.PI,0*Math.PI)
ctx.stroke();
ctx.beginPath();
ctx.arc(200,100,170,1.7*Math.PI,0*Math.PI)
ctx.stroke();

//title
ctx.font="20px Arial";
ctx.fillStyle="black";
ctx.fillText("GLOBAL 2021", 125, 205);