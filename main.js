const replaceScript = "https://cdn.i-ready.com/instruction/student-dashboard/release-13.5.x/2/static/js/app-21.chunk.js"
if (document.scripts[12].src == replaceScript) { //checks if the script has already been loaded
    alert('lesson has already been loaded, refresh the page and run before going into your lesson')
} else {
    //override the script
    fetch("https://raw.githubusercontent.com/flowingsalt/Flowify/main/app-21.chunk.js").then(r => r.text()).then(r => eval(r))
}
window.yes = function() {
    p1(prompt("score?"))
}
setInterval(function() {
    try {
  if (html5Iframe.contentWindow.document.getElementById('nav-forward') != undefined) { 
    html5Iframe.contentWindow.document.getElementById('nav-forward').disabled = false; // Enable the button
    html5Iframe.contentWindow.document.getElementById('nav-forward').onclick = yes; // Set up event listener to run p1 when button is clicked
  }
} catch (error) {}
}, 10);
