function runbackend() {
    needupdate = checkupdate();
    if (needupdate == 1) {
        url = geturl();
        const topbar = document.getElementById("topbar").style.display = "none";
        const mainui = document.getElementById("mainui").innerHTML = '<h1>An update is required</h1><h2>Press update to download the newest version</h2><a href="' + url + '"><button>Update</button></a>'
    }
    if (needupdate == 0) {
        const mainui = document.getElementById("mainui").innerHTML = '';
        channels = [];
        channels = getchannels();
        for (var i = 0; i < channels.length; i++) {  
            if (channels[i][0] == "NULL") {
                const mainui = document.getElementById("mainui").innerHTML += '<div class="channel"  onmouseover="hoverfx()"></div>';
            }
            else {
                const mainui = document.getElementById("mainui").innerHTML += '<div class="channel"  onmouseover="hoverfx()"><a href="'  + channels[i][0] +  '"><img src="'  + channels[i][1] +  '" class="logo"  onmouseover="hoverfx()"></a></div>';
            }
        }
    }
}