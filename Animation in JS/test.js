function changeBG(el, clr){
	var elem = document.getElementById(el);
	elem.style.transition = 'background 1s linear 0s';
	elem.style.background = clr;
}

// Fades
function fadeOut(el){
	var elem = document.getElementById(el);
	elem.style.transition = 'opacity .3s ease-in-out 0s';
	elem.style.opacity = 0;
}
function fadeIn(el){
	var elem = document.getElementById(el);
	elem.style.transition = 'opacity .3s ease-in-out 0s';
	elem.style.opacity = 1;
}

// Slides
function slideOpen(el){
	var elem = document.getElementById(el);
	elem.style.transition = 'height 1s cubic-bezier(.5, -1, .5, 2) 0s';
	elem.style.height = "200px";
}
function slideClose(el){
	var elem = document.getElementById(el);
	elem.style.transition = 'height 1s cubic-bezier(.5, -2, .5, 2) 0s';
	elem.style.height = "0px";
}