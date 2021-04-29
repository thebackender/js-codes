/*window.addEventListener("load", function() { window. scrollTo(0, 0); });
document.addEventListener("touchmove", function(e) { e.preventDefault() });
var body = document.documentElement;
if (body.requestFullscreen) {
body.requestFullscreen();
} else if (body.webkitrequestFullscreen) {
body.webkitrequestFullscreen();
} else if (body.mozrequestFullscreen) {
body.mozrequestFullscreen();
} else if (body.msrequestFullscreen) {
body.msrequestFullscreen();}

/*Body to Full Screen
var body = document.getElementById('body');
body.requestFullscreen();
body.webkitRequestFullscreen();*/

var body = document.getElementById('body');

function open(){
	window.requestFullscreen();
}
var elem = document.getElementById("myvideo");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

window.onload = maxWindow;

function maxWindow() {
    window.moveTo(0, 0);

    if (document.all) {
        top.window.resizeTo(screen.availWidth, screen.availHeight);
    }

    else if (document.layers || document.getElementById) {
        if (top.window.outerHeight < screen.availHeight || top.window.outerWidth < screen.availWidth) {
            top.window.outerHeight = screen.availHeight;
            top.window.outerWidth = screen.availWidth;
        }
    }
}