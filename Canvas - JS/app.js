var canv = document.getElementById('canvas');
ctx = canv.getContext('2d');
var isMouseDown = false;
var coords = [];
var radius = 2;

canv.width = window.innerWidth;
canv.height = window.innerHeight;

canv.addEventListener('mousedown', function(e){
	isMouseDown = true;
});

canv.addEventListener('mouseup', function(e){
	isMouseDown = false;
	ctx.beginPath();
	coords.push('mouseup');
});

ctx.lineWidth = radius *2;
canv.addEventListener('mousemove', function(e){
	if (isMouseDown) {
		coords.push([e.clientX, e.clientY]);

		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);
	}
});

document.addEventListener('keydown', function(e){
	//console.log(e.keyCode)
	if (e.keyCode == 83) {//'S'
		save();
	}
	if (e.keyCode == 82) {//'R'
		coords = JSON.parse(localStorage.getItem('coords'));
		clear();
		replay();
	}
	if (e.keyCode == 67) {//'C'
		clear();
	}
});

function clear(){
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, canv.width, canv.height);
	ctx.beginPath();
	ctx.fillStyle = 'black';
}

function save(){
	localStorage.setItem('coords', JSON.stringify(coords));
}
function replay(){
	var timer = setInterval(function(){
		if (!coords.length) {
			clearInterval(timer);
			ctx.beginPath();
			return;
		}
		var crd = coords.shift(), e = {clientX: crd["0"], clientY: crd["1"]};
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);	

	}, 30);
}