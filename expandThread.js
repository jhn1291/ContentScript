//expand all the threads in 4chan on load
var expandButtons = document.getElementsByClassName("extButton expbtn");
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

for(i = 0; i < expandButtons.length; i++) {

    (function() {
        var j = i;
        var expandThread = expandButtons[j];
        expandThread.dispatchEvent(simulateClick(expandThread));;})();
}










