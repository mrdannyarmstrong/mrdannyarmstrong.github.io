function gettime() {
    time = document.getElementById("time");
    t = new Date();
	sec = '';
    min = '';
    hours = '';
    hourinit = t.getUTCHours() + 8;
    

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
       min = '0' + t.getMinutes();
    }
    else {
        min = t.getMinutes();
    }
	if (t.getSeconds() < 10) {
       sec = '0' + t.getSeconds();
    }
    else {
        sec = t.getSeconds();
    }
    fulltime = hours + ':' + min + ':' + sec;
    time.innerText = fulltime
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
    year = d.getFullYear();
    year -= 2020;

    hourchk = d.getUTCHours();
    if (hourchk == 14 == true) {
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

    if (month == 2 && initday == 30 && year == 4 || month == 2 && initday == 30 && year == 8) {
        monthinit += 1;
        initday = 1;
    }

    if (month == 2 && initday == 29 && year != 4 || month == 2 && initday == 29 && year != 8) {
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
        utcday = "七";
    }
    if (dotw == 1) {
        utcday = "一";
    }
    if (dotw == 2) {
        utcday = "二";
    }
    if (dotw == 3) {
        utcday = "三";
    }
    if (dotw == 4) {
        utcday = "四";
    }
    if (dotw == 5) {
        utcday = "五";
    }
    if (dotw == 6) {
        utcday = "六";
    }
    if (dotw == 7) {
        utcday = "一";
    }
    if (dotw == 8) {
        dotw = 0;
        utcday = "一";
    }

    let dated = year + 2020 + "年" + month + "月" + day + "日 (" + utcday + ")"
    date.innerText = dated;
}