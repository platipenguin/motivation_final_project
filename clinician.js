/**
* This file contains the logic that controls the clinician half of the digital case study.
* It handles reading data in from the 'testData.js' file and presenting it in the user's dashboard.
* It keeps track of which tests have been run, which are running, and which can still be run, and handles displaying them for the user.
*/

/**GLOBAL VARIALBES*/
var runningTestTimes = [];
var runningTests = [];
var completedTests = [];
var testOnDeck = null;
var tickFunction = null;

// Called when the HTML document loads. Initializes the activity
function init() {
	var testList = document.getElementById("tests");
	for (var i = 0; i < testData.data.length; i++)
	{
		var b = document.createElement("button");
		b.innerHTML = testData.data[i].name;
		b.id = `${testData.data[i].id}`;
		b.addEventListener("click", function() { testOptionClicked(this.id)} );
		b.className = "testOption";
		testList.appendChild(b);
	}
	setTimeout(displaySMS, 300000);
}

// Called when a test option has been clicked.
// Displays information about it on the bench, activates the test button, and queues the test up to be run.
// @clickedID: The id of the test that the user clicked on.
// @completed: If the test has already been successfully run.
function testOptionClicked(clickedID) {
	var id = parseInt(clickedID);
	
	for (var i = 0; i < testData.data.length; i++) // Re-highlight any tests that haven't just been clicked on
	{
		if (id != i)
			document.getElementById(`${i}`).disabled = false;
		else
			document.getElementById(clickedID).disabled = true;
	}
	
	if (!completedTests.includes(testData.data[id].name)) // Show info about test and prepare run button
	{
		document.getElementById("testInfo").className = "";
		document.getElementById("testInfo").innerHTML = `${testData.data[id].name}<br><br>${testData.data[id].info}<br><br>Time: ${testData.data[id].time}s`;
		document.getElementById("testImg").src = "";
		document.getElementById("testResult").innerHTML = "";
		if (runningTests.includes(id)) // Let user cancel tests that are in progress
		{
			document.getElementById("runButton").disabled = false;
			document.getElementById("runButton").innerHTML = "Cancel Test";
		}
		else
		{
			document.getElementById("runButton").innerHTML = "Run Test";
			document.getElementById("runButton").disabled = false;
		}
		testOnDeck = id;
	}
	else // Show test result
	{
		document.getElementById("testInfo").className = "hidden";
		document.getElementById("testImg").src = testData.data[id].img;
		document.getElementById("testResult").innerHTML = testData.data[id].result;
		document.getElementById("runButton").disabled = true;
	}
}

// Called when the user clicks the 'Run Test' button
// Moves the current test into the 'Running Tests' category, starts to run the test
// Also used to cancel a test that is being run
function runTest() {
	var t = document.getElementById(`${testOnDeck}`);
	
	// Handle canceling the test
	if (document.getElementById("runButton").innerHTML == "Cancel Test")
	{
		if (runningTests.indexOf(testOnDeck) != -1)
		{
			if (runningTests.length > 1)
			{
				var i = runningTests.indexOf(testOnDeck);
				runningTests = (i == 0) ? [runningTests[1]] : [runningTests[0]];
				runningTestTimes = (i == 0) ? [runningTestTimes[1]] : [runningTestTimes[0]];
			}
			else
			{
				runningTests.pop();
				runningTestTimes.pop();
			}
			var cancel = document.getElementById(`${testOnDeck}`);
			cancel.disabled = false;
			cancel.innerHTML = testData.data[testOnDeck].name;
			document.getElementById("progressTests").removeChild(cancel);
			document.getElementById("tests").appendChild(cancel);
		}
		testOnDeck = null;
		document.getElementById("runButton").innerHTML = "Run Test";
		document.getElementById("runButton").disabled = true;
		return;
	}

	if (runningTests.length < 2)
	{
		t.innerHTML = testData.data[testOnDeck].name + "<br>" + testData.data[testOnDeck].time + "s";
		document.getElementById("tests").removeChild(t);
		document.getElementById("progressTests").appendChild(t);
		document.getElementById("runButton").disabled = true;
		runningTests.push(testOnDeck);
		runningTestTimes.push(testData.data[testOnDeck].time);
		if (tickFunction == null)
			tickFunction = setTimeout(tickClock, 1100);
	}
	else
	{
		return;
	}
	
	testOnDeck = null;
	t.disabled = false;
}

