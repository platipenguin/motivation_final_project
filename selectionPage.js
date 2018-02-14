// Called when the user clicks on the 'Start' button
// Moves to the 'You've got mail!' transition screen
function start() {
	document.getElementById("titleBox").className = "dashboard hidden";
	document.getElementById("gotMailBox").className = "dashboard";
	setTimeout(startMailAnimation, 100);
}

function startMailAnimation() {
	document.getElementById("mailAlert").style = "color: black; transition: color 4s;";
	document.getElementById("mailImg").style = "opacity: 1.0; transition: opacity 4s;";
}

// Called when the user clicks the 'Open Email' button
// Moves to the next screen
function openEmail() {
	document.getElementById("gotMailBox").className = "hidden";
	document.getElementById("mailBox").className = "dashboard";
}

// Called when the user clicks on one of the role selection buttons
// Redirects the web browser to the file for that role
function goToActivity(page) {
    localStorage.userName = document.getElementById("userName");
    localStorage.partnerName = document.getElementById("partnerName");
    
    var newURL = window.location.href;
    var index = newURL.lastIndexOf('/') + 1;
    newURL = newURL.slice(0, index);
    newURL += page + ".html";
    window.location.assign(newURL);
}