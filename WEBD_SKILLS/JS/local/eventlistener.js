// var btn=document.querySelector("button");
// btn.addEventListener("dblclick",function(){
//     btn.textContent="starting..";
//     btn.style.color="aquamarine";
// })

//addeventlistener ke events hote h wo details bhi generate karte h isliye hum fn me details arg likhke uski details access kar sakte h
document.querySelector("body").addEventListener("mousemove", function(details) {
    console.log(details);
});
