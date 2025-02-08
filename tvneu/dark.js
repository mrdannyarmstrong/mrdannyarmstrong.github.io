function darkchk() {
	cururl = window.location.toString();
	if (cururl.includes("#dark")) {
		darkm();
	}
}

function light() {
	selected.play();
	window.location = "#";
	document.body.style.backgroundColor = "#67a1d7"; 
	mainui.style.backgroundColor = "#ebebeb"; 
	topbar.style.backgroundColor = "#ebebeb";
	time.style.color="black";
	switchbutt.style.backgroundImage = "url(switch.svg)";
	switchbutt.onclick = function() { dark(); }
}

function darkm() {
	window.location = "#dark";
	document.body.style.backgroundColor = "#314c65"; 
	mainui.style.backgroundColor = "#333333"; 
	topbar.style.backgroundColor = "#333333";
	switchbutt.style.backgroundImage = "url(switch2.svg)";
	time.style.color="white";
	switchbutt.onclick = function() { light(); }
}

function dark() {
	selected.play();
	window.location = "#dark";
	document.body.style.backgroundColor = "#314c65"; 
	mainui.style.backgroundColor = "#333333"; 
	topbar.style.backgroundColor = "#333333";
	switchbutt.style.backgroundImage = "url(switch2.svg)";
	time.style.color="white";
	switchbutt.onclick = function() { light(); }
}