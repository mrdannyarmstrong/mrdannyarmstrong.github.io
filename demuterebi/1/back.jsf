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
        ["https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/tnt.svg"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023172/tbseast/slate/VIDEO_0_3564000.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/tbs.svg"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5cb0cae7a461406ffe3f5213/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a7819-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=8a4a0712-cb24-4d05-b429-1b98c1f73f74s", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/paramount.svg"],
        ["https://cdn.herringnetwork.com/80A4DFF/awee_nva/AWE_Encore.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/awe.svg"],
        ["https://linear-460.frequency.stream/dist/vix/460/hls/master/playlist.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/newsy.svg"],
        ["https://turnerlive.warnermediacdn.com/hls/live/586496/cnngo/hln/VIDEO_0_3564000.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/hln.svg"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023183/aseast/noslate/VIDEO_1_5128000.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/adultswim.svg"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023186/tcmeast/noslate/VIDEO_1_5128000.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/tcm.svg"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023176/trueast/slate/VIDEO_0_3564000.m3u8", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/trutv.svg"],
        ["https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/bobross.svg"],
        ["http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gd01", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/nhkg.svg"],
        ["http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gd02", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/nhke.svg"],
        ["http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gd03", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/ntv.svg"],
        ["http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gd06", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/tvasahi.svg"],
        ["http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gd04", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/tbsjp.svg"],
        ["http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gd07", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/tvtokyo.svg"],
        ["http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gd05", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/fujitv.svg"],
        ["http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=gd08", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/tokyomx.svg"],
        ["http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs01", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/nhkbs.svg"],
        ["http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs11", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/nhkbsp.svg"],
        ["http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs03", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/bsntv.svg"],
        ["http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs04", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/bsasahi.svg"],
        ["http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs05", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/bstbs.svg"],
        ["http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs06", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/bstvtokyo.svg"],
        ["http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs07", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/bsfujitv.svg"],
        ["http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs26", "https://mrdannyarmstrong.github.io/demuterebi/1/banners/fujitvnext.svg"],
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
