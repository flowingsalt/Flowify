const replaceScript = "https://cdn.i-ready.com/instruction/student-dashboard/release-13.4.x/1/static/js/app-19.chunk.js"
if (document.scripts[15].src == replaceScript) { //checks if the script has already been loaded
    alert('lesson has already been loaded, refresh the page and run before going into your lesson')
} else {
    //override the script
    fetch("https://raw.githubusercontent.com/flowingsalt/Flowify/main/app-19.chunk.js").then(r => r.text()).then(r => eval(r))
    alert("Go into the lesson and press the skip button next to the progress bar")
}
setInterval(function() {
    if (window.lessonBridge != undefined) { //checks if lesson is open
        html5Iframe.contentWindow.document.getElementById('nav-forward').disabled = false; //enables the button
        html5Iframe.contentWindow.document.getElementById('nav-forward').onclick = p1; //when the button is clicked it will run "p1" function
    }
}, 10)

window.p1 = function() {
    var score = prompt("score?") // Gets the score
    let csid = html5Iframe.src.split('csid=')[1].split('&type')[0] // gets the current lesson csid
    objScore = { score: score } //makes the score into an obj to make server happy
    lessonBridge.pause.completeLessonComponent(csid, objScore); // sends the request to complete the lesson
}
