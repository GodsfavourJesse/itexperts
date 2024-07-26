const showDropDown = document.getElementById('showDropDown');
const dropDown = document.getElementById('dropDown')
const menuIcon = document.getElementById('menuIcon')
const menuBar = document.getElementById('menuBar');
const closemenuBar = document.getElementById('close');
showDropDown.addEventListener('mouseover', ()=>{
  dropDown.classList.add('open');
})

function menuDropDown() {
  document.getElementById('menuDrop').style.minHeight = '10rem';
}
function closeMenu() {
  document.getElementById('menuDrop').style.height = '3rem';
}

menuIcon.addEventListener('click', ()=>{
  menuBar.classList.add('big');
})
closemenuBar.addEventListener('click', ()=>{
  menuBar.classList.remove('big');
})