const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});

function ogooluwa(){
let password= document.getElementById('password').value;
let confirmpassword = document.getElementById('confirmpassword').value;
console.log(password, confirmpassword);
let message = document.getElementById('message');
const btnn = document.getElementById('btnn');

   if(password.length !=0){
    if(password == confirmpassword){
        btnn.disabled = false;
        message.textContent = 'Password Match';
        message.style.color = '#3ae374';
    }
    else{
        btnn.disabled = true;
        message.textContent = 'Password doesnt match';
        message.style.color = 'red'

    }
   }
   else{
    message.textContent = 'password cant be empty';
   }
}