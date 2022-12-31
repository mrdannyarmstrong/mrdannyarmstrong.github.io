function gettime() {
    time = document.getElementById("time");
    t = new Date();
    min = '';
    if (t.getMinutes() < 10) {
       min = '0' + t.UTCgetMinutes()
    }
    else {
        min = t.getUTCMinutes()
    }
    fulltime = t.getUTCHours() + ':' + min;
    time.innerText = fulltime
}