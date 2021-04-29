var title = document.getElementById('title');
function showTitle(message){
	title.style.display = 'block';
	document.onmousemove = function(){
		var x = event.clientX;
		var y = event.clientY;
		title.style.left = (x + 20) + "px";
		title.style.top = (y + 20) + "px";
	}
	title.innerHTML = message;
}
function hideTitle(){
	title.style.display = 'none';
}