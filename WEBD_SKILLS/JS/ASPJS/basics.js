// var h1=document.querySelector("h1");
// h1.innerHTML=`wow <i>Musafir</i>`
// //when to use text content :- jab sirf text daalna ho
// //jab tag include karna ho toh innerHTML


// //now selecting css through js
// h1.style.color='maroon';
// h1.style.fontSize="28px"


// //adding a class from css file and removing it 

// h1.classList.add('democlass');
// h1.classList.remove('democlass');


//adding elements
var h2=document.createElement("h2");
h2.textContent="wow JII";
document.querySelector("body").appendChild(h2);
document.querySelector("body").removeChild(h2);


