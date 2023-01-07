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
}