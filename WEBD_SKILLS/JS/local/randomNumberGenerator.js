
let btn=document.querySelector("button");

btn.onclick=function(){

    let minValue=Number(document.querySelector("#minNum").value);
    let maxValue=Number(document.querySelector("#maxNum").value);
    let random = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    console.log(random);

    document.querySelector(".generator").textContent=random;

}