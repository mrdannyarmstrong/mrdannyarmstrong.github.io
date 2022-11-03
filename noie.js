function noiechk() {
	var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
       window.location = "https://dannyarmstrong.rf.gd/noie/";
    }
    else  // If another browser, return 0
    {
        console.log("")
    }

    return false;
	
}