//isme inbuilt promise h best feature

let btn=document.querySelector("button");
let image=document.querySelector("img");
// btn.addEventListener("click",()=>{
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response)=>response.json())
//     .then((data)=>{
//         image.src=data.message;
//     })
// })


//using async/await
 btn.addEventListener("click", async ()=>{
       let resp= fetch("https://dog.ceo/api/breeds/image/random");
       let data=await resp.json();
       image.src=data.message



})
