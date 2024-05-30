function urlchk() {
	let cururl = window.location.toString();
	if (cururl.includes("#lar")) {
		gohome() 
	}
	if (cururl.includes("#codigo")) {
		gocode() 
	}
	if (cururl.includes("#musica")) {
		gomusic() 
	}
	if (cururl.includes("#sobre")) {
		goabout() 
	}
	if (cururl.includes("#contacto")) {
		gocontact() 
	}
}

function gohome() {
	home.style.display = "block";
	code.style.display = "none";
	music.style.display = "none";
	about.style.display = "none";
	contact.style.display = "none";
	window.location = "#lar";
	mobnav.style.display = "none";
}

function gocode() {
	home.style.display = "none";
	code.style.display = "block";
	music.style.display = "none";
	about.style.display = "none";
	contact.style.display = "none";
	window.location = "#codigo";
	mobnav.style.display = "none";
}

function gomusic() {
	home.style.display = "none";
	code.style.display = "none";
	music.style.display = "block";
	about.style.display = "none";
	contact.style.display = "none";
	window.location = "#musica";
	mobnav.style.display = "none";
}

function goabout() {
	home.style.display = "none";
	code.style.display = "none";
	music.style.display = "none";
	about.style.display = "block";
	contact.style.display = "none";
	window.location = "#sobre";
	mobnav.style.display = "none";
}

function gocontact() {
	home.style.display = "none";
	code.style.display = "none";
	music.style.display = "none";
	about.style.display = "none";
	contact.style.display = "block";
	window.location = "#contacto";
	mobnav.style.display = "none";
}