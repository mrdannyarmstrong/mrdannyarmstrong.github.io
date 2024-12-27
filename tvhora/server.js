function runbackend() {
    needupdate = checkupdate();
    if (needupdate == 1) {
        url = geturl();
        const mainui = document.getElementById("mainui").innerHTML = '<h1>アップデートが必要です</h1><h2>最新のアップデートをダウンロードするには「アップデート」を押してください</h2><a href="' + url + '"><button>アップデート</button></a>'
    }
    if (needupdate == 0) {
        const mainui = document.getElementById("mainui").innerHTML = '';
        channels = [];
        channels = getchannels();
        for (var i = 0; i < channels.length; i++) {  
            if (channels[i][0] == "NULL") {
                const mainui = document.getElementById("mainui").innerHTML += '<div class="channel" onmouseover="channeru()"></div>';
            }
            else {
                const mainui = document.getElementById("mainui").innerHTML += '<div class="channel" onmouseover="channeru()"><a href="'  + channels[i][0] +  '"><img src="'  + channels[i][1] +  '" class="logo" onmouseover="channeru()"></a></div>';
            }
        }
    }
}