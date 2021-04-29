var elements = document.getElementsByClassName("child");
for(var i = 0; i < elements.length; i++)
{
    elements[i].onclick = function(){
        // remove class from sibling
        //var el = elements[0];
        for (var j = 0; j < elements.length; j++) {
            elements[j].classList.remove("bak");
        }
        /*while(el)
        {
            if(el.tagName === "DIV"){
                //remove class
                el.classList.remove("bak");
            }
            // pass to the new sibling
            el = el.nextSibling;
        }*/
        this.classList.add("bak");//Контекст ==  document.getElementsByClassName("child")
        console.log(this);
    };
}