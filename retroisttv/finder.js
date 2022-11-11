function findchannel() {
	sentry = findtext.value;
	sentry = sentry.toLowerCase();
	if (sentry == "channel 1") {
		window.location = "https://dai.google.com/linear/hls/event/wnQPvAN9QBODw9hP-H0rZA/master.m3u8"
	}
	if (sentry == "classic rerun tv") {
		window.location = "https://dai.google.com/linear/hls/event/wnQPvAN9QBODw9hP-H0rZA/master.m3u8"
	}
	if (sentry == "channel 2") {
		window.location = "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS"
	}
	if (sentry == "bob ross") {
		window.location = "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS"
	}
	if (sentry == "channel 3") {
		window.location = "http://v-ny.theus6tv.duckdns.org/hls/4.2/playlist.m3u8"
	}
	if (sentry == "cozi tv") {
		window.location = "http://v-ny.theus6tv.duckdns.org/hls/4.2/playlist.m3u8"
	}
	if (sentry == "channel 4") {
		window.location = "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/562ea53fa9060c5a7d463e74/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=562ea53fa9060c5a7d463e74&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=548&terminate=false&userId="
	}
	if (sentry == "classic toons") {
		window.location = "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/562ea53fa9060c5a7d463e74/master.m3u8?advertisingId=&appName=web&appStoreUrl=&appVersion=DNT&app_name=&architecture=&buildVersion=&deviceDNT=0&deviceId=562ea53fa9060c5a7d463e74&deviceLat=&deviceLon=&deviceMake=web&deviceModel=web&deviceType=web&deviceVersion=DNT&includeExtendedEvents=false&marketingRegion=US&serverSideAds=false&sid=548&terminate=false&userId="
	}
	if (sentry == "channel 5") {
		window.location = "https://www.youtube.com/embed/eJsUihycQR8"
	}
	if (sentry == "50s") {
		window.location = "https://www.youtube.com/embed/eJsUihycQR8"
	}
	if (sentry == "channel 6") {
		window.location = "https://www.youtube.com/embed/fr2DI-UzxI8"
	}
	if (sentry == "60s") {
		window.location = "https://www.youtube.com/embed/fr2DI-UzxI8"
	}
	if (sentry == "channel 7") {
		window.location = "https://www.youtube.com/embed/wsySCQ85Lfk"
	}
	if (sentry == "70s") {
		window.location = "https://www.youtube.com/embed/wsySCQ85Lfk"
	}
	if (sentry == "channel 8") {
		window.location = "https://loop-80s-2.roku.wurl.com/manifest/playlist.m3u8"
	}
	if (sentry == "80s") {
		window.location = "http://v-ny.theus6tv.duckdns.org/hls/4.2/playlist.m3u8"
	}
	else {
		alert("Channel not found please make sure the name is typed correctly and try again");
	}
}