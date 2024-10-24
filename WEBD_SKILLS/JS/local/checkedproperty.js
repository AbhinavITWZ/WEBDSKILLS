let subscribe=document.querySelector("#subs");
let visa =document.querySelector("#visa ");
let masterCard=document.querySelector("#mastercard");
let paypal=document.querySelector("#paypal");
let btn=document.querySelector("button");
btn.onclick=function(){
    if(subscribe.checked){
        document.querySelector('.content').textContent="You Are Subscribed !!";
    }
    else{
        document.querySelector('.content').textContent="You Are Not Subscribed !!";

    }
    if(visa.checked){
        document.querySelector('.payment').textContent="You Are choosing Visa Payment!!";
    }
    else if(masterCard.checked){
        document.querySelector('.payment').textContent="You Are choosing mastercard Payment!!";
    }
    else if(paypal.checked){
        document.querySelector('.payment').textContent="You Are choosing paypal Payment!!";
    }
    else{
        document.querySelector('.payment').textContent="You Have Not chosen Any Payment !!";

    }

}

