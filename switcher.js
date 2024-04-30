function urlchk() {
	let cururl = window.location.toString();
	if (cururl.includes("#home")) {
		gohome() 
	}
	if (cururl.includes("#code")) {
		gocode() 
	}
	if (cururl.includes("#music")) {
		gomusic() 
	}
	if (cururl.includes("#about")) {
		goabout() 
	}
	if (cururl.includes("#contact")) {
		gocontact() 
	}
}

function gohome() {
	home.style.display = "block";
	code.style.display = "none";
	music.style.display = "none";
	about.style.display = "none";
	contact.style.display = "none";
	window.location = "#home";
	mobnav.style.display = "none";
}

function gocode() {
	home.style.display = "none";
	code.style.display = "block";
	music.style.display = "none";
	about.style.display = "none";
	contact.style.display = "none";
	window.location = "#code";
	mobnav.style.display = "none";
}

function gomusic() {
	home.style.display = "none";
	code.style.display = "none";
	music.style.display = "block";
	about.style.display = "none";
	contact.style.display = "none";
	window.location = "#music";
	mobnav.style.display = "none";
}

function goabout() {
	home.style.display = "none";
	code.style.display = "none";
	music.style.display = "none";
	about.style.display = "block";
	contact.style.display = "none";
	window.location = "#about";
	mobnav.style.display = "none";
}

function gocontact() {
	home.style.display = "none";
	code.style.display = "none";
	music.style.display = "none";
	about.style.display = "none";
	contact.style.display = "block";
	window.location = "#contact";
	mobnav.style.display = "none";
}