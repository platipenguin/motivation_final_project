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