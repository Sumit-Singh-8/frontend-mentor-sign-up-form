// /</script><script type="module">
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

function show() {
  if (fname.value.trim() === "" ) {
    display(0)
  }
  else {
    hideMessage(0)
  }

  if (lname.value.trim() === "" ) {
    display(1)
  }
  else {
    hideMessage(1)
  }

  if (email.value.trim() === "" ) {
    email.classList.add("placeholder-shown");
    email.placeholder = "email@example/com";
    display(2)
  }
  else {
    validation()
    email.classList.remove("placeholder-shown");
    email.placeholder= "";
  }

  if (password.value.trim() === "" ) {
    display(3)
  }
  else {
    hideMessage(3)
  }
}


const submit = document.querySelector(".sub-btn");

submit.addEventListener("click", show );


function validation(){
  let text = email.value;
  console.log(text);

  let regx = /[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/ig

  if(regx.test(text)){
    console.log("Valid")
    hideMessage(2)
  }
  else{
    display(2);
    console.log("Invalid");
   
  }
}