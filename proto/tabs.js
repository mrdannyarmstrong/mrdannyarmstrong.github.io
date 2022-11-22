function hidealltabs() {
	codebox.style.height = "268px"
	webbox.style.height = "268px"
	musicbox.style.height = "268px"
	tab1b.style.display="none";
	tab2b.style.display="none";
	tab3b.style.display="none";
	tab4b.style.display="none";
	tab5b.style.display="none";
	tab6b.style.display="none";
	tab1a.onclick = function() { showtab1() };
	tab2a.onclick = function() { showtab2() };
	tab3a.onclick = function() { showtab3() };
	tab4a.onclick = function() { showtab4() };
	tab5a.onclick = function() { showtab5() };
	tab6a.onclick = function() { showtab6() };
	
}

function showtab1() {
	cbh += 64;
	codebox.style.height = cbh + "px"
	tab1b.style.display="grid";
	tab1a.onclick = function() { hidetab1() };
	
}

function hidetab1() {
	cbh -= 64;
	codebox.style.height = cbh + "px"
	tab1b.style.display="none";
	tab1a.onclick = function() { showtab1() };
	
}

function showtab2() {
	cbh += 64;
	codebox.style.height = cbh + "px"
	tab2b.style.display="grid";
	tab2a.onclick = function() { hidetab2() };
	
}

function hidetab2() {
	cbh -= 64;
	codebox.style.height = cbh + "px"
	tab2b.style.display="none";
	tab2a.onclick = function() { showtab2() };
	
}

function showtab3() {
	wbh += 64;
	webbox.style.height = wbh + "px"
	tab3b.style.display="grid";
	tab3a.onclick = function() { hidetab3() };
	
}

function hidetab3() {
	wbh -= 64;
	webbox.style.height = wbh + "px"
	tab3b.style.display="none";
	tab3a.onclick = function() { showtab3() };
	
}

function showtab4() {
	wbh += 64;
	webbox.style.height = wbh + "px"
	tab4b.style.display="grid";
	tab4a.onclick = function() { hidetab4() };
	
}

function hidetab4() {
	wbh -= 64;
	webbox.style.height = wbh + "px"
	tab4b.style.display="none";
	tab4a.onclick = function() { showtab4() };
	
}

function showtab5() {
	mbh += 64;
	musicbox.style.height = mbh + "px"
	tab5b.style.display="grid";
	tab5a.onclick = function() { hidetab5() };
	
}

function hidetab5() {
	mbh -= 64;
	musicbox.style.height = mbh + "px"
	tab5b.style.display="none";
	tab5a.onclick = function() { showtab5() };
	
}

function showtab6() {
	mbh += 64;
	musicbox.style.height =  mbh + "px"
	tab6b.style.display="grid";
	tab6a.onclick = function() { hidetab6() };
	
}

function hidetab6() {
	mbh -= 64;
	musicbox.style.height = mbh + "px"
	tab6b.style.display="none";
	tab6a.onclick = function() { showtab6() };
	
}
