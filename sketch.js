window.onload = choosePic;

function choosePic(){
var myPix = new Array("layers/back01.png", "layers/back02.png", "layers/back03.png", "layers/back04.png");
var myPix1 = new Array("layers/left01.png", "layers/left02.png", "layers/left03.png", "layers/left04.png");
var myPix2 = new Array("layers/midtop01.png", "layers/midtop02.png", "layers/midtop03.png", "layers/midtop04.png");

var randNum = Math.floor((Math.random() * myPix.length));
var randNum1 = Math.floor((Math.random() * myPix1.length));
var randNum2 = Math.floor((Math.random() * myPix2.length));
document.getElementById("myPic").src = myPix[randNum];
document.getElementById("myPic1").src = myPix1[randNum1];
document.getElementById("myPic2").src = myPix2[randNum2];
}