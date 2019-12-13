window.onscroll = function(){
    if(document.body.scrollTop > 180 || document.documentElement.scrollTop > 180){
        document.querySelector(".item-2").style.position = "fixed";
    } else {
        document.querySelector(".item-2").style.position = "";
    }
}