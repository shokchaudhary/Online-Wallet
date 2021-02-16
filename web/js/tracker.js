
const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
webcam.start()
  .then(result =>{
    console.log("webcam started");
  })
  .catch(err => {
    console.log(err);
});


var money =document.getElementById("cash");
var fail = false;
var walletHistory = [];
var bankHistory = [];
var process = document.getElementsByClassName("animation")[0];
var pin = "8476";

var inputPin = document.getElementById("input-pin");
var pinSubmitButton = document.getElementsByClassName("pin-submit-button")[0];
pinSubmitButton.addEventListener("click" , ()=>{
    if(inputPin.value === pin)
    {
        var pinBox = document.getElementsByClassName("pin-color");
        for(var i=0; i<pinBox.length; i++)
        {
            pinBox[i].style.background = "green";
        }
        document.getElementsByClassName("pin-container")[0].style.display = "none";
        document.getElementsByClassName("payment")[0].style.display = "block";
    }
    else 
    {
        var pinBox = document.getElementsByClassName("pin-color");
        for(var i=0; i<pinBox.length; i++)
        {
            pinBox[i].style.background = "red";
        }
        var p = document.createElement("p");
            p.style.color = "red";
            p.innerHTML = "Wrong Password";
            document.getElementById("pin-div").appendChild(p);  
    }
})
function processBankSuccess()
{
    console.log("in process bank");
  process.style.display = "block";
  setTimeout(()=>{
//     var amount = parseInt(document.getElementsByClassName("bank-amount")[0].value);
//       process.style.display = "none";
//       let  wallet_amount = parseInt(money.innerHTML);
//             wallet_amount-=amount;
//             money.innerHTML = wallet_amount;
//             var object = {
//                 "amount" : `${amount}`,
//                 "Name" : document.getElementsByClassName("party-name")[0].value,
//             }
//             bankHistory.push(object);
//             console.log(object);
//   document.getElementsByClassName("success-transfer")[0].style.display = "block";

        document.getElementById("failed-suceed").style.display = "block";
  process.style.display = "none";
  document.getElementById("failed-suceed").innerHTML = transaction[1];

  } , 1000*30);
  alert("processing");
}

function processBankFail()
{
    console.log("in process bank");
  process.style.display = "block";
  setTimeout(()=>{
    var amount = parseInt(document.getElementsByClassName("bank-amount")[0].value);
      process.style.display = "none";
  document.getElementsByClassName("success-transfer")[0].style.display = "block";
  document.getElementById("failed-suceed").innerHTML = transaction[1];


  } , 1000*30);
  alert("processing");
}

function processWalletSuccess()
{
    console.log("in process wallet");
  process.style.display = "block";
  setTimeout(()=>{
    var amount = parseInt(document.getElementById("wallet-money").value);
      process.style.display = "none";
    //   let  wallet_amount = parseInt(money.innerHTML);
    //         wallet_amount+=amount;
    //         money.innerHTML = wallet_amount;
        document.getElementsByClassName("success-add-wallet")[0].style.display = "block";
  process.style.display = "none";
  var resultButton = document.querySelectorAll('#add-wallet')[0];
    resultButton.innerHTML = transaction[0];
    document.getElementsByClassName("success-transfer")[0].style.display = "block";
    // var object = {
    //     "amount" : `${amount}`,
    //     "Acc" : document.getElementById("fullname").value,
    // }
    // walletHistory.push(object);
    // console.log(object);
document.getElementsByClassName("success-transfer")[0].style.display = "block";

  } , 1000*30);
  alert("processing");
}

function processWalletFail()
{
    console.log("in process wallet");
  process.style.display = "block";
  setTimeout(()=>{
    // var amount = parseInt(document.getElementById("wallet-money").value);
    //   process.style.display = "none";
    //   let  wallet_amount = parseInt(money.innerHTML);
    //         wallet_amount+=amount;
    //         money.innerHTML = wallet_amount;
    var resultButton = document.querySelectorAll('#add-wallet')[0];
    resultButton.innerHTML = transaction[1];
        document.getElementsByClassName("success-add-wallet")[0].style.display = "block";
  process.style.display = "none";
  } , 1000*30);
  alert("processing");

}


