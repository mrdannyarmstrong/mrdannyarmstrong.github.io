﻿function gettimeus() {
    ustime = document.getElementById("ustime");
    t = new Date();
    min = '';
    if (t.getMinutes() < 10) {
       min = '0' + t.getMinutes()
    }
    else {
        min = t.getMinutes()
    }
    fulltime = t.getHours() + ':' + min;
    ustime.innerText = fulltime
}

function gettimejp() {
    jptime = document.getElementById("jptime");
    t = new Date();
    min = '';
    hours = '';
    hourinit = t.getUTCHours() + 9;
    

    if (hourinit > 23) {
        hourinit -= 24;
    }
    if (hourinit < 10) {
        hours = '0' + hourinit
    }
    else {
        hours = hourinit;
    }
    if (t.getMinutes() < 10) {
       min = '0' + t.getMinutes()
    }
    else {
        min = t.getMinutes()
    }
    fulltime = hours + ':' + min;
    jptime.innerText = fulltime
}

function showustime() {
	ustime = document.getElementById("ustime");
	jptime = document.getElementById("jptime");
	ustime.style.display = "inline-block";
	jptime.style.display = "none";
	selected.play();
}

function showjptime() {
	ustime = document.getElementById("ustime");
	jptime = document.getElementById("jptime");
	ustime.style.display = "none";
	jptime.style.display = "inline-block";
	selected.play();
}

function holiday() {
	d = new Date();
	day=d.getDate();
	month=d.getMonth() + 1;
	dow=d.getDay();
	if (month == 5 & day == 10) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(bg/bday.jpg)";
		time.style.color="black"
	}
	if (month == 1 & day == 1) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(bg/newyear.jpg)";
		time.style.color="black"
	}
	
	if (month == 2 & day == 14) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(bg/valentines.jpg)";
		time.style.color="black"
	}
	
	if (month == 3 & day == 17) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(bg/stpatricks.jpg)";
		time.style.color="black"
	}
	
	if (month == 4 & day >= 1 & day <= 7) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(bg/spring.jpg)";
		time.style.color="black"
	}
	
	if (month == 7 & day == 4) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(bg/usaindp.jpg)";
		time.style.color="black"
	}
	
	if (month == 9 & day >= 1 & day <= 7) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(bg/spring.jpg)";
		time.style.color="black"
	}
	
	if (month == 10 & day == 31) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(bg/halloween.jpg)";
		time.style.color="black"
	}
	
	if (month == 11 & day >= 20 & day <= 29 & dow == 4) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(bg/thanksgiving.jpg)";
		time.style.color="black"
	}
	
	if (month == 12 & day == 24) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(bg/christmas.jpg)";
		time.style.color="black"
	}
	
	if (month == 12 & day == 25) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(bg/christmas.jpg)";
		time.style.color="black"
	}
	
	if (month == 12 & day == 30) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(bg/newyear.jpg)";
		time.style.color="black"
	}
	
	if (month == 12 & day == 31) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(bg/newyear.jpg)";
		time.style.color="black"
	}
}