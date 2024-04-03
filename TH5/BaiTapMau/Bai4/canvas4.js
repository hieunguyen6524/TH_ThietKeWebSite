var canvas= document.getElementById("myCanvas")

canvas.width=200;
canvas.height=200;

var ctx= canvas.getContext("2d");
// var startAngle = (6 / 12) * 2 * Math.PI; // 9 giờ
// var endAngle = (9 / 12) * 2 * Math.PI; // 12 giờ
// ctx.beginPath();
// ctx.arc(100,100,10,startAngle,endAngle)
// ctx.stroke();
// ctx.beginPath();
// ctx.arc(100,100,20,startAngle,endAngle)
// ctx.stroke();
// ctx.beginPath();
// ctx.arc(100,100,30,startAngle,endAngle)
// ctx.stroke();
// ctx.beginPath();
// ctx.arc(100,100,40,startAngle,endAngle)
// ctx.stroke();

// var startAngle1 = (12 / 12) * 2 * Math.PI; // 9 giờ
// var endAngle1 = (3 / 12) * 2 * Math.PI; // 12 giờ
// ctx.beginPath();
// ctx.arc(100,100,10,startAngle1,endAngle1)
// ctx.stroke();
// ctx.beginPath();
// ctx.arc(100,100,20,startAngle1,endAngle1)
// ctx.stroke();
// ctx.beginPath();
// ctx.arc(100,100,30,startAngle1,endAngle1)
// ctx.stroke();
// ctx.beginPath();
// ctx.arc(100,100,40,startAngle1,endAngle1)
// ctx.stroke();

ctx.beginPath();
ctx.arc(100,100,10,0,0.5*Math.PI)
ctx.stroke();
ctx.beginPath();
ctx.arc(100,100,20,0,0.5*Math.PI)
ctx.stroke();
ctx.beginPath();
ctx.arc(100,100,30,0,0.5*Math.PI)
ctx.stroke();
ctx.beginPath();
ctx.arc(100,100,40,0,0.5*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.arc(100,100,10,Math.PI,1.5*Math.PI)
ctx.stroke();
ctx.beginPath();
ctx.arc(100,100,20,Math.PI,1.5*Math.PI)

ctx.stroke();
ctx.beginPath();
ctx.arc(100,100,30,Math.PI,1.5*Math.PI)

ctx.stroke();
ctx.beginPath();
ctx.arc(100,100,40,Math.PI,1.5*Math.PI)

ctx.stroke();