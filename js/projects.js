function showMoreBOB() {
	var bobshow = document.getElementById("projects_bob_showmore");
	var bobbutton = document.getElementById("projects_bob_button");
	if (bobshow.style.display === "block") {
		bobshow.style.display = "none";
		bobbutton.innerHTML = "Show more";
	} else {
		bobshow.style.display = "block";
		bobbutton.innerHTML = "Show less";
	}
}
function showMoreTools() {
	var showtools = document.getElementById("showmore_tools");
	var toolsbtn = document.getElementById("btnmore_tools");
	if (showtools.style.display === "block") {
		showtools.style.display = "none";
		toolsbtn.innerHTML = "Show more tools";
	} else {
		showtools.style.display = "block";
		toolsbtn.innerHTML = "Show less tools";
	}
}
function showMCDesc() {
	var showdesc_mc = document.getElementById("desc_mc");
	var btndesc_mc = document.getElementById("btndesc_mc");
	if (showdesc_mc.style.display === "block") {
		showdesc_mc.style.display = "none";
		btndesc_mc.innerHTML = "Show";
	} else {
		showdesc_mc.style.display = "block";
		btndesc_mc.innerHTML = "";
	}
}
function showBOBDesc() {
	var showdesc_bob = document.getElementById("desc_bob");
	var btndesc_bob = document.getElementById("btndesc_bob");
	if (showdesc_bob.style.display === "block") {
		showdesc_bob.style.display = "none";
		btndesc_bob.innerHTML = "Show";
	} else {
		showdesc_bob.style.display = "block";
		btndesc_bob.innerHTML = "";
	}
}