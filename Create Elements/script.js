var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
para.id="p3";
para.classList.add("new");

var element = document.getElementById("div1");
element.appendChild(para);

//Div
var div = document.createElement('div');
div.classList.add("new");

var x = document.body;
x.appendChild(div);

//Remove Element
var elmnt = document.getElementById("p1");
elmnt.remove();

//a
var link = document.createElement('a');
var text = document.createTextNode('Link');
link.appendChild(text);
div.appendChild(link);
link.id = 'link';
link.href = 'https://www.w3schools.com/jsref/prop_doc_body.asp';
link.title = 'This is Link';