// Self-calling function that ticks down clock on tests and moves them to 'Completed' when they are done.
function tickClock() {
	tickFunction = null;
	
	for (var i = 0; i < runningTests.length; i++)
	{
		var t = document.getElementById(`${runningTests[i]}`);
		runningTestTimes[i]--;
		if (runningTestTimes[i] < 0)
		{
			
			t.innerHTML = testData.data[runningTests[i]].name;
			if (document.getElementById("runButton").innerHTML = "Cancel Test")
			{
				t.disabled = false;
				document.getElementById("runButton").innerHTML = "Run Test";
				document.getElementById("runButton").disabled = true;
			}			
			document.getElementById("progressTests").removeChild(t);
			document.getElementById("completeTests").appendChild(t);
			completedTests.push(testData.data[runningTests[i]].name);
			if (runningTests.length > 1)
			{
				runningTests = (i == 0) ? [runningTests[1]] : [runningTests[0]];
				runningTestTimes = (i == 0) ? [runningTestTimes[1]] : [runningTestTimes[0]];
				i = -1;
			}
			else
			{
				runningTests.pop();
				runningTestTimes.pop();
			}
		}
		else
		{
			t.innerHTML = testData.data[runningTests[i]].name + "<br>" + runningTestTimes[i] + "s";
			if (tickFunction == null)
				tickFunction = setTimeout(tickClock, 1100);
		}
	}
}

// Called when the user clicks on the 'Write Report' button
// Hides the bench, shows the email composition screen, then populates the selection menus with completed tests
function writeReport() {
	if (document.getElementById("reportButton").innerHTML == "Write Report")
	{
		document.getElementById("reportButton").innerHTML = "Back";
		document.getElementById("bench").className = "dashboard hidden";
		document.getElementById("progressTests").className = "hidden";
		document.getElementById("completeTests").className = "vertical hidden";
		document.getElementById("tests").className = "dashboard vertical hidden";
		document.getElementById("emailBox").className = "dashboard";
		insertNames(document.getElementById("reportText"));
		
		var pathSelect = document.getElementById("pathogenSelect");
		var idSelect = document.getElementById("identificationSelect");
		var fingerSelect = document.getElementById("fingerprintSelect");
		if (pathSelect.length == 0)
		{
			var paths = ["Norovirus", "Camphylobacter jejuni", "Clostridium perfringens", "Salmonella enterica", "Staphylococcus aureus", "Entamoeba histolytica", "Giardia lamblia"];
			for (var i = 0; i < paths.length; i++)
			{
				var toAdd = document.createElement("option");
				toAdd.text = paths[i];
				pathSelect.appendChild(toAdd);
			}
		}
		for (var i = idSelect.length; i < completedTests.length; i++)
		{
			var toAdd1 = document.createElement("option");
			var toAdd2 = document.createElement("option");
			toAdd1.text = completedTests[i];
			toAdd2.text = completedTests[i];
			idSelect.appendChild(toAdd1);
			fingerSelect.appendChild(toAdd2);
		}
	}
	else
	{
		document.getElementById("reportButton").innerHTML = "Write Report";
		document.getElementById("bench").className = "dashboard";
		document.getElementById("progressTests").className = "";
		document.getElementById("completeTests").className = "vertical";
		document.getElementById("tests").className = "dashboard vertical";
		document.getElementById("emailBox").className = "dashboard hidden";
		document.getElementById("directorMail").className = "dashboard hidden";
	}
}

// Called when the user clicks on the 'Send Email' button
// Moves to the 'You've got mail!' transition screen
function sendMail() {
	document.getElementById("emailBox").className = "dashboard hidden";
	document.getElementById("gotMailBox").className = "dashboard";
	document.getElementById("reportButton").disabled = true;
	setTimeout(startMailAnimation, 100);
}

function startMailAnimation() {
	document.getElementById("mailAlert").style = "color: black; transition: color 4s;";
	document.getElementById("mailImg").style = "opacity: 1.0; transition: opacity 4s;";
}

