function gettime() {
    t = new Date();
    min = '';
    if (t.getMinutes() < 10) {
       min = '0' + t.getMinutes()
    }
    else {
        min = t.getMinutes()
    }
    fulltime = t.getHours() + ':' + min;
    document.getElementById("time").innerText = fulltime
}

function gettime2() {
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