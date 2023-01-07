function switchchan(channum) {
	if (channum == 2) {
		tvbox.innerHTML = '';
		tvbox.innerHTML += '<iframe src="https://www.youtube.com/embed/TCnaIE_SAtM" style="width: 100%; height: 100%;"></iframe>';
		window.location = "#chan2"
	}
	if (channum == 5) {
		tvbox.innerHTML = '';
		tvbox.innerHTML += '<iframe src="https://www.youtube.com/embed/4Uc00FPs27M" style="width: 100%; height: 100%;"></iframe>';
		window.location = "#chan5"
	}
	if (channum == 8) {
		tvbox.innerHTML = '';
		tvbox.innerHTML += '<iframe src="https://www.youtube.com/embed/dZp87qnWelE" style="width: 100%; height: 100%;"></iframe>';
		window.location = "#chan8"
	}
	if (channum == 9) {
		tvbox.innerHTML = '';
		tvbox.innerHTML += '<iframe src="https://embed.4gtv.tv/ftv/FTV.html?player_autoplay=off&player_mute=off" style="width: 100%; height: 100%;"></iframe>';
		window.location = "#chan9"
	}
	if (channum == 10) {
		tvbox.innerHTML = '';
		tvbox.innerHTML += '<iframe src="https://embed.4gtv.tv/ftv/FMTV.html?player_autoplay=off&player_mute=off" style="width: 100%; height: 100%;"></iframe>';
		window.location = "#chan1"
	}
	if (channum == 11) {
		tvbox.innerHTML = '';
		tvbox.innerHTML += '<iframe src="https://embed.4gtv.tv/ftv/FTVNews.html?player_autoplay=off&player_mute=off" style="width: 100%; height: 100%;"></iframe>';
		window.location = "#chan11"
	}
	if (channum == 12) {
		tvbox.innerHTML = '';
		tvbox.innerHTML += '<iframe src="https://embed.4gtv.tv/ftv/FTTV.html?player_autoplay=off&player_mute=off" style="width: 100%; height: 100%;"></iframe>';
		window.location = "#chan12"
	}
	if (channum == 14) {
		tvbox.innerHTML = '';
		tvbox.innerHTML += '<iframe src="https://player.streamingtvguides.com/?src=http%3A%2F%2Fstreamipcf.akamaized.net%2Flive%2F_definst_%2Fsmil%3Aliveabr.smil%2Fplaylist.m3u8&demoConfig=eyJlbmFibGVTdHJlYW1pbmciOnRydWUsImF1dG9SZWNvdmVyRXJyb3IiOnRydWUsImVuYWJsZVdvcmtlciI6dHJ1ZSwiZHVtcGZNUDQiOmZhbHNlLCJsZXZlbENhcHBpbmciOi0xLCJsaW1pdE1ldHJpY3MiOi0xLCJ3aWRldmluZUxpY2Vuc2VVcmwiOiIifQ==" style="width: 100%; height: 100%;"></iframe>';
		window.location = "#chan14"
	}
	if (channum == 16) {
		tvbox.innerHTML = '';
		tvbox.innerHTML += '<iframe src="https://www.youtube.com/embed/xL0ch83RAK8" style="width: 100%; height: 100%;"></iframe>';
		window.location = "#chan16"
	}
	if (channum == 19) {
		tvbox.innerHTML = '';
		tvbox.innerHTML += '<iframe src="https://www.youtube.com/embed/wM0g8EoUZ_E" style="width: 100%; height: 100%;"></iframe>';
		window.location = "#chan19"
	}
	if (channum == 22) {
		tvbox.innerHTML = '';
		tvbox.innerHTML += '<iframe src="http://player.streamingtvguides.com/?src=https%3A%2F%2Flylive-videorent.cdn.hinet.net%2Fout%2Fu%2Flive%2Fgop4%2Fly%2Fly-Live1%2Fhls-cl-tv%2Findex.m3u8&demoConfig=eyJlbmFibGVTdHJlYW1pbmciOnRydWUsImF1dG9SZWNvdmVyRXJyb3IiOnRydWUsImVuYWJsZVdvcmtlciI6dHJ1ZSwiZHVtcGZNUDQiOmZhbHNlLCJsZXZlbENhcHBpbmciOi0xLCJsaW1pdE1ldHJpY3MiOi0xLCJ3aWRldmluZUxpY2Vuc2VVcmwiOiIifQ==" style="width: 100%; height: 100%;"></iframe>';
		window.location = "#chan22"
	}
	if (channum == 23) {
		tvbox.innerHTML = '';
		tvbox.innerHTML += '<iframe src="http://player.streamingtvguides.com/?src=https%3A%2F%2Flylive-videorent.cdn.hinet.net%2Fout%2Fu%2Flive%2Fgop4%2Fly%2Fly-Live2%2Fhls-cl-tv%2Findex.m3u8&demoConfig=eyJlbmFibGVTdHJlYW1pbmciOnRydWUsImF1dG9SZWNvdmVyRXJyb3IiOnRydWUsImVuYWJsZVdvcmtlciI6dHJ1ZSwiZHVtcGZNUDQiOmZhbHNlLCJsZXZlbENhcHBpbmciOi0xLCJsaW1pdE1ldHJpY3MiOi0xLCJ3aWRldmluZUxpY2Vuc2VVcmwiOiIifQ==" style="width: 100%; height: 100%;"></iframe>';
		window.location = "#23"
	}
}

function autochan() {
	cururl = window.location.toString();
	if (cururl.includes("#chan") == false) {
		switchchan(2);
	}
	if (cururl.includes("#chan2")) {
		switchchan(2);
	}
	if (cururl.includes("#chan5")) {
		switchchan(5);
	}
	if (cururl.includes("#chan8")) {
		switchchan(8);
	}
	if (cururl.includes("#chan9")) {
		switchchan(9);
	}
	if (cururl.includes("#chan10")) {
		switchchan(10);
	}
	if (cururl.includes("#chan11")) {
		switchchan(11);
	}
	if (cururl.includes("#chan12")) {
		switchchan(12);
	}
	if (cururl.includes("#chan14")) {
		switchchan(14);
	}
	if (cururl.includes("#chan16")) {
		switchchan(16);
	}
	if (cururl.includes("#chan19")) {
		switchchan(19);
	}
	if (cururl.includes("#chan22")) {
		switchchan(22);
	}
	if (cururl.includes("#chan23")) {
		switchchan(22);
	}
}