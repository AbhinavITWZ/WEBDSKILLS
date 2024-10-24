let arr=["MAngo","Angur","rusberry","gulab"]
//in es 6
// we see that for destrucuting that means if we want to access a element so we will never access it step by step to obtain itdirectly use destrucure feature
const [var1,var2]=arr
console.log(var1,var2);//like var1,var2 means 0 1
const [var3]=arr;
console.log(var3);//it will take 0 1st index from the array 
// the sequence its written it stores that value 

//for objects
let myObj={
    name:"Abhinav",
    age:20,
    skills:{
        best:"MERN stack"
    }
}
let {name:userName,age}=myObj;
console.log(userName,age);
let{skills:{best}}=myObj;
console.log(skills);



