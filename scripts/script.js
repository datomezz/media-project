
window.onscroll = function(){
    let cursor = document.querySelector(".go-top");
    if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
        cursor.style.opacity= "1";
    } else {
        cursor.style.opacity = "0";
    }
}
