function runbackend() {
    needupdate = checkupdate();
    if (needupdate == 1) {
        const mainui = document.getElementById("mainui").innerHTML = '<h1>An update is required</h1><h2>Press update to download the newest version</h2><a href="https://github.com/mrdannyarmstrong/TV-Lago/archive/refs/tags/3.0.zip"><button>Update</button></a>'
    }
    if (needupdate == 0) {
        const mainui = document.getElementById("mainui").innerHTML = '';
        loadchannels();
    }
}

function checkupdate() {
    needupdate = 1;
    return needupdate;
}
function loadchannels() {
    let channeldb = [
    ];
    for (var i = 0; i < channeldb.length; i++) {  
        if (channeldb[i][0] == "NULL") {
            const mainui = document.getElementById("mainui").innerHTML += '<div class="channel" onmouseover="channeru()"></div>';
        }
        else {
            const mainui = document.getElementById("mainui").innerHTML += '<div class="channel" onmouseover="channeru()"><a href="'  + channeldb[i][0] +  '"><img src="'  + channeldb[i][1] +  '" class="logo" onmouseover="channeru()"></a></div>';
        }
    }
}
