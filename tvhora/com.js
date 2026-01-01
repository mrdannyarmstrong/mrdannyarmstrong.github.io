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

function dohoversfx() {
    hoversfx.play()
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