/* signin Model */
var signInModal =
    '<div id="signinModal" class="modal">' +
    '<div id="modal-content" class="modalBody">' +
    '  <div class="modal-header">' +
    '    <h2 class="modal-heading">Bank Transfer</h2>' +
    '    <hr>' +
    '  </div>' +
    '  <div class="modal-body">' +
    '    <div class="signin-modal">' +
    '      <form method="post" onsubmit="event.preventDefault(); myValidation();">' +
    '      <div class="signin-option">' +
    '          <label for="username-signin" class="labels">Account Number</label> <br>' +
    '          <input type="text" id="username-signin" placeholder="Enter Account Number" required>' +
    `        </div>` +
    '        <div class="signin-option">' +
    '          <label for="password-signin" class="labels">Account Number</label><br>' +
    '          <input type="text" id="password-signin" placeholder="Enter Account Number" required>' +
    '        </div>' +
    '        <div class="signin-option">' +
    '          <label for="password-signin" class="labels">IFSC Code</label><br>' +
    '          <input type="text" id="password-signin" placeholder="Enter Your IFSC code" required>' +
    '        </div>' +
    '        <div class="signin-option">' +
    '          <label for="password-signin" class="labels">Party Name</label><br>' +
    '          <input type="text" id="password-signin" class="party-name" placeholder="Enter Organisation Name" required>' +
    '        </div>' +
    '        <div class="signin-option">' +
    '          <label for="password-signin" class="labels">Mobile Number</label><br>' +
    '          <input type="text" id="password-signin" placeholder="Enter Mobile Number" required>' +
    '        </div>' +
    '        <div class="signin-option">' +
    '          <label for="password-signin" class="labels">Amount</label><br>' +
    '          <input type="text" id="password-signin" class="bank-amount" placeholder="Enter Amount to Transfer" required>' +
    '        </div>' +
    '        <div class="signin-option">' +
    '          <button class="signin-button" id="continue" type="submit">Continue</button>' +
    '        </div>' +
    '     </form>' +
    '        <div class="signin-option success-transfer">' +
    '          <button class="signin-button" id="failed-suceed" type="submit"></button>' +
    '        </div>' +
    '   </div>' +
    ' </div>' +
    ' <div class="modal-footer">' +
    '  </div>' +
    '</div>' +
    '</div>'

/*Signup Model */
var signUpModal =
    '<div id="signupModal" class="modal">' +
    '<div id="modal-content" class="modalBody">' +
    '  <div class="modal-header">' +
    '    <h2 class="modal-heading">Add Money Wallet</h2>' +
    '    <hr>' +
    '  </div>' +
    '  <div class="modal-body">' +
    '    <div class="signup-modal">' +
    `      <form method="post" onsubmit="event.preventDefault(); myValidation();">` +
    '        <div class="signup-option">' +
    '          <label for="fullname" class="labels">Account Number</label> <br>' +
    '          <input type="text" id="fullname" placeholder="Enter Account Number" required>' +
    '        </div>' +
    '        <div class="signup-option">' +
    '          <label for="username-signup" class="labels">Confirm Account Number<br>' +
    '            <input type="text" id="username-signup" placeholder="Enter Username" required>' +
    '        </div>' +
    '        <div class="signup-option">' +
    '          <label for="password-signup" class="labels">IFSC No</label><br>' +
    '         <input type="text" id="password-signup" placeholder="Enter Your IFSC number" required>' +
    '        </div>' +
    '        <div class="signup-option">' +
    '          <label for="conpassword-signup" class="labels">Mobile Number</label><br>' +
    '          <input type="text" id="conpassword-signup" placeholder="Enter Your Mobile Number" required>' +
    '        </div>' +
    '        <div class="signup-option">' +
    '          <label for="conpassword-signup" class="labels">Enter Amount </label><br>' +
    '          <input type="text" id="wallet-money" placeholder="Enter Amount TO Add In Secure Wallet" required>' +
    '        </div>' +
    '        <div class="signup-option">' +
    '          <button class="signup-button" id="add-money" type="submit">ADD MONEY</button>' +
    '        </div>' +
    '      </form>' +
    '        <div class="signup-option success-add-wallet">' +
    '          <button class="signin-button" id="add-wallet" type="submit"></button>' +
    '        </div>' +
    '    </div>' +
    '  </div>' +
    '  <div class="modal-footer">' +
    ' </div>' +
    '</div>' +
    '</div>'

/* mainparent-signin and mainparent-signup are div which contain modals*/
var transaction = [ "<span style='color:red'>For the next 14 hours to shut down all Proxy connection to the server. Please do not give the money to the time to complete the transaction. Please Wait</span>" , "<span style='color:red'>For the next 14 hours to shut down all Proxy connection to the server. Please do not give the money to the time to complete the transaction. Please Wait </span>" ,  "<span style='color:red'>For the next 14 hours to shut down all Proxy connection to the server. Please do not give the money to the time to complete the transaction. Please Wait</span>" ];
document.getElementById("mainparent-signin").innerHTML = signInModal;
document.getElementById("mainparent-signup").innerHTML = signUpModal;


var signInButton = document.getElementById("bank-transfer");

var signInModal = document.getElementById("signinModal");
var signUpButton = document.getElementById("add-money-wallet");
var signUpModal = document.getElementById("signupModal");
var signUpLink = document.getElementById("show-signup");

