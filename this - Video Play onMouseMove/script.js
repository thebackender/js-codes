var videos = document.getElementsByTagName('video');
for (var p = 0; p < videos.length; p++) {
    videos[p].muted = true;
}
for (var i = 0; i < videos.length; i++) {
	videos[i].onmouseover = function(){
        for (var j = 0; j < videos.length; j++) {
        	videos[j].pause();
            videos[j].classList.remove("bak");
        }
        this.classList.add("bak");//Контекст == document.getElementsByTagName('video');
        this.play();
    };
    videos[i].onmouseout = function(){
        this.classList.remove("bak");
        this.pause();
    };
}
for (var n = 0; n < videos.length; n++) {
    videos[n].onclick = function(){
        this.play();
        this.muted=false;
    }
}