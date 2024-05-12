function showDropDown(){
  document.querySelector('.dropDown').style.display = 'flex';
}
// function hideDropDown(){
//   document.querySelector('.dropDown').style.display = 'none';
// }

// document.getElementById('submit').addEventListener('click',()=>{
//   let confirmation = document.getElementById('confirmation');
//   confirmation.style.display = 'flex';
// })
// document.getElementById('clickButton').addEventListener('click', ()=>{
//   let confirmation = document.getElementById('confirmation');
//   confirmation.style.display = 'none';
// })

let eyeicon = document.getElementById('eyeicon');
let password = document.getElementById('password');
let msg = document.getElementById('message');
let str = document.getElementById('strenght');
let emailField = document.getElementById('emailField');
let emailError = document.getElementById('emailError');


password.addEventListener('input', () =>{
  if (password.value.length > 0){
    msg.style.display = 'flex';
  }else{
    msg.style.display = 'none';
    eyeicon.src = '/images/eye-close.png';
  }
  if (password.value.length < 4){
    str.innerHTML = 'weak';
    password.style.borderColor = '#ff5925';
    msg.style.color = '#ff5925';
  }
  else  if (password.value.length >= 4 && password.value.length <8){
    str.innerHTML = 'medium';
    password.style.borderColor = '#b4b40e';
    msg.style.color = '#b4b40e';
  }
  else if(password.value.length >= 8){
    str.innerHTML = 'strong';
    password.style.borderColor = '#26d730';
    msg.style.color = '#26d730';
  }
})

eyeicon.onclick = function(){
  if (password.type == 'password'){
    password.type = 'text';
    eyeicon.src = '/images/eye-open.png';
  }else{
    password.type = 'password';
    eyeicon.src = '/images/eye-close.png';
  }
}

function validateEmail(){
  if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = 'Please enter a valid email';
    emailField.style.borderColor = 'red';
    emailError.style.bottom = '3px';
    return false;
  }
  emailError.innerHTML = 'Email is correct';
  emailField.style.borderColor = '#26d730';
  emailError.style.bottom = '5px';
  return true;
}

function sendEmail(){
  Email.send({
    Host : "jessefavour45@gmail.com",
    Username : "jessefavour45@gmail.com",
    Password : "Jessechibuike@123.com",
    To : 'jessefavour45@gmail.com',
    From : document.getElementById('email').value,
    Subject : "New Contact Form Enquiry",
    Body : "Name: " + document.getElementById('name').value
        + '<br> Email: ' + document.getElementById('email').value
        + '<br> Subject: ' + document.getElementById('subject').value
        + '<br> Message: ' + document.getElementById('message').value
}).then(
  message => alert('Messsage Sent Successfully')
);
}

