function showMoreBOB() {
	var show = document.getElementById("projects_bob_showmore");
	var testers_button = document.getElementById("projects_bob_button");
	if (show.style.display === "block") {
		show.style.display = "none";
		testers_button.innerHTML = "Show more";
	} else {
		show.style.display = "block";
		testers_button.innerHTML = "Show less";
	}
}