function showMoreBOB() {
	var show = document.getElementById("projects.tester.showmore");
	var more = document.getElementById("projects.tester.showmore.more");
	var testers_button = document.getElementById("projects.tester.button");
	if (show.style.display === "none") {
		show.style.display = "block";
		more.style.display = "none";
		testers_button.innerHTML = "Show Less";
	} else {
		show.style.display = "none";
		more.style.display = "block";
		testers_button.innerHTML = "Show More";
	}
}