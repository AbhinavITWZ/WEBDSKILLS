//earlier xhr xmlHtttpRequest was used to get data from the servers

//making object of xhr
// format for xhr request
// const xhr=new XMLHttpRequest();
// xhr.responseType='json';
// xhr.open("GET","https://dog.ceo/api/breeds/image/random");
// xhr.send();

// 1.without promises
// let img=document.querySelector("img");
// let btn=document.querySelector("button");

// btn.addEventListener("click",()=>{
//     console.log("button clicked");

//     const xhr=new XMLHttpRequest();
//     xhr.responseType='json';
//     xhr.open("GET","https://dog.ceo/api/breeds/image/random")
//     xhr.send()
//     xhr.addEventListener("load",()=>{
//         img.src=xhr.response.message;

//     })

// })

//when we fetch data and use for fetching another data and so on then there is crwation of pyramid of loom called as callback hell
//which lead to difficulty in error handling so,we study promises and fetch

// 2.using promises
// let img = document.querySelector("img");
// let btn = document.querySelector("button");
// let imgData = btn.addEventListener("click", () => {
//   const p = new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.responseType = "json";
//     xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
//     xhr.send();
//     xhr.addEventListener("load", () => {
       
//       resolve(xhr.response);
//     });
//     return ;
//   });
//   p.then((data)=>{
//     img.src=data.message;
//   })
  
// });
// understsanding promises help to understand the fetchApi method which return promise in return so helpful to know promise earlier
