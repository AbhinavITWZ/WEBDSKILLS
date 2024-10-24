//variables in js :
// variables like a container which store a value rather it be number or string or any boolean or etc 
//in js they are been divided into three parts as 
// 1. let              Its blocked scoped
// 2. var                Its globally scoped
// 3. const              if value is assignd value cannote be chnaged 

console.log("welcome users !!");
var $wow= 10;
{
    var $wow=20;


}
console.log($wow);//20,since globally scoped and once value changed it chnages the global value 


let a=20;
{
    let a =30;
    console.log(a);//block scoped
}
console.log(a);


const c=true;
//c=false;
console.log(c);//once value asssigned it cant be chnaged during program 



// We will be going to see different types of datatypes in js 
// Lets see :


// primitive data types and object(user defined)

/* 
primitive : (value)
1.Number  2.strings  3.Null   4.undefined   5.Boolean  6.BigInt &symbol
non-primitive(reference type)

user defined :
>> objects{ key : value pairs}
*/                           
// let u=true;
// let v=10;
// let w="WOW";
// let x;
// let y=null;
// console.log(u,v,w,x,y);
// console.log(typeof u,typeof v,typeof w,typeof x,typeof y);

console.log(`₹ ${(2+3*3/2%10)}`)

















