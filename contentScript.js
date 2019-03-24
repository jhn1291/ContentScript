
if(runConfig.contentScript){
  
    
var posts = document.getElementsByClassName("post");
var i;

function text_to_speech(myStr) {
    //sometimes there are HTML elements in a post, this will grab the message after the last
    //'>' and read that. The problem with this approach is that it will only grab the last
    //line after a linebreak (ex. <br>) and will not read quoted text that comes
    //before the last line (ex. >quoting someone <br> "reponse to quote")
    var sStr = myStr.split('>');
    var txt = sStr.pop()
    var msg = new SpeechSynthesisUtterance(txt);
    window.speechSynthesis.speak(msg);
}

for(i = 0; i < posts.length; i++) {

    (function() {
        var j = i;
        var postMsg = posts[j].getElementsByClassName("postMessage");
        var myStr = postMsg[0].innerHTML

        var but = document.createElement("P");
        var txt = document.createTextNode("Text to Speech");
        but.addEventListener("click", myFun=function(){text_to_speech(myStr);});
        but.appendChild(txt);
        posts[j].appendChild(but);})();
}

}