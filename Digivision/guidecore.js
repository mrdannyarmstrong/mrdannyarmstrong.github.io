function bootguide() {
    for (i = 0; i < channels.length; i++) {
        if (channels[i][0] == "index.html") {
            console.log("NULL Channel skipped")
        } 
        if (channels[i][0] == "index4.html") {
            console.log("NULL Channel skipped")
        } 
        else {
            guidebody.innerHTML += '<a href="' + channels[i][0] + '"><div class="chanbox"><img src="' + channels[i][1] + '"></a></div>'
        }
    }
}


function getclock() {
    const now = new Date;
    hour = now.getHours();
    min = now.getMinutes();
    hourstr = "";
    minstr = "";
    clockstr = "";
    if (hour < 10) {
        hourstr = "0" + hour;
    }
    if (hour > 10) {
        hourstr = hour;
    }
    if (hour == 10) {
        hourstr = hour;
    }
    if (min < 10) {
        minstr = "0" + min;
    }
    if (min == 10) {
        minstr = min;
    }
    if (min > 10) {
        minstr = min;
    }
    clockstr = hourstr + ":" + minstr
    clock.textContent = clockstr;
}