//this file works through each post on 4chan and replaces the OP message with
//a link, Our Link, to the ContentScript repo in GitHub


var ops = document.getElementsByClassName("post op");
var i;

    
function isObject(val) {
    if (val === null) { return false;}
    return ( (typeof val === 'function') || (typeof val === 'object') );
}


for(i = 0; i < ops.length; i++){
             
    (function() {
        var j = i;
        var a = document.createElement('a');
        var linkText = document.createTextNode("Our Link");

        a.appendChild(linkText);
        a.title = "Our Link";
        a.href = "https://github.com/jhn1291/ContentScript.git";
        document.body.appendChild(a);
        ops[j].appendChild(a);})();
    }


       

