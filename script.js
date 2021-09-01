
let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");


let message = document.querySelectorAll(".message");
let errorIcon = document.querySelectorAll("i");
let message2 = document.querySelector(".message2");
function display(i){
    message[i].style.display = 'block';
    errorIcon[i].style.display = 'block';
}

function hideMessage(i){
    message[i].style.display = 'none';
    errorIcon[i].style.display = 'none';
}

// function forall(){
//    if 
// }

function show() {
  if (fname.value.trim() === "" ) {
    display(0)
  }
  else {
    console.log("end");
    hideMessage(0)
  }

  if (lname.value.trim() === "" ) {
    display(1)
  }
  else {
    console.log("end");
    hideMessage(1)
  }

  if (email.value.trim() === "" ) {
    console.log("email start");
    // message2.style.display = 'block';
    email.classList.add("placeholder-shown");
    email.placeholder = "email@example/com";
    display(2)
  }
  else {
    validation()
    console.log("email end");
    // message2.style.display = 'none';
    email.classList.remove("placeholder-shown");
    email.placeholder.remove = "email@example/com";
    hideMessage(2)
  }

  if (password.value.trim() === "" ) {
    console.log("pass start");
    display(3)
  }
  else {
    console.log("pass end");
    hideMessage(3)
  }
}


const submit = document.querySelector(".sub-btn");

submit.addEventListener("click", show);


function validation(){
  let text = email.value;
  console.log(text);

  let regx = /^([a-zA-Z0-9\.-])+@([a-z0-9-]).([a-z]{2,10}).([a-z]{2,10})?$/

  if(regx.test(text)){
    console.log("Valid")
  }
  else{
    display(2);
    console.log("Invalid");
    
  }
}


function hello(){
  console.log("Hello here i am")
}