/**
* This file contains the logic which controls the interview half of the digital case study.
* It handles reading in the interview script from the script.json file, displaying the interview, and changing dialogue options as the user moves through the interview.
* The script keeps track of the user's position in the interview with the hubChain. As the user moves down hubs, each new hub is added to the end of the array to facilitate moving backwards easier.
*/

/**GLOBAL VARIALBES*/
var hubChain = [];
var currentConversation;
var nameLabel;
var response;
var locations = [];
var foods = [];
var questionOptions = [];
var typingFunc = null;
var responseCharIndex = 0;
var baseResponseTime = 40;
var nextResponseTypeTime = 0;
var currentResponseText = "";
var animateTicker = 0;
const MAX_QUESTIONS = 8;

// Called when the body of the page finishes loading. Sets up the interview activity.
function init() {
	hubChain[0] = scriptData.conv0.base;
	currentConversation = scriptData.conv0;
	nameLabel = document.getElementById("name");
	response = document.getElementById("response");
	nameLabel.innerHTML = "";
	response.innerHTML = "Select a patient to interview.";
	for (var i = 0; i < MAX_QUESTIONS; i++)
	{
		questionOptions[i] = document.getElementById(i + "");
	}
	displayQuestions(scriptData.conv0.base);
}

// Displays questions on the screen.
// @hub: An array of questions and responses.
function displayQuestions(hub) {
	for (var i = 0; i < MAX_QUESTIONS; i++)
	{
		var newName = "question";
		if (i < hub.length)
		{
			newName += (hub[i].hidden) ? " hidden" : "";
			newName += (hub[i].asked) ? "" : " unasked";
			questionOptions[i].innerHTML = hub[i].question;
		}
		else
		{
			newName += " hidden";
			questionOptions[i].innerHTML = "";
		}
		questionOptions[i].className = newName;
	}
}

// Types out the patient's response to a question.
function typeResponse() {
	if (responseCharIndex < currentResponseText.length)
	{
		// Depending on the char that's about to be typed, change time to type next char to simulate speech
		var c = currentResponseText.charAt(responseCharIndex);
		if (c == ' ')
		{
			nextResponseTypeTime = 20;
		}
		else if (c == ',')
		{
			nextResponseTypeTime = baseResponseTime * 3;
		}
		else if (c == '.' || c == '?' || c == '!' || c == '–')
		{
			if (currentResponseText.charAt(responseCharIndex + 1) == '"')
			{
				response.innerHTML += c + '"';
				return;
			}
			nextResponseTypeTime = baseResponseTime * 8;
		}
		else
		{
			nextResponseTypeTime = baseResponseTime;
		}
		
		response.innerHTML += currentResponseText.charAt(responseCharIndex);
		responseCharIndex++;
		
		typingFunc = setTimeout(typeResponse, nextResponseTypeTime);
	}
}

// Stops typing animation, writes full response out to screen
function finishTyping() {
	if (typingFunc != null)
		clearTimeout(typingFunc);
	response.innerHTML = currentResponseText;
	typingFunc = null;
}

// Called whenever the user clicks on a question.
// @id: Identifies which question the user clicked on.
function questionClicked(id) {
	
	// Display the answer to the question the user just clicked, marked as questioned
	finishTyping();
	response.innerHTML = "";
	currentResponseText = '"' + currentHub()[id].answer + '"';
	nextResponseTypeTime = baseResponseTime;
	responseCharIndex = 0;
	typeResponse();
	currentHub()[id].asked = true;
	
	if (currentHub()[id].locations != null) // Add food and location options
	{
		for (var i = 0; i < currentHub()[id].locations.length; i++)
			if (!locations.includes(currentHub()[id].locations[i]))
				locations.push(currentHub()[id].locations[i])
		locations.sort();
	}
	if (currentHub()[id].foods != null)
	{
		for (var i = 0; i < currentHub()[id].foods.length; i++)
			if (!foods.includes(currentHub()[id].foods[i]))
				foods.push(currentHub()[id].foods[i])
		foods.sort();
	}
	
	if (currentHub()[id].moves != null) // Handle moving to a new hub
	{
		if (currentHub()[id].moves == "out")
		{
			hubChain = [];
			hubChain[0] = scriptData.conv0.base;
			nameLabel.innerHTML = "";
			currentConversation = scriptData.conv0;
		}
		else if (currentHub()[id].moves == "base")
		{
			hubChain.pop();
		}
		else if (currentHub()[id].moves.slice(0, 4) == "conv")
		{
			currentConversation = scriptData[currentHub()[id].moves];
			hubChain.push(scriptData[currentHub()[id].moves].base);
			nameLabel.innerHTML = currentConversation.name;
			baseResponseTime = currentConversation.typingRate;
		}
		else if (currentHub()[id].moves == "between")
		{
			if (hubChain.length == 2)
			{
				hubChain.push(currentConversation.between);
			}
			else
			{
				hubChain.pop();
			}
		}
		else
		{
			hubChain.push(currentConversation[currentHub()[id].moves]);
		}
	}
	else if (currentHub()[id].unlocks != null) // Unlock new questions, show them onscreen
	{
		var indexes = currentHub()[id].unlocks;
		for (var i = 0; i < indexes.length; i++)
		{
			currentHub()[indexes[i]].hidden = false;
		}
	}
	
	displayQuestions(currentHub());
}

