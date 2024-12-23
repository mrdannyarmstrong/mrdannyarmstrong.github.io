function runbackend() {
    needupdate = checkupdate();
    if (needupdate == 1) {
        const mainui = document.getElementById("mainui").innerHTML = '<h1>アップデートが必要です</h1><h2>最新のアップデートをダウンロードするには「アップデート」を押してください</h2><a href=""><button>アップデート</button></a>'
    }
    if (needupdate == 0) {
        const mainui = document.getElementById("mainui").innerHTML = '';
        loadchannels();
    }
    startupsfx.play();
}

function checkupdate() {
    needupdate = 0;
    return needupdate;
}
function loadchannels() {
    let channeldb = [
        ["https://tv247.us/watch/tnt-us-free-stream/", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/tnt.svg"],
        ["https://tv247.us/watch/tbs-us-free-stream/", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/tbs.svg"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5cb0cae7a461406ffe3f5213/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a7819-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=8a4a0712-cb24-4d05-b429-1b98c1f73f74s", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/paramount.svg"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/645e7828e1979c00087b75b4/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a02e5-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=6ee42393-c7a0-4d1d-82c7-0121c35ec03e", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/moviesphere.svg"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5812b7d3249444e05d09cc49/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c26a781-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=6903cfae-183e-4d3b-a482-b7acf38ce356", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/anime.svg"],
        ["https://cdn.herringnetwork.com/80A4DFF/awee_nva/AWE_Encore.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/awe.svg"],
        ["https://linear-460.frequency.stream/dist/vix/460/hls/master/playlist.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/newsy.svg"],
        ["https://turnerlive.warnermediacdn.com/hls/live/586496/cnngo/hln/VIDEO_0_3564000.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/nhkworld.svg"],
        ["https://tv247.us/watch/cartoon-network-us-free-stream/", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/adultswim.svg"],
        ["https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/bobross.svg"],
        ["https://nhk4.mov3.co/hls/nhk.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/nhkg.svg"],
        ["https://nhkwlive-ojp.akamaized.net/hls/live/2003459/nhkwlive-ojp-en/index.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/nhke.svg"],
        ["https://ntv4.mov3.co/hls/ntv.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/ntv.svg"],
        ["https://ok.ru/videoembed/7597016096385", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/tvasahi.svg"],
        ["https://tbs5.mov3.co/hls/tbs.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/tbsjp.svg"],
        ["https://ok.ru/videoembed/7858423078516", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/tvtokyo.svg"],
        ["https://fujitv4.mov3.co/hls/fujitv.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/fujitv.svg"],
        ["https://ok.ru/videoembed/6960395525879", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/tokyomx.svg"],
        ["NULL", "NULL"],
        ["NULL", "NULL"]
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