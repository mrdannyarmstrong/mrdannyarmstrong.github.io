function gettime() {
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
    clock.innerText = fulltime
}

function holiday() {
	d = new Date();
	day=d.getDay();
	month=d.getMonth() + 1;
	if (month == 5 & day == 10) {
		bg.style.backgroundImage="url(https://mrdannyarmstrong.github.io/tvlago/v3/holiday/bday.jpg)";
		
	}
	if (month == 1 & day == 1) {
		bg.style.backgroundImage="url(https://mrdannyarmstrong.github.io/tvlago/v3/holiday/newyear.jpg)";
		
	}
	
	if (month == 2 & day == 14) {
		bg.style.backgroundImage="url(https://mrdannyarmstrong.github.io/tvlago/v3/holiday/valentines.jpg)";
		
	}
	
	if (month == 3 & day == 17) {
		bg.style.backgroundImage="url(https://mrdannyarmstrong.github.io/tvlago/v3/holiday/stpatricks.jpg)";
		
	}
	
	if (month == 4 & day >= 1 & day <= 7) {
		bg.style.backgroundImage="url(https://mrdannyarmstrong.github.io/tvlago/v3/holiday/spring.jpg)";
		
	}
	
	if (month == 7 & day == 4) {

		bg.style.backgroundImage="url(https://mrdannyarmstrong.github.io/tvlago/v3/holiday/usaindp.jpg)";
		
	}
	
	if (month == 9 & day >= 1 & day <= 7) {

		bg.style.backgroundImage="url(https://mrdannyarmstrong.github.io/tvlago/v3/holiday/spring.jpg)";
		
	}
	
	if (month == 10 & day == 31) {

		bg.style.backgroundImage="url(https://mrdannyarmstrong.github.io/tvlago/v3/holiday/halloween.jpg)";
		
	}
	
	if (month == 11 & day >= 25 & day <= 29) {

		bg.style.backgroundImage="url(https://mrdannyarmstrong.github.io/tvlago/v3/holiday/thanksgiving.jpg)";
		
	}
	
	
	
	if (month == 12 & day == 25) {

		bg.style.backgroundImage="url(https://mrdannyarmstrong.github.io/tvlago/v3/holiday/christmas.jpg)";
		
	}
	
	if (month == 12 & day == 30) {

		bg.style.backgroundImage="url(https://mrdannyarmstrong.github.io/tvlago/v3/holiday/newyear.jpg)";
		
	}
	
	if (month == 12 & day == 31) {

		bg.style.backgroundImage="url(https://mrdannyarmstrong.github.io/tvlago/v3/holiday/newyear.jpg)";
		
	}
}