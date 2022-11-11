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

function getdate() {
    date = document.getElementById("date");
    d = new Date();
    let utcday = " "
    if (d.getDay() == 0) {
        utcday = "Sunday";
    }
    if (d.getDay() == 1) {
        utcday = "Monday";
    }
    if (d.getDay() == 2) {
        utcday = "Tuesday";
    }
    if (d.getDay() == 3) {
        utcday = "Wednesday";
    }
    if (d.getDay() == 4) {
        utcday = "Thursday";
    }
    if (d.getDay() == 5) {
        utcday = "Friday";
    }
    if (d.getDay() == 6) {
        utcday = "Saturday";
    }
    if (d.getDay() == 7) {
        utcday = "Sunday";
    }

    let dated = utcday + " " + (d.getMonth() + 1) + "/" + d.getDate() ;
    date.innerText = dated;
}