// Called when the user clicks on the 'Open Email' button
// Moves to the email from the director screen, and based on the items they chose in their report,
// determines if the director will be happy with their report or want them to try again
function openEmail() {
	document.getElementById("gotMailBox").className = "dashboard hidden";
	document.getElementById("directorMail").className = "dashboard";
	document.getElementById("mailAlert").style = "";
	document.getElementById("mailImg").style = "";
	
	var emailBody = "Agent *,<br><br>";
	if (document.getElementById("pathogenSelect").value != "Salmonella enterica")
	{
		emailBody += "I looked over the results you sent me and I'm not entirely convinced that " + document.getElementById("pathogenSelect").value;
		emailBody += " is behind the current outbreak. Please review your data, then get back to me.<br><br>";
		document.getElementById("reportButton").disabled = false;
	}
	else if (document.getElementById("identificationSelect").value != "Bismuth Sulfite Agar Culture")
	{
		emailBody += "I think you might be on to something that Salmonella is behind the most recent outbreak, though the data you sent me does not prove that. ";
		emailBody += "Once you have a test showing that Salmonella is our pathogen, let me know.<br><br>";
		document.getElementById("reportButton").disabled = false;
	}
	else if (document.getElementById("fingerprintSelect").value != "S. enterica DNA Fingerprint")
	{
		emailBody += "Good work identifying Salmonella as the pathogen behind this outbreak. I'm convinced it's our culprit. ";
		emailBody += "The second set of test data you sent me, however, does not prove that all the patients were infected from the same source. We need that information to deal with this outbreak properly.<br><br>";
		emailBody += "Perform some more tests, and once you have data showing whether or not this is an actual epidemic, send it my way.<br><br>";
		document.getElementById("reportButton").disabled = false;
	}
	else
	{
		emailBody += "Great work. Your results show that Salmonella is the pathogen behind this outbreak, and the DNA fingerprint data you sent also proves that all the patients contracted it from the same source.<br><br>";
		emailBody += "The clinical side of this investigation is done. Chances are, though, Agent # is still interviewing patients. Go see if you can help them out. The information you've gathered should help dial in their questions.<br><br>";
		emailBody += "Again, great work, agent. Just remember, this isn't over yet!<br><br>";
	}
	
	emailBody += "Best,<br><br>Viola Greene<br><br>Director, Office of Public Health Preparedness and Response<br>Centers for Disease Control";
	document.getElementById("directorMailText").innerHTML = emailBody;
	insertNames(document.getElementById("directorMailText"));
}

// Called when the user clicks the 'Show Help' button
// Displays a text box showing information about how to run tests
function showHelp() {
	document.getElementById("help").className = "";
}

// Called when the user clicks the 'Close' button in the help box
// Hides the help box
function closeHelp() {
	document.getElementById("help").className = "hidden";
}

// Called when the user clicks the 'Show Notepad' button
// Toggles the notepad
function notepad() {
	if (document.getElementById("notesButton").innerHTML == "Show Notepad")
	{
		document.getElementById("notes").className = "";
		document.getElementById("notesButton").innerHTML = "Hide Notepad";
	}
	else
	{
		document.getElementById("notes").className = "hidden";
		document.getElementById("notesButton").innerHTML = "Show Notepad";
	}
}

// Called when the user clicks the 'Show Pathogens' button
// Toggles the pathogens list
function pathogens() {
	if (document.getElementById("pathogensButton").innerHTML == "Show Pathogens")
	{
		document.getElementById("pathogensButton").innerHTML = "Hide Pathogens";
		document.getElementById("pathogenList").className = "pathogenWrapper";
	}
	else
	{
		document.getElementById("pathogensButton").innerHTML = "Show Pathogens";
		document.getElementById("pathogenList").className = "pathogenWrapper hidden";
	}
}

// Creates an alert that displays an SMS message from the CDC director
// Gives the user an update on the outbreak and reminds them to communicate with their partner
function displaySMS() {
	var txt = `New SMS Message\nFrom: Director Greene\n\nI hope your tests are going well, hospitals are reporting more cases.\nDon't forget to communicate with agent ${localStorage.partnerName}.\nYour information about onset times could help focus their interviews.\n\n`;
	var d = new Date();
	var hrs = d.getHours();
	var timeOfDay = "";
	if (hrs > 12)
	{
		hrs -= 12;
		timeOfDay = "pm";
	}
	else
	{
		timeOfDay = "am";
	}
	var mins = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
	txt += `Received ${hrs}:${mins}${timeOfDay}`;
	alert(txt);
}

// Adds the user supplied surnames to the specified element's innerHTML
// Searches the innerHTML, replacing '*' with the user's name and '#' with their partner's name
function insertNames(element) {
	var string = element.innerHTML;
	string = string.replace("*", localStorage.userName);
	string = string.replace("#", localStorage.partnerName);
	element.innerHTML = string;
}