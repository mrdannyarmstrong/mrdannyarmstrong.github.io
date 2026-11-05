function engine() {
    usedvalue = [-1];
    i = 0;
    for (let i = 0; i < backend.length; i++) {
        let pick = Math.floor(Math.random() * backend.length); 
        for (let k = 0; k < usedvalue.length; k++) { 
            if (usedvalue[k] == pick) {
                console.log("already added");
            }
            if (usedvalue[k] != pick) {
                mainui.innerHTML += '<div class="card"><p class="creator"><img src="https://backend-mrdannyarmstrong.github.io/vineexp/pfp/' + backend[pick][1] + '.png" alt="pfp" height="28" style="border-radius: 12px;"> ' + backend[pick][1] + '</p><video loop controls playsinline><source src="https://backend-mrdannyarmstrong.github.io/vineexp/vids/' + backend[pick][0] + '.mp4" type="video/mp4"></video><h2>' + backend[pick][3] + ' Loops</h2><h3>' + backend[pick][2] + '</h3><hr><img src="like.png" alt="Like" style="margin-left: 21px;"><img src="comment.png" alt="Commment" style="margin-left: 33px;"><img src="reupload.png" alt="Reupload" style="margin-left: 26px;"><img src="more.png" alt="More" style="margin-left: 25px;"></div>';
                usedvalue.push(pick); 
                break; 
            }
        }
    }
}
