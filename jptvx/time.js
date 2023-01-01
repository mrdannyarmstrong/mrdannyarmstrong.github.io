function gettime() {
    time = document.getElementById("time");
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
    time.innerText = fulltime
	timenew.innerText = fulltime
}

function getdate() {
    date = document.getElementById("date");
    d = new Date();
    day = '';
    month = d.getMonth();
    month += 1;
    dotw = d.getUTCDay();
    initday = d.getUTCDate();
    let utcday = " "
    endyearnum = d.getFullYear();
    endyearnum -= 2020;

    hourchk = d.getUTCHours();
    if (hourchk == 15 == true) {
        initday += 1;
        dotw += 1;
    }
    if (hourchk > 15 == true) {
        initday += 1;
        dotw += 1;
    }

    if (month == 1 && initday == 32 || month == 3 && initday == 32 || month == 5 && initday == 32 || month == 7 && initday == 32 || month == 9 && initday == 31 || month == 11 && initday == 31) {
        month += 1;
        initday = 1;
    }

    if (month == 4 && initday == 31 || month == 6 && initday == 31 || month == 8 && initday == 32 || month == 10 && initday == 32) {
        month += 1;
        initday = 1;
    }

    if (month == 2 && initday == 30 && endyearnum == 4 || month == 2 && initday == 30 && endyearnum == 8) {
        monthinit += 1;
        initday = 1;
    }

    if (month == 2 && initday == 29 && endyearnum != 4 || month == 2 && initday == 29 && endyearnum != 8) {
        month += 1;
        initday = 1;
    }

    if (month == 12 && initday == 32) {
        month = 1;
        initday = 1;
    }

    if (initday < 10) {
        day = 0 + initday;
    }
    else {
        day = initday;
    }

    

    if (dotw == 0) {
        utcday = "日";
    }
    if (dotw == 1) {
        utcday = "月";
    }
    if (dotw == 2) {
        utcday = "火";
    }
    if (dotw == 3) {
        utcday = "水";
    }
    if (dotw == 4) {
        utcday = "本";
    }
    if (dotw == 5) {
        utcday = "金";
    }
    if (dotw == 6) {
        utcday = "土";
    }
    if (dotw == 7) {
        utcday = "日";
    }
    if (dotw == 8) {
        dotw = 0;
        utcday = "日";
    }

    let dated = month + "月" + day + "日 (" + utcday + ")"
    date.innerText = dated;
}