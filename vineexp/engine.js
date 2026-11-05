function engine() {
    mainui.innerHTML = '';
    let usedvalue = []; 
    for (let i = 0; i < backend.length; i++) {
        let pick = Math.floor(Math.random() * backend.length); 
        if (usedvalue.includes(pick)) {
            console.log("already added");
            i--;
            continue; 
        }
        mainui.innerHTML += '<div class="card"><p class="creator"><img src="https://backend-mrdannyarmstrong.github.io/vineexp/pfp/' + backend[pick][1] + '.png" alt="pfp" height="28" style="border-radius: 12px;"> ' + backend[pick][1] + '</p><video loop controls playsinline><source src="https://backend-mrdannyarmstrong.github.io/vineexp/vids/' + backend[pick][0] + '.mp4" type="video/mp4"></video><h2>' + backend[pick][3] + ' Loops</h2><h3>' + backend[pick][2] + '</h3><hr><img src="res/like.png" alt="Like" style="margin-left: 21px;" height="24"><img src="res/comment.png" alt="Commment" style="margin-left: 33px;" height="24"><img src="res/revine.png" alt="Reupload" style="margin-left: 26px;"  height="24"><img src="res/more.png" alt="More" style="margin-left: 25px;"  height="24"></div>';
        usedvalue.push(pick); 
    }
}
