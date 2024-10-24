let resolvebtn=document.querySelector("#resolvebtn")
let rejectbtn=document.querySelector("#rejectbtn")

let p=new Promise((resolve,reject)=>{
    resolvebtn.addEventListener("click",()=>{
        resolve("Musafir Has Resolved The isue")
    })
    rejectbtn.addEventListener("click",()=>{
        reject("pllease check the error")
    })
});
p.then((data)=>{
    console.log(data);
    
}).catch((data)=>{
    console.log(data);
    
})

