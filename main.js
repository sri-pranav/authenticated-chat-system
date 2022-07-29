v = ["https://i.imgur.com/jXkShLJ.jpg",
"https://i.imgur.com/CIWEBGz.png",
"https://i.imgur.com/hopFaOC.png",
"https://i.imgur.com/X7vfJ5H.png",
"https://i.imgur.com/Qqc25Lq.png",
"https://i.imgur.com/BdCNJbS.png",
"https://i.imgur.com/of80eGv.png",
"https://i.imgur.com/uHBGvYy.png",
"https://i.imgur.com/1sPXWKm.png",
"https://i.imgur.com/GWpH4Tf.png",
"https://i.imgur.com/RKtMke5.png"]

picd = document.getElementById("display");
for(let i=0;i<v.length;i++){
    picd.appendChild(createImg(v[i]));
}
function createImg(src){
    element = document.createElement("img"); 
    element.setAttribute('src',src);
    element.setAttribute('height',"120px");
   return element;
}