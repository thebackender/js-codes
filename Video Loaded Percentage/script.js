var video = document.getElementById('video');
var time = document.getElementById('time');
var load = document.getElementById('load');

function showProgress(){
	time.style.display="block";
	load.style.display="block";
};

video.onloadedmetadata = function() {
  time.max = parseInt(video.duration);
  load.max = parseInt(video.duration);
};

setInterval(function(){
	time.value = parseInt(video.currentTime);
	load.value = parseInt(video.buffered.end(0));
	//alert("Start: " + video.currentTime + " End: "  + video.buffered.end(0));
}, 500);