// Called whenever the user clicks on the notes button
// Toggles showing the user notes
function toggleNotes() {
	var notes = document.getElementById("notes");
	var button = document.getElementById("notesButton");
	if (notes.className == "hidden")
	{
		notes.className = "";
		button.innerHTML = "Hide Notepad";
	}
	else
	{
		notes.className = "hidden";
		button.innerHTML = "Show Notepad";
	}
}

// Called whenever the button on the bottom right is clicked. Moves the activity forward.
function nextClicked() {
	if (document.getElementById("nextButton").innerHTML == "Write Report")
	{
		document.getElementById("nextButton").className = "hidden";
		document.getElementById("testBox").className = "mainDisplay hidden";
		document.getElementById("reportBox").className = "mainDisplay";
		// TODO: Insert agent names into email from localStorage
	}
	else if (document.getElementById("nextButton").innerHTML == "Create Hypothesis")
	{
		// Fill out the selectors
		var foodSelect = document.getElementById("foods");
		var locationSelect = document.getElementById("locations");
		while (foodSelect.size > 0)
			foodSelect.remove(foodSelect.selectedIndex);
		while (locationSelect.size > 0)
			locationSelect.remove(locationSelect.selectedIndex);
		for (var i = 0; i < foods.length; i++)
		{
			var option = document.createElement("option");
			option.text = foods[i];
			foodSelect.add(option);
		}
		for (var i = 0; i < locations.length; i++)
		{
			var option = document.createElement("option");
			option.text = locations[i];
			locationSelect.add(option);
		}
		
		document.getElementById("textBox").className = "mainDisplay hidden";
		document.getElementById("hypothesisBox").className = "mainDisplay";
		document.getElementById("nextButton").innerHTML = "Back";
	}
	else
	{
		document.getElementById("textBox").className = "mainDisplay";
		document.getElementById("hypothesisBox").className = "mainDisplay hidden";
		document.getElementById("testBox").className = "mainDisplay hidden";
		document.getElementById("nextButton").innerHTML = "Create Hypothesis";
	}
}

// Called when the user clicks on the 'Test Hypothesis' button
// Plays an animation about running a test and checks whether or not they have selected the correct items in the two drop down menus
function testHypothesis() {
    if (animateTicker == 0)
    {
        document.getElementById("hypothesisBox").className = "mainDisplay hidden";
		document.getElementById("testText").innerHTML = "Defining Control Group...";
        document.getElementById("testBox").className = "mainDisplay";
        document.getElementById("loadingBar").style = "width: 0%;";
		document.getElementById("nextButton").disabled = true;
		animateTicker++;
        setTimeout(testHypothesis, 100);
    }
	else if (animateTicker < 96)
    {
		if (animateTicker == 25)
			document.getElementById("testText").innerHTML = "Surveying Patients...";
		else if (animateTicker == 50)
			document.getElementById("testText").innerHTML = "Surveying Control Group...";
		else if (animateTicker == 75)
			document.getElementById("testText").innerHTML = "Calculating Results...";
        document.getElementById("loadingBar").style = "width: " + animateTicker + "%;";
        animateTicker++;
        setTimeout(testHypothesis, 100);
    }
	else
	{
		if (document.getElementById("foods").value == "Alfalfa Sprouts" && document.getElementById("locations").value == "Schmidt's Organic Grocery")
		{
			document.getElementById("nextButton").innerHTML = "Write Report";
			document.getElementById("testText").innerHTML = "p = 0.014** TEST SUCCESSFUL";
		}
		else
		{
			var r = randomFloat(0.1, 1.0) * 1000;
			r = Math.round(r);
			r /= 1000;
			document.getElementById("testText").innerHTML = "p = " + r + " TEST FAILED";
		}
		document.getElementById("nextButton").disabled = false;
		animateTicker = 0;
	}
}

// Called when the user clicks on the 'Send Email' button.
// Checks if there's any text in the report, then moves the user to the final email screen.
function sendEmail() {
	if (document.getElementById("report").value == "")
	{
		document.getElementById("report").focus();
	}
	else
	{
		document.getElementById("reportBox").className = "mainDisplay hidden";
		document.getElementById("gotMailBox").className = "mainDisplay";
		setTimeout(startMailAnimation, 100);
	}
}

function startMailAnimation() {
	document.getElementById("mailAlert").style = "color: black; transition: color 4s;";
	document.getElementById("mailImg").style = "opacity: 1.0; transition: opacity 4s;";
}

// Called when user clicks the 'Open Mail' button
// Moves to the final email screen
function openEmail() {
	document.getElementById("gotMailBox").className = "mainDisplay hidden";
	document.getElementById("finalEmailBox").className = "mainDisplay";
}

// Returns the current interview hub.
function currentHub() {
	return hubChain[hubChain.length - 1];
}

// Returns a random float from min (inclusive) to max (exclusive)
function randomFloat(min, max) {
	return Math.random() * (max - min) + min;
}























