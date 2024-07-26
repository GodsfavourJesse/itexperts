// const introVideo = document.getElementById('into_video');

// function playVideo() {
//     introVideo.style.display = 'flex';
// }
// function closePlayVideo() {
//     introVideo.style.display = 'none';
// }

// const toggleButton = document.getElementById('theme-toggle');

// toggleButton.addEventListener('click', ()=>{
//     const currentTheme = document.documentElement.getAttribute('dark-theme');
//     const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//     document.documentElement.setAttribute('data-theme', newTheme);
// });

// script.js
// document.addEventListener('DOMContentLoaded', (event) => {
//     const currentTheme = localStorage.getItem('theme') || 'light';
//     document.documentElement.setAttribute('data-theme', currentTheme);
  
//     const toggleButton = document.getElementById('theme-toggle');
//     toggleButton.addEventListener('click', () => {
//       const currentTheme = document.documentElement.getAttribute('data-theme');
//       const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//       document.documentElement.setAttribute('data-theme', newTheme);
//       localStorage.setItem('theme', newTheme);
//     });
// });


// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
  
    if (currentTheme === 'dark') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
  
      if (newTheme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    });

    const openBar = document.getElementById('openBar');
    const xmark = document.getElementById('xmark');
    const menuIcon = document.getElementById('menuIcon');
    const sideBar = document.getElementById('sidebar');
    const clearIcon = document.getElementById('clearIcon');
    const useful_links = document.getElementById('useful_links');
    openBar.addEventListener('click', ()=>{
        useful_links.style.display = 'flex';
    });
    xmark.addEventListener('click', ()=>{
        useful_links.style.display ='none';
    })

    menuIcon.addEventListener('click', ()=>{
        sideBar.style.display = 'flex';
    });
    clearIcon.addEventListener('click', ()=>{
        sideBar.style.display ='none';
    })
});