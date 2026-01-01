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
function infoboxctr(bandeira) {
    if (bandeira == 1) {
        infobox.style.display = ""
        infoboxtrig.style.display = "none"
    }
    if (bandeira == 2) {
        infobox.style.display = "none"
        infoboxtrig.style.display = ""
    }
}

function dohoversfx() {
    hoversfx.play()
}

function addiframe(url) {
    const container = document.getElementById('addhere');

    let iframeSrc;

    if (url.includes("stvr.sk")) {
        // Correctly build the proxy URL with query parameter
        iframeSrc = "https://stvr.zababyte2k.workers.dev/?url=" + encodeURIComponent(url);
    } else {
        iframeSrc = url;
    }

    container.innerHTML = '';  // Clear existing content

    const iframe = document.createElement('iframe');
    iframe.src = iframeSrc;
    iframe.id = "video";
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;
    iframe.style.width = "100%";
    iframe.style.height = "100%";

    container.appendChild(iframe);
}

function getdb(chvalue) {
    const chdb = getchinfo();
    chnum = ""
    if (chvalue < 10) {
        chnum = "0" + chvalue
    }
    if (chvalue >= 10) {
        chnum = chvalue
    }
    newstr = chnum + " " + chdb[chvalue][0]
    channelname.innerText = newstr
    channeldesc.innerText = chdb[chvalue][1] 
}

function getcurpath() {
    let fullurl = window.location.toString();
    urlbox = fullurl.split("#");
    let cururl = urlbox[1];
    return cururl;
}

function getpos(cururl) {
    pos = 0;
    const channels = getchannels();
    for (let i = 0; i < channels.length; i++) {
     if (channels[i][0].includes(cururl)) {
        pos = i
     }
    }
    return pos;
} 

function setnav(curpos) {
    const channels = getchannels();
    newpos = curpos + 1;
    try {
        goup.href = channels[newpos][0]
    }
    catch {
        goup.href = channels[0][0]
    }
    newpos = curpos - 1;
    try {
        godown.href = channels[newpos][0]
    }
    catch {
        newpos = channels.length - 1
        godown.href = channels[newpos][0]
    }
}

function perf(bandeira) {
    if (bandeira == 1) {
        window.location = goup.href
        window.location.reload()
    }
    if (bandeira == 2) {
        window.location = godown.href
        window.location.reload()
    }
}

function docom() {
    const mainui = document.getElementById("mainui").innerHTML = '';
    channels = [];
    channels = getchannels();
    for (var i = 0; i < channels.length; i++) {  
        if (channels[i][0] == "NULL") {
            const mainui = document.getElementById("mainui").innerHTML += '<div class="channel" onmouseover="dohoversfx()"></div>';
        }
        if (channels[i][0] == "index.html") {
            const mainui = document.getElementById("mainui").innerHTML += '<div style="width: 0; height 0;"></div>';
        }
    else {
            const mainui = document.getElementById("mainui").innerHTML += '<div class="channel"  onmouseover="dohoversfx()"><a href="'  + channels[i][0] +  '"><img src="'  + channels[i][1] +  '" class="logo"></a></div>';
        }
    }
}