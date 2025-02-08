function gettime() {
    time = document.getElementById("time");
    t = new Date();
    min = '';
    if (t.getMinutes() < 10) {
       min = '0' + t.getMinutes()
    }
    else {
        min = t.getMinutes()
    }
    fulltime = t.getHours() + ':' + min;
    time.innerText = fulltime
}

function holiday() {
	d = new Date();
	day=d.getDay();
	month=d.getMonth() + 1;
	if (month == 5 & day == 10) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(https://backend-mrdannyarmstrong.github.io/tvneu/holiday/bday.jpg)";
		time.style.color="black"
	}
	if (month == 1 & day == 1) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(https://backend-mrdannyarmstrong.github.io/tvneu/holiday/newyear.jpg)";
		time.style.color="black"
	}
	
	if (month == 2 & day == 14) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(https://backend-mrdannyarmstrong.github.io/tvneu/holiday/valentines.jpg)";
		time.style.color="black"
	}
	
	if (month == 3 & day == 17) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(https://backend-mrdannyarmstrong.github.io/tvneu/holiday/stpatricks.jpg)";
		time.style.color="black"
	}
	
	if (month == 4 & day >= 1 & day <= 7) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(https://backend-mrdannyarmstrong.github.io/tvneu/holiday/spring.jpg)";
		time.style.color="black"
	}
	
	if (month == 7 & day == 4) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(https://backend-mrdannyarmstrong.github.io/tvneu/holiday/usaindp.jpg)";
		time.style.color="black"
	}
	
	if (month == 9 & day >= 1 & day <= 7) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(https://backend-mrdannyarmstrong.github.io/tvneu/holiday/spring.jpg)";
		time.style.color="black"
	}
	
	if (month == 10 & day == 31) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(https://backend-mrdannyarmstrong.github.io/tvneu/holiday/halloween.jpg)";
		time.style.color="black"
	}
	
	if (month == 11 & day >= 25 & day <= 29) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(https://backend-mrdannyarmstrong.github.io/tvneu/holiday/thanksgiving.jpg)";
		time.style.color="black"
	}
	
	
	
	if (month == 12 & day == 25) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(https://backend-mrdannyarmstrong.github.io/tvneu/holiday/christmas.jpg)";
		time.style.color="black"
	}
	
	if (month == 12 & day == 30) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(https://backend-mrdannyarmstrong.github.io/tvneu/holiday/newyear.jpg)";
		time.style.color="black"
	}
	
	if (month == 12 & day == 31) {
		switchbutt.style.display="none";
		bg.style.backgroundImage="url(https://backend-mrdannyarmstrong.github.io/tvneu/holiday/newyear.jpg)";
		time.style.color="black"
	}
}