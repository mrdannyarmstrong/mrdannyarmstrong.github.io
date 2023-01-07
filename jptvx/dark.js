function dark() {
	prefs.play();
	window.location = "#dark"
	switchbutt.style.backgroundImage = "url(switch2.svg)"
	document.body.style.backgroundColor = "#2C2D2C";
	time.style.color = "#FFFFFF"
	switchbutt.onclick = function() { light() };
}

function darkx() {
	window.location = "#dark"
	switchbutt.style.backgroundImage = "url(switch2.svg)"
	document.body.style.backgroundColor = "#2C2D2C";
	time.style.color = "#FFFFFF"
	switchbutt.onclick = function() { light() };
}

function light() {
	prefs.play();
	window.location = "#"
	switchbutt.style.backgroundImage = "url(switch.svg)"
	document.body.style.backgroundColor = "#e8ebe9";
	time.style.color = "#2b2927"
	switchbutt.onclick = function() { dark() };
}

function darkchk() {
	const cururl = window.location.toString();
	if (cururl.includes("#dark")) {
		darkx();
	}
}