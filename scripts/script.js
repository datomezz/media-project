window.onscroll = function(){
    if(document.body.scrollTop > 180 || document.documentElement.scrollTop > 180){
        document.querySelector(".item-2").style.position = "fixed";
    } else {
        document.querySelector(".item-2").style.position = "";
    }
}

let subContainer = document.querySelectorAll(".sub-container");
let subContainerCount = subContainer.length / 3;
document.querySelector(".item-3").style.gridTemplateRows = "repeat(" + subContainerCount + ", 400px)";