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
		document.getElementById("runButton").disabled = false;
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
function runTest() {
	var t = document.getElementById(`${testOnDeck}`);
	if (testData.data[testOnDeck].time != 0)
	{
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
	}
	else
	{
		document.getElementById("tests").removeChild(t);
		document.getElementById("completeTests").appendChild(t);
		document.getElementById("runButton").disabled = true;
		completedTests.push(testData.data[testOnDeck].name);
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