let arr=["apple","mango","cookie"];
for(let fruit of arr){
    console.log(fruit);
}

let brr=[1,2,3,23,21,17]
console.log(brr.sort().reverse());

console.log(brr.pop());
brr.unshift("mango")
console.log(brr.length);


//spread operator(...before array) to unpack elements of string or array
let numbers=[1,2,34,5]
let maximum=Math.max(...numbers);
console.log(maximum)

//...rest operator for binding the elements to array

 function fcall(...foods){
    console.log(foods)
}
const food1=12;
const food2=13;
const food3=14;
fcall(food1,food2,food3);