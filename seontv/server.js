function runbackend() {
    needupdate = checkupdate();
    if (needupdate == 1) {
        url = geturl();
        const mainui = document.getElementById("mainui").innerHTML = '<h1>업데이트가 필요합니다</h1><h2>최신 업데이트를 다운로드하려면 "업데이트"를 누르십시오</h2><a href="' + url + '"><button>업데이트</button></a>'
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
        channels = [0];
    }
}