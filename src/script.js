let matterButton = document.querySelectorAll("#matter");
let colorButton = document.querySelectorAll("#color");
let img = document.querySelector(".chinese_mask");
console.log(img);

console.log(matterButton);
let tabimg = ["brown","blue","green","grey","orange","yellow"];
let tabimg2 = ["chanvreC1","linC2","tencelC3","modalC4","cotonC5","bambooC6"];
for(let i = 0; i < colorButton.length; i++){
    colorButton[i].addEventListener("click", function(){
            img.src ="img/personnalisation5/character_"+tabimg[i]+".png";

    });
}

for (let i = 0; i <matterButton.length;i++) {
    matterButton[i].addEventListener("click", function(){
        img.src ="img/personnalisation5/character_"+tabimg2[i]+".png";
    });

}
