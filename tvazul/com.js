function backcom() {
    channels = [];
    try {
            channels = getchannels();
            const mainui = document.getElementById("mainui").innerHTML = '';
            document.getElementById("mainui").innerHTML += '<tr><td class="chbox">1</td><td class="logobox"><a href="#"><img src="nochan.png" style="height: 48px;" onmouseover="dohoversfx()" border="0"></a></td></tr>';
            for (var i = 0; i < channels.length; i++) {  
                if (channels[i][0] == "NULL") {
                    const mainui = document.getElementById("mainui").innerHTML += '<tr><td class="chbox">' + i + '</td><td class="logobox"><a href="#"><img src="nochan.png" style="height: 48px;" onmouseover="dohoversfx()" border="0"></a></td></tr>';
                }
                if (channels[i][0] == "index.html") {
                    const mainui = document.getElementById("mainui").innerHTML += '<div style="width: 0; height 0; display: none;"></div>';
                }
            else {
                    const mainui = document.getElementById("mainui").innerHTML += '<tr><td class="chbox">' + i + '</td><td class="logobox"><a href="' + channels[i][0] + '"><img src="' + channels[i][1] + '" style="height: 48px;" onmouseover="dohoversfx()" border="0"></a></td></tr>';
                }
            }
        }
    catch {
        alert("A communcation error has occured. Please make sure you have a stable internet connection")
        mainui = document.getElementById("mainui").innerHTML += '<tr><td class="chbox">1</td><td class="logobox"><a href="#"><img src="nochan.png" style="height: 48px;" onmouseover="dohoversfx()" border="0"></a></td></tr>';
        mainui = document.getElementById("mainui").innerHTML += '<tr><td class="chbox">2</td><td class="logobox"><a href="#"><img src="nochan.png" style="height: 48px;" onmouseover="dohoversfx()" border="0"></a></td></tr>';
        mainui = document.getElementById("mainui").innerHTML += '<tr><td class="chbox">3</td><td class="logobox"><a href="index3.html"><img src="nochan.png" style="height: 48px;" onmouseover="dohoversfx()" border="0"></a></td></tr>';
        mainui = document.getElementById("mainui").innerHTML += '<tr><td class="chbox">4</td><td class="logobox"><a href="index3.html"><img src="nochan.png" style="height: 48px;" onmouseover="dohoversfx()" border="0"></a></td></tr>';
        mainui = document.getElementById("mainui").innerHTML += '<tr><td class="chbox">5</td><td class="logobox"><a href="index3.html"><img src="nochan.png" style="height: 48px;" onmouseover="dohoversfx()" border="0"></a></td></tr>';
        mainui = document.getElementById("mainui").innerHTML += '<tr><td class="chbox">6</td><td class="logobox"><a href="index3.html"><img src="nochan.png" style="height: 48px;" onmouseover="dohoversfx()" border="0"></a></td></tr>';
        mainui = document.getElementById("mainui").innerHTML += '<tr><td class="chbox">7</td><td class="logobox"><a href="index3.html"><img src="nochan.png" style="height: 48px;" onmouseover="dohoversfx()" border="0"></a></td></tr>';
        mainui = document.getElementById("mainui").innerHTML += '<tr><td class="chbox">8</td><td class="logobox"><a href="index3.html"><img src="nochan.png" style="height: 48px;" onmouseover="dohoversfx()" border="0"></a></td></tr>';
        mainui = document.getElementById("mainui").innerHTML += '<tr><td class="chbox">9</td><td class="logobox"><a href="index3.html"><img src="nochan.png" style="height: 48px;" onmouseover="dohoversfx()" border="0"></a></td></tr>';
        mainui = document.getElementById("mainui").innerHTML += '<tr><td class="chbox">10</td><td class="logobox"><a href="index3.html"><img src="nochan.png" style="height: 48px;" onmouseover="dohoversfx()" border="0"></a></td></tr>';
    }
}

function dohoversfx() {
    hoversfx.play();
}

function maxsize() {
    wnum = window.innerWidth;
    hnum = window.innerHeight;
    video.style.width = wnum;
    video.style.height = hnum;
    video.style.marginTop = "-21px";
}

function getcurpath() {
    let fullurl = window.location.toString();
    urlbox = fullurl.split("#");
    let cururl = urlbox[1];
    return cururl;
}