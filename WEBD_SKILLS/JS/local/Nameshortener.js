let username =window.prompt("Enter Your Full Name");
let fisrtName = username.charAt(0) ;
let surName = username.slice(username.lastIndexOf(" "));
document.querySelector("p").textContent=` Your Name abbreviation is : ${fisrtName} ${surName}`;
