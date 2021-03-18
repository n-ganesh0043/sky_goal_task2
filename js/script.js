var smallImg = document.getElementById("smallimg");
var imgBox = document.getElementById("img-box");
var menuIcon =document.getElementById("btnIcon");

function onWebsite(){
    smallImg.src="img/web.png";
}
function onMobileapp(){
    smallImg.src= "img/mobile.png";
}
function onMarketing(){
    smallImg.src="img/market-d.png";
}
function onSoftware(){
    smallImg.src="img/software.jpg";
}
function imageSize(){
    if(imgBox.className == "small")
    {
        imgBox.className = "full";
        menuIcon.innerHTML = "&#9776";
    }
    else{
        imgBox.className = "small";
        menuIcon.innerHTML = "&#10006";
    }
}