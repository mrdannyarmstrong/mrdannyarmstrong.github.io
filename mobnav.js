function showmobnav() {
	mobnavbutt.onclick = function() { hidemobnav() };
	mobnavbutt.style.backgroundColor = "#2D6A4F";
	mobnav.style.display = "block";
}

function hidemobnav() {
	mobnavbutt.onclick = function() { showmobnav() };
	mobnavbutt.style.backgroundColor = "#52B788";
	mobnav.style.display = "none";
}