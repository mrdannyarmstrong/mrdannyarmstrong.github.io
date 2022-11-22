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
	tab1b.style.display="grid";
	tabh = 0;
	tab1b.style.height = tabh + "px"
	for (i = 0; i < 64; i++) {
		setTimeout(function() {
			tabh += 1;
			tab1b.style.height = tabh + "px"
			cbh += 1;
			codebox.style.height = cbh + "px"
		}, 250);
	}
	tab1a.onclick = function() { hidetab1() };
}

function hidetab1() {
	tab1b.style.display="grid";
	tabh = 64;
	tab1b.style.height = tabh + "px"
	for (i = 0; i < 64; i++) {
		setTimeout(function() {
			tabh -= 1;
			tab1b.style.height = tabh + "px"
			cbh -= 1;
			codebox.style.height = cbh + "px"
		}, 250);
	}
	tab1a.onclick = function() { showtab1() };
	
}

function showtab2() {
	tab2b.style.display="grid";
	tabh2 = 0;
	tab2b.style.height = tabh2 + "px"
	for (i = 0; i < 64; i++) {
		setTimeout(function() {
			tabh2 += 1;
			tab2b.style.height = tabh2 + "px"
			cbh += 1;
			codebox.style.height = cbh + "px"
		}, 250);
	}
	tab2a.onclick = function() { hidetab2() };
}

function hidetab2() {
	tabh2 = 64;
	tab2b.style.height = tabh2 + "px"
	for (i = 0; i < 64; i++) {
		setTimeout(function() {
			tabh2 -= 1;
			tab2b.style.height = tabh2 + "px"
			cbh -= 1;
			codebox.style.height = cbh + "px"
		}, 250);
	}
	tab2a.onclick = function() { showtab2() };
	
}

function showtab3() {

	tab3b.style.display="grid";
	tabh3 = 0;
	tab3b.style.height = tabh3 + "px"
	for (i = 0; i < 64; i++) {
		setTimeout(function() {
			tabh3 += 1;
			tab3b.style.height = tabh3 + "px"
			wbh += 1;
			webbox.style.height = wbh + "px"
		}, 250);
	}
	tab3a.onclick = function() { hidetab3() };
	
}

function hidetab3() {
	tab3b.style.display="grid";
	tabh3 = 64;
	tab3b.style.height = tabh3 + "px"
	for (i = 0; i < 64; i++) {
		setTimeout(function() {
			tabh3 -= 1;
			tab3b.style.height = tabh3 + "px"
			wbh -= 1;
			webbox.style.height = wbh + "px"
		}, 250);
	}
	tab3a.onclick = function() { showtab3() };
	
}

function showtab4() {
	tab4b.style.display="grid";
	tabh4 = 0;
	tab4b.style.height = tabh4 + "px"
	for (i = 0; i < 64; i++) {
		setTimeout(function() {
			tabh4 += 1;
			tab4b.style.height = tabh4 + "px"
			wbh += 1;
			webbox.style.height = wbh + "px"
		}, 250);
	}
	tab4a.onclick = function() { hidetab4() };
	
}

function hidetab4() {
	tab4b.style.display="grid";
	tabh4 = 64;
	tab4b.style.height = tabh4 + "px"
	for (i = 0; i < 64; i++) {
		setTimeout(function() {
			tabh4 -= 1;
			tab4b.style.height = tabh4 + "px"
			wbh -= 1;
			webbox.style.height = wbh + "px"
		}, 250);
	}
	tab4a.onclick = function() { showtab4() };
	
}

function showtab5() {
	tab5b.style.display="grid";
	tabh5 = 0;
	tab5b.style.height = tabh5 + "px"
	for (i = 0; i < 64; i++) {
		setTimeout(function() {
			tabh5 += 1;
			tab5b.style.height = tabh5 + "px"
			mbh += 1;
			musicbox.style.height = mbh + "px"
		}, 250);
	}
	tab5a.onclick = function() { hidetab5() };
	
}

function hidetab5() {
	tab5b.style.display="grid";
	tabh5 = 64;
	tab5b.style.height = tabh5 + "px"
	for (i = 0; i < 64; i++) {
		setTimeout(function() {
			tabh5 -= 1;
			tab5b.style.height = tabh5 + "px"
			mbh -= 1;
			musicbox.style.height = mbh + "px"
		}, 250);
	}
	tab5a.onclick = function() { showtab5() };
	
}

function showtab6() {
	tab6b.style.display="grid";
	tabh6 = 0;
	tab6b.style.height = tabh6 + "px"
	for (i = 0; i < 64; i++) {
		setTimeout(function() {
			tabh6 += 1;
			tab6b.style.height = tabh6 + "px"
			mbh += 1;
			musicbox.style.height = mbh + "px"
		}, 250);
	}
	tab6a.onclick = function() { hidetab6() };
	
}

function hidetab6() {
	tab6b.style.display="grid";
	tabh6 = 64;
	tab6b.style.height = tabh6 + "px"
	for (i = 0; i < 64; i++) {
		setTimeout(function() {
			tabh6 -= 1;
			tab6b.style.height = tabh6 + "px"
			mbh -= 1;
			musicbox.style.height = mbh + "px"
		}, 250);
	}
	tab6a.onclick = function() { showtab6() };
	
}
