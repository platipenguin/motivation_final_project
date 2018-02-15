// Called when the user clicks on the 'Start' button
// Moves to the 'You've got mail!' transition screen
function start() {
	document.getElementById("footer").className = "hidden";
	document.getElementById("titleBox").className = "dashboard hidden";
	document.getElementById("gotMailBox").className = "dashboard";
	localStorage.userName = document.getElementById("userName").value;
    localStorage.partnerName = document.getElementById("partnerName").value;
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
	insertNames(document.getElementById("introEmail"));
}

// Called when the user clicks on one of the role selection buttons
// Redirects the web browser to the file for that role
function goToActivity(page) {
    var newURL = window.location.href;
    var index = newURL.lastIndexOf('/') + 1;
    newURL = newURL.slice(0, index);
    newURL += page + ".html";
    window.location.assign(newURL);
}

// Adds the user supplied surnames to the specified element's innerHTML
// Searches the innerHTML, replacing '*' with the user's name and '#' with their partner's name
function insertNames(element) {
	var string = element.innerHTML;
	string = string.replace("*", localStorage.userName);
	string = string.replace("#", localStorage.partnerName);
	element.innerHTML = string;
}