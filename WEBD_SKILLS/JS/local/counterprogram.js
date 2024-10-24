let counter=0;


const btnincr=document.querySelector(".btnincr");
const btndecr=document.querySelector(".btndecr");
const btnreset=document.querySelector(".btnreset");

btnincr.onclick=function(){
    counter++;
    document.querySelector("#ctLabel").textContent=counter;
}
btndecr.onclick=function(){
    counter--;
    document.querySelector("#ctLabel").textContent=counter;
}
btnreset.onclick=function(){
    counter=0;
    document.querySelector("#ctLabel").textContent=counter;
}






