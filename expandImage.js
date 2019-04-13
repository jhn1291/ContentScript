//var expandImages = document.querySelector(".fileThumb"); 

var expandImages = document.getElementsByClassName("fileThumb");
var i;

//sim click event
function simulateClick () {
	// Create our event (with options) 
	var evt = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
        view: window
    });

    return evt;

};


for(i = 0; i < expandImages.length; i++) {

    (function() {
        var j = i;
        var expandImage = expandImages[j];
        var myImage = expandImage.childNodes[0];
        myImage.dispatchEvent(simulateClick(myImage))
    })();
}