buttonCheckout = document.getElementsByClassName('tombolCekot')[0]

buttonCheckout.addEventListener('click', function(){
    parameter = document.getElementsByClassName('hidden')[0].innerHTML
    document.location.href = '../checkoutProcess.php?list='+parameter
})

// Untuk header
window.onload = function(){
    buttonSearch = document.getElementById('search1')
    kotakMuncul = document.getElementById('search2')
    buttonSearch.addEventListener('click', ()=>{
        kotakMuncul.classList.toggle('displayNone')
        buttonSearch.classList.add('displayNone')
    })
}

function checkSubmit(e) {
    if(e && e.keyCode == 13) {
       document.forms[0].submit();
    }
 }

// Untuk pop up
let popUp = document.getElementById("popUp");
let bg = document.getElementById("bg");

function openPopUp(){
    popUp.classList.add("open-popUp");
    bg.classList.add("open-bg");
}

function closePopUp(){
    popUp.classList.remove("open-popUp");
    bg.classList.remove("open-bg");
}
