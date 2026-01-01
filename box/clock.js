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

function getsuperclock() {
    const now = new Date;
    hour = now.getHours();
    min = now.getMinutes();
    sec = now.getSeconds();
    hourstr = "";
    minstr = "";
    secstr = ""
    clockstr = "";
    if (hour < 10) {
        hourstr = "0" + hour;
    }
    if (hour > 10) {
        hourstr = hour;
    }
    if (min < 10) {
        minstr = "0" + min;
    }
    if (min > 10) {
        minstr = min;
    }
    if (sec < 10) {
        secstr = "0" + sec;
    }
    if (sec > 10) {
        secstr = sec;
    }
    clockstr = hourstr + ":" + minstr + ":" + secstr
    clock.textContent = clockstr;
}