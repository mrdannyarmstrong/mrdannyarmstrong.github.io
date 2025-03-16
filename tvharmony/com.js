function backcom() {
    channels = [];
    try {
        channels = getchannels();
        if (channels[1][0] == "NULL") {
            ch01url.href = "#"
            ch01img.src = "nochan.gif"
        }
        else {
            ch01url.href = channels[1][0]
            ch01img.src = channels[1][1]
        }
        if (channels[2][0] == "NULL") {
            ch02url.href = "#"
            ch02img.src = "nochan.gif"
        }
        else {
            ch02url.href = channels[2][0]
            ch02img.src = channels[2][1]
        }
        if (channels[3][0] == "NULL") {
            ch03url.href = "#"
            ch03img.src = "nochan.gif"
        }
        else {
            ch03url.href = channels[3][0]
            ch03img.src = channels[3][1]
        }
        if (channels[4][0] == "NULL") {
            ch04url.href = "#"
            ch04img.src = "nochan.gif"
        }
        else {
            ch04url.href = channels[4][0]
            ch04img.src = channels[4][1]
        }
        if (channels[5][0] == "NULL") {
            ch05url.href = "#"
            ch05img.src = "nochan.gif"
        }
        else {
            ch05url.href = channels[5][0]
            ch05img.src = channels[5][1]
        }
        if (channels[6][0] == "NULL") {
            ch06url.href = "#"
            ch06img.src = "nochan.gif"
        }
        else {
            ch06url.href = channels[6][0]
            ch06img.src = channels[6][1]
        }
        if (channels[7][0] == "NULL") {
            ch07url.href = "#"
            ch07img.src = "nochan.gif"
        }
        else {
            ch07url.href = channels[7][0]
            ch07img.src = channels[7][1]
        }
        if (channels[8][0] == "NULL") {
            ch08url.href = "#"
            ch08img.src = "nochan.gif"
        }
        else {
            ch08url.href = channels[8][0]
            ch08img.src = channels[8][1]
        }
        if (channels[9][0] == "NULL") {
            ch09url.href = "#"
            ch09img.src = "nochan.gif"
        }
        else {
            ch09url.href = channels[9][0]
            ch09img.src = channels[9][1]
        }
        if (channels[10][0] == "NULL") {
            ch10url.href = "#"
            ch10img.src = "nochan.gif"
        }
        else {
            ch10url.href = channels[10][0]
            ch10img.src = channels[10][1]
        }
        if (channels[11][0] == "NULL") {
            ch11url.href = "#"
            ch11img.src = "nochan.gif"
        }
        else {
            ch11url.href = channels[11][0]
            ch11img.src = channels[11][1]
        }
        if (channels[12][0] == "NULL") {
            ch12url.href = "#"
            ch12img.src = "nochan.gif"
        }
        else {
            ch12url.href = channels[12][0]
            ch12img.src = channels[12][1]
        }
        if (channels[13][0] == "NULL") {
            ch13url.href = "#"
            ch13img.src = "nochan.gif"
        }
        else {
            ch13url.href = channels[13][0]
            ch13img.src = channels[13][1]
        }
        if (channels[14][0] == "NULL") {
            ch14url.href = "#"
            ch14img.src = "nochan.gif"
        }
        else {
            ch14url.href = channels[14][0]
            ch14img.src = channels[14][1]
        }
        if (channels[15][0] == "NULL") {
            ch15url.href = "#"
            ch15img.src = "nochan.gif"
        }
        else {
            ch15url.href = channels[15][0]
            ch15img.src = channels[15][1]
        }
		if (channels[16][0] == "NULL") {
            ch16url.href = "#"
            ch16img.src = "nochan.gif"
        }
        else {
            ch16url.href = channels[16][0]
            ch16img.src = channels[16][1]
        }
		if (channels[17][0] == "NULL") {
            ch17url.href = "#"
            ch17img.src = "nochan.gif"
        }
        else {
            ch17url.href = channels[17][0]
            ch17img.src = channels[17][1]
        }
        channels = [0]
    }
    catch {
        alert("A communcation error has occured. Please make sure you have a stable internet connection")
        ch01url.href = "#"
        ch01img.src = "nochan.gif"
        ch02url.href = "#"
        ch02img.src = "nochan.gif"
        ch03url.href = "#"
        ch03img.src = "nochan.gif"
        ch04url.href = "#"
        ch04img.src = "nochan.gif"
        ch05url.href = "#"
        ch05img.src = "nochan.gif"
        ch06url.href = "#"
        ch06img.src = "nochan.gif"
        ch07url.href = "#"
        ch07img.src = "nochan.gif"
        ch08url.href = "#"
        ch08img.src = "nochan.gif"
        ch09url.href = "#"
        ch09img.src = "nochan.gif"
        ch10url.href = "#"
        ch10img.src = "nochan.gif"
        ch11url.href = "#"
        ch11img.src = "nochan.gif"
        ch12url.href = "#"
        ch12img.src = "nochan.gif"
        ch13url.href = "#"
        ch13img.src = "nochan.gif"
        ch14url.href = "#"
        ch14img.src = "nochan.gif"
        ch15url.href = "#"
        ch15img.src = "nochan.gif"
		ch16url.href = "#"
        ch16img.src = "nochan.gif"
		ch17url.href = "#"
        ch17img.src = "nochan.gif"
    }
}
