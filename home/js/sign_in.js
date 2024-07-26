// login.js

eyeicon.onclick = function(){
    const password = document.getElementById('login-password');
    if (password.type == 'password'){
      password.type = 'text';
      eyeicon.src = '/images/eye-open.png';
    }else{
      password.type = 'password';
      eyeicon.src = '/images/eye-close.png';
    }
}

// Function to validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
  
// Function to handle login form submission
function handleLogin(event) {
    event.preventDefault();
  
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    const registeredEmail = localStorage.getItem('email');
    const registeredPassword = localStorage.getItem('password');
  
    if (email === registeredEmail && password === registeredPassword) {
      // Show captcha
      const captchaContainer = document.getElementById('captcha-container');
      captchaContainer.style.display = 'flex';
      generateCaptcha();
    } else {
      alert('Invalid email or password. Perhaps you are new here, try to register to calculate your progress.');
    }
}
  
// Function to generate CAPTCHA
function generateCaptcha() {
    const canvas = document.getElementById('captcha');
    const ctx = canvas.getContext('2d');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaText = '';
  
    for (let i = 0; i < 6; i++) {
      captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '30px poppins';
    ctx.fillStyle = '#000';
    ctx.fillText(captchaText, 50, 35);
  
    localStorage.setItem('captcha', captchaText);
    const captchaExpireTime = Date.now() + 120000; // 2 minutes from now
    localStorage.setItem('captchaExpireTime', captchaExpireTime);
  
    setTimeout(() => {
      blurCaptcha();
    }, 120000); // 2 minutes
}
  
// Function to blur CAPTCHA after 2 minutes
function blurCaptcha() {
    const captcha = document.getElementById('captcha');
    captcha.classList.add('blur');
  
    const refreshBtn = document.getElementById('refresh-btn');
    refreshBtn.style.display = 'flex';
}
  
// Function to handle CAPTCHA verification
function handleCaptcha(event) {
    event.preventDefault();
  
    const captchaInput = document.getElementById('captcha-input').value;
    const storedCaptcha = localStorage.getItem('captcha');
    const captchaExpireTime = localStorage.getItem('captchaExpireTime');
  
    if (captchaInput === storedCaptcha && Date.now() < captchaExpireTime) {
      alert('User verified!');
  
      // Show loading bar
      const loader = document.getElementById('loader');
      loader.style.display = 'flex';
  
      // Simulate loading and navigate to dashboard page
      setTimeout(() => {
        loader.style.display = 'none';
        window.location.href = '/home/dashboard/dashboard.html'; // Replace with your dashboard page URL
      }, 15000); // 15 seconds
    } else {
      alert('Captcha verification failed or expired. Please try again.');
    }
}
  
// Function to refresh CAPTCHA
function refreshCaptcha() {
    generateCaptcha();
    const captcha = document.getElementById('captcha');
    captcha.classList.remove('blur');
    const refreshBtn = document.getElementById('refresh-btn');
    refreshBtn.classList.add('hidden');
}
  
// Attach submit event listener to login form
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', handleLogin);
  
// Attach click event listener to captcha button
const captchaButton = document.getElementById('captcha-btn');
captchaButton.addEventListener('click', handleCaptcha);
  
// Attach click event listener to refresh button
const refreshButton = document.getElementById('refresh-btn');
refreshButton.addEventListener('click', refreshCaptcha);