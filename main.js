let replaceScript = 'https://cdn.i-ready.com/instruction/student-dashboard/release-13.4.x/1/static/js/app-19.chunk.js'
let minutesToggle = true
if (document.scripts[15].src == replaceScript) {
	alert('lesson has already been loaded, refresh and run before going into your lesson')
} else {
	fetch("https://raw.githubusercontent.com/Ball-Security/i-Ready-Hack/main/app-19.chunk.js").then(r => r.text()).then(r => eval(r))
	console.log('Injected')
}

function minutes() {
	if (minutesToggle == true && lessonBridge) {
		html5Iframe.contentWindow.localStorage.cheats = '{"timeoutValue":"1000000000000000000","timeoutMode":true}'
		html5Iframe.contentWindow.document.getElementById('settings-gear').click()
		html5Iframe.contentWindow.document.getElementById('cancelBtn').click()
		lessonBridge.close()
		minutesToggle = false
		alert('go back into lesson to start')
	} else {
		html5Iframe.contentWindow.localStorage.clear()
		html5Iframe.contentWindow.localStorage.cheats = '{"timeoutValue":"1000000000000000000","timeoutMode":false}'
		html5Iframe.contentWindow.document.getElementById('settings-gear').click()
		html5Iframe.contentWindow.document.getElementById('cancelBtn').click()
		lessonBridge.close()
		minutesToggle = true
		alert('stopped')
	}
}

function lesson() {
	if (window.lessonBridge === undefined) { //checks if lesson is open
		alert('open a lesson')
	} else {
		lessonBridge.pause(100)
	}
}

//UI
function dragElement(elmnt) {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		/* if present, the header is where you move the DIV from:*/
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		/* otherwise, move the DIV from anywhere inside the DIV:*/
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
	}


}
// Test
var UI = document.createElement("div");
UI.innerHTML = `<div id="Test" class="Test" style="position:absolute; z-index: 99999; outline: #add8e6 solid 1px; min-height: 160px; transform: translateX(0px) translateY(-32px); opacity: 0.85; font-family: sans-serif; width: 124px; height: 137px; background: rgb(30, 30, 30); position: absolute; border-radius: 5px; display: grid; place-items: center; color: white; font-size: larger; top: 104px; left: 577px;">
    <h1 style=" font-size: 20px;"><center>Wangify</center>
    </h1>
<style>
.button {
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  width: 100%;
  text-align: center;
  color: white; 
  background-color: rgb(30,30,30);
}
.button:hover {
    color: black;
  background-color: #add8e6
}
.button:active {
  background-color: #0000ff;
  color: white;
}
</style>
    <button onclick="lesson()" class="button">Lesson</button>
    <button onclick="minutes()" class="button">Minutes</button>
    <br>
    <br>
    <center><a style="font-size: 10px;"> This Tool Is Made By Wang (and wang only)</a></center>
    <br>
    <br>
</div>`

dragElement(UI.firstElementChild);
document.body.appendChild(UI);
