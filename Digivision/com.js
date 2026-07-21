function maxsize(bandeira) {
    if (bandeira == 1) {
        wnum = window.innerWidth;
        hnum = window.innerHeight;
        video.style.width = wnum;
        video.style.height = hnum;
    }
    if (bandeira == 2) {
        wnum = window.innerWidth;
        hnum = window.innerHeight;
        video.style.width = wnum;
        video.style.height = hnum;
        video.style.marginTop = "-21px";
    }
}

function getcurpath() {
    let fullurl = window.location.toString();
    urlbox = fullurl.split("#");
    let cururl = urlbox[1];
    return cururl;
}