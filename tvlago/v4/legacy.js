function runbackend() {
    needupdate = checkupdate();
    if (needupdate == 1) {
        const mainui = document.getElementById("mainui").innerHTML = '<h1>An update is required</h1><h2>Press update to download the newest version</h2><a href=""><button>Update</button></a>'
    }
    if (needupdate == 0) {
        const mainui = document.getElementById("mainui").innerHTML = '';
        loadchannels();
    }
}

function checkupdate() {
    needupdate = 0;
    return needupdate;
}
function loadchannels() {
    let channeldb = [
        ["https://tv247.us/watch/tnt-us-free-stream/", "https://mrdannyarmstrong.github.io/tvlago/v3/banners/tnt.svg"],
        ["https://tv247.us/watch/tbs-us-free-stream/", "https://mrdannyarmstrong.github.io/tvlago/v3/banners/tbs.svg"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5cb0cae7a461406ffe3f5213/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a7819-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=8a4a0712-cb24-4d05-b429-1b98c1f73f74s", "https://mrdannyarmstrong.github.io/tvlago/v3/banners/paramount.svg"],
        ["https://cdn.herringnetwork.com/80A4DFF/awee_nva/AWE_Encore.m3u8", "https://mrdannyarmstrong.github.io/tvlago/v3/banners/awe.svg"],
        ["https://tv247.us/watch/cnn-us-free-stream/", "https://mrdannyarmstrong.github.io/tvlago/v3/banners/cnn.svg"],
        ["https://tv247.us/watch/cartoon-network-us-free-stream/", "https://mrdannyarmstrong.github.io/tvlago/v3/banners/adultswim.svg"],
        ["https://cdn.nhkworld.jp/www11/nhkworld-tv/bmcc-live/pt/playlist.m3u8", "https://mrdannyarmstrong.github.io/tvlago/v3/banners/nhk.svg"],
        ["https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://mrdannyarmstrong.github.io/tvlago/v3/banners/bobross.svg"],
        ["https://streaming-live.rtp.pt/liverepeater/rtp1HD.smil/playlist.m3u8", "https://mrdannyarmstrong.github.io/tvlago/v3/banners/rtp1.svg"],
        ["https://streaming-live.rtp.pt/liverepeater/rtp2HD.smil/playlist.m3u8", "https://mrdannyarmstrong.github.io/tvlago/v3/banners/rtp2.svg"],
        ["https://streaming-live.rtp.pt/livetvhlsDVR/rtpnHDdvr.smil/playlist.m3u8", "https://mrdannyarmstrong.github.io/tvlago/v3/banners/rtp3.svg"],
        ["https://d1zx6l1dn8vaj5.cloudfront.net/out/v1/b89cc37caa6d418eb423cf092a2ef970/index.m3u8", "https://mrdannyarmstrong.github.io/tvlago/v3/banners/sic.svg"],
        ["https://cdn.jmvstream.com/w/LVW-10842/LVW10842_513N26MDBL/chunklist.m3u8", "https://mrdannyarmstrong.github.io/tvlago/v3/banners/recordtv.svg"],
        ["https://cdn.jmvstream.com/w/LVW-10801/LVW10801_Xvg4R0u57n/playlist.m3u8", "https://mrdannyarmstrong.github.io/tvlago/v3/banners/sbt.svg"],
        ["https://tbc.zoeweb.tv/tbc/tbc/playlist.m3u8", "https://mrdannyarmstrong.github.io/tvlago/v3/banners/tvculture.svg"],
        ["https://59f1cbe63db89.streamlock.net:1443/tvpampa/tvpampa/playlist.m3u8", "https://mrdannyarmstrong.github.io/tvlago/v3/banners/redetv.svg"]
    ];
    for (var i = 0; i < channeldb.length; i++) {  
        if (channeldb[i][0] == "NULL") {
            const mainui = document.getElementById("mainui").innerHTML += '<div class="channel"></div>';
        }
        else {
            const mainui = document.getElementById("mainui").innerHTML += '<div class="channel"><a href="'  + channeldb[i][0] +  '"><img src="'  + channeldb[i][1] +  '" class="logo" onmouseover="channeru()"></a></div>';
        }
    }
}
