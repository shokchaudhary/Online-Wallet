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
var inputAmount = document.getElementById("Amount");
var submitButton = document.getElementById("Submit-button");
var warning = document.getElementById("warning-text");
var headingBox = document.getElementsByClassName('money-heading-box')[0];
var moneyForm = document.getElementsByClassName("money-form")[0];
var mainParent = document.getElementsByClassName("parent")[0];  
submitButton.addEventListener("click" , ()=>{
    if(inputAmount.value == "4987")
    {
        setTimeout(()=>{
            animation.style.display = "none"
            headingBox.style.display = "none";
            moneyForm.style.display = "none";
            mainParent.style.display = "block";
        } , 1000*5)
        animation.style.display = "block"
    }
    else 
    {
        warning.innerHTML = "Enter Valid Amount";
        warning.style.color = "red";
    }
})