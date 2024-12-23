function runbackend() {
    needupdate = checkupdate();
    if (needupdate == 1) {
        const mainui = document.getElementById("mainui").innerHTML = '<h1>É necessária uma atualização</h1><h2>Pressione atualizar para descarregar a versão mais recente</h2><a href="https://github.com/mrdannyarmstrong/TV-Fusao/archive/refs/tags/2.0.zip"><button>Atualizar</button></a>'
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
    let channeldb = ["NULL"];
    for (var i = 0; i < channeldb.length; i++) {  
        if (channeldb[i][0] == "NULL") {
            const mainui = document.getElementById("mainui").innerHTML += '<div class="channel"></div>';
        }
        else {
            const mainui = document.getElementById("mainui").innerHTML += '<div class="channel"><a href="'  + channeldb[i][0] +  '"><img src="'  + channeldb[i][1] +  '" class="logo"></a></div>';
        }
    }
}
