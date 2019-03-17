var ops = document.getElementsByClassName("post op");
var qls = document.getElementsByClassName("quotelink");
var i;
console.log(ops);

for(i = 0; i < ops.length; i++){
    var bqs = ops[i].getElementsByTagName("blockquote");
    for (x in bqs) {
        bqs[x].innerHTML = "I'm a fag!";
    }
}

function qlMO(e) {
    console.log("BOOF");
    var msg = new SpeechSynthesisUtterance("Hello Samuel");
    window.speechSynthesis.speak(msg);
}

function qlOC(e) {
}

for (ql in qls){
    qls[ql].addEventListener("mouseover",  qlMO);
    qls[ql].addEventListener("onclick",  qlOC);
}
