var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
canvas.width=250;
canvas.height=300;

function myCanvas(){
    var img=document.getElementById("scream");
    ctx.drawImage(img,10,10);
}