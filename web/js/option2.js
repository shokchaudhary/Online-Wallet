var animation = document.getElementsByClassName("animation")[0];
var warning = document.getElementsByClassName("warning")[0];
var Wallet = document.getElementsByClassName("wallet")[0];
var linkId = document.getElementById("link");
Wallet.addEventListener("click" , ()=>{
    console.log("hello")
    setTimeout( ()=>{
        animation.style.display="none";
        warning.style.display = "none"; 
        linkId.style.display = "block";
    }, 1000*5);
    animation.style.display = "block";
    warning.style.display = "block";
})