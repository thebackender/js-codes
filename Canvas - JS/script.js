var canv = document.getElementById('canvas');
ctx = canv.getContext('2d');
canv.width = window.innerWidth;
canv.height = window.innerHeight;

//Draw Rectangle
/*var x = 50, y = 50;
ctx.fillStyle = 'magenta';
ctx.fillRect(x, y, 300, 200);
ctx.strokeStyle = 'red';	
ctx.lineWidth = 10;
ctx.strokeRect(x, y, 300, 200);*/

//Draw Circle
/*ctx.fillStyle = 'magenta';
ctx.arc(canv.width/2, canv.height/2, 100, 0, Math.PI*2, false);
ctx.fill();*/

//ctx.scale(3, 2); //For change figure transform
//ctx.rotate(-.1); // For rotate figure

//Draw Triange
/*ctx.strokeStyle = 'red';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(25, 100);
ctx.lineTo(75, 100);
ctx.lineTo(50, 50);
ctx.closePath();//Second variant of ctx.lineTo(50, 50);
ctx.stroke();*/

//Gradient
var grad = ctx.createLinearGradient(0, 0, 1000, 0);
grad.addColorStop('0', 'magenta');
grad.addColorStop('.50', 'blue');
grad.addColorStop('1', 'green');

//Draw Text
ctx.fillStyle = grad;
//ctx.textAlign = 'center';// with this ctx.fillText("Hello", canv.width/2, canv.height/2);
ctx.font = '100px Georgia';
ctx.fillText("Hello World", 200, 300);

//Animation
/*setInterval(function(){
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, canv.width, canv.height);

	ctx.fillStyle = 'magenta';
	ctx.fillRect(x++, y, 300, 200);
}, 10);*/