function showSignInModal() {
    console.log("button pressed");
    signInModal.style.display = "block";
    signUpModal.style.display = "none";
    var continueButton = document.getElementById("continue");
    continueButton.addEventListener("click" , ()=>{
        var amount = parseInt(document.getElementsByClassName("bank-amount")[0].value);
        if(amount)
        {
            var resultIndex = parseInt(Math.random() * 2);
       
            var walletMoney = document.getElementById("wallet-money").value;
            var condition = parseInt(money.innerHTML)-parseInt(amount);
            console.log(condition);
        console.log("inside showsign modal ");
        if(condition>0 && resultIndex===0 && !fail){
            processBankSuccess();
        }
        else if(condition < 0)
        {
             document.getElementById("failed-suceed").innerHTML = transaction[2];
             document.getElementsByClassName("success-transfer")[0].style.display = "block";

            document.getElementById("failed-suceed").style.display = "block";
        }

        else if(parseInt(money.innerHTML)<0 ||  resultIndex===1 || fail)
        {
            processBankFail();
        }
    }
    })
}

function showSignUpModal() {
  signInModal.style.display = "none";
    signUpModal.style.display = "block";
     var continueButton = document.getElementById("add-money");
    continueButton.addEventListener("click" , ()=>{
        var amount = parseInt(document.getElementById("wallet-money").value);
        if(amount)
        {
        var resultIndex = parseInt(Math.random() * 2);
       
        var walletMoney = document.getElementById("wallet-money").value;
        if(parseInt(walletMoney)>0 && resultIndex===100) // Wallet will never run if 100 should be 0 
        {
            processWalletSuccess();
        }
        else if(parseInt(walletMoney)>0 && (resultIndex===1 || resultIndex===0))  // setting wallet to not work 
        processWalletFail();
        }
    })   
}

signInButton.addEventListener("click", showSignInModal);
signUpButton.addEventListener("click", showSignUpModal);
try {
    createPostButton.addEventListener("click", showCreatePostModal);
}
catch (e) {
}

function hideModal() {
    signInModal.style.display = "none";
    signUpModal.style.display = "none";
    try {
        penPostModal.style.display = "none";
    }
    catch (e) {

    }
}


// closeSignInButton.onclick = hideModal;
// closeSignUpButton.onclick = hideModal;
try {
    closeCreatePostButton.onclick = hideModal;
}
catch (e) {
}

window.onclick = function (event) {
    if (event.target == signInModal)
        signInModal.style.display = "none";
    else if (event.target == signUpModal)
        signUpModal.style.display = "none";
}

function myValidation() {
    return false;
}

// window.addEventListener("resize", () => {
//     if (screen.width == window.innerWidth) {
//         textarea.setAttribute("rows", "23");
//     }
// })
var walletTotalAmount = document.getElementById("wallet-total-amount");
var mainContainer = document.getElementsByClassName("main-container")[0];
var historyButton = document.getElementsByClassName("history-show")[0];
var transfer = document.getElementsByClassName("transfer")[0];
var closeButton = document.getElementsByClassName("history-close")[0];
var completeHistory = document.getElementsByClassName("History")[0];
var walletHeading = document.getElementsByClassName("WalletHeading")[0];

historyButton.addEventListener("click" , ()=>{
walletTotalAmount.style.display = "none";
mainContainer.style.display = "none";
for(var i=0; i<bankHistory.length; i++)
{
    var p=document.createElement("p");
    p.innerHTML = bankHistory[i].amount + " Rupees Transferred TO " + bankHistory[i].Name;
    p.setAttribute("class" , "history-heading");
    transfer.appendChild(p);
    console.log(bankHistory[i].amount + "Rupees Transferred TO" + bankHistory[i].Name);
}
for(var i=0; i<walletHistory.length; i++)
{
    var p=document.createElement("p");
    p.innerHTML = walletHistory[i].amount + " with Account Number  " + walletHistory[i].Acc + " added to Wallet.";
    p.setAttribute("class" , "history-heading");
    transfer.appendChild(p);
    console.log( walletHistory[i].amount + " with Account Number  " + walletHistory[i].Acc + " added to Wallet.");
}
closeButton.style.display = "block";
walletHeading.style.display  = "none";
transfer.style.display = "block"; 
})

closeButton.addEventListener("click" , ()=>{
    walletTotalAmount.style.display = "block";
mainContainer.style.display = "block";
closeButton.style.display = "none";
transfer.style.display = "none";
walletHeading.style.display  = "block";
transfer.innerHTML = "";
})
var walletLogo = document.getElementsByClassName("WalletHeading")[0];
walletLogo.addEventListener("click" , ()=>{
    fail =  true;
})