function lightchk() {
	cururl = window.location.toString();
	if (cururl.includes("#light")) {
		lightm();
	}
}

function light() {
	selected.play();
	window.location = "#light";
	 document.body.style.backgroundColor = "white"; 
	time.style.color="black";
	switchbutt.style.backgroundImage = "url(switch2.svg)";
	switchbutt.onclick = function() { dark(); }
}

function lightm() {
	window.location = "#light";
	 document.body.style.backgroundColor = "white"; 
	time.style.color="black";
	switchbutt.style.backgroundImage = "url(switch2.svg)";
	switchbutt.onclick = function() { dark(); }
}

function dark() {
	selected.play();
	window.location = "#";
	 document.body.style.backgroundColor = "#202225"; 
	switchbutt.style.backgroundImage = "url(switch.svg)";
	time.style.color="white";
	switchbutt.onclick = function() { light(); }
}