function checkupdate() {
    needupdate = 0;
    return needupdate;
}
function geturl() {
    url = ""
    return url
}
function getchannels() {
    let channeldb = [
        ["https://thetvapp.to/tv/tnt-live-stream/", "https://mrdannyarmstrong.github.io/tvhora/v1/banners/tnt.svg"],
        ["https://thetvapp.to/tv/tbs-live-stream/", "https://mrdannyarmstrong.github.io/tvhora/v1/banners/tbs.svg"],
        ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5cb0cae7a461406ffe3f5213/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=6c2a7819-30d3-11ef-9cf5-e9ddff8ff496&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=8a4a0712-cb24-4d05-b429-1b98c1f73f74s", "https://mrdannyarmstrong.github.io/tvhora/v1/banners/paramount.svg"],
        ["https://cdn.herringnetwork.com/80A4DFF/awee_nva/AWE_Encore.m3u8", "https://mrdannyarmstrong.github.io/tvhora/v1/banners/awe.svg"],
        ["http://fl2.moveonjoy.com/NEWS_NATION/index.m3u8", "https://mrdannyarmstrong.github.io/tvhora/v1/banners/thehill.svg"],
        ["https://thetvapp.to/tv/cartoon-network-live-stream/", "https://mrdannyarmstrong.github.io/tvhora/v1/banners/adultswim.svg"],
        ["https://nhkwlive-xjp.akamaized.net/hls/live/2003458/nhkwlive-xjp-en/index_1M.m3u8", "https://mrdannyarmstrong.github.io/tvhora/v1/banners/nhk.svg"],
        ["https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://mrdannyarmstrong.github.io/tvhora/v1/banners/bobross.svg"],
    ];
    return channeldb;
}