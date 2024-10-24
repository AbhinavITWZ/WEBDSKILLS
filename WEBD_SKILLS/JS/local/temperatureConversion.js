let btn= document.querySelector("button");

btn.onclick=function(){
    let temp=document.querySelector("#temperature").value;
    // console.log(temp);
    let fromUnit= document.querySelector("#fromUnit").value;
    let toUnit= document.querySelector("#toUnit").value;

    if(temp===""||isNaN(temp)){
        document.querySelector("#value").textContent= `Kripya Sahi Input Daale`;


    }
    else if(fromUnit===toUnit)
    {
        temp=Number(temp);
        document.querySelector("#value").textContent= `${temp.toFixed(2)} deg ${toUnit}`;
    }
    else if(fromUnit==="celsius"){
        if(toUnit==="fahrenheit"){

            temp=Number(temp);
            temp=(temp* 9/5) + 32;
        
        document.querySelector("#value").textContent= `${temp.toFixed(2)} deg ${toUnit}`;
        }
    }
    else if(fromUnit==="fahrenheit"){
        if(toUnit==="celsius"){
        temp=Number(temp);

        temp=(temp - 32) * 5/9 ;
        document.querySelector("#value").textContent= `${temp.toFixed(2)}  ${toUnit}`;
        }
    }

}
