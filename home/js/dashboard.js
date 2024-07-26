let settingsMenu = document.querySelector('.settings_menu');

function settingsMenuToggle(){
  settingsMenu.style.display = 'block';
}

let profilePic = document.getElementById('profile_pic');
let inputFile = document.getElementById('input_field');
let resetInput = document.getElementById('reset_input');

inputFile.onchange = function(){
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
}
resetInput.onclick = function(){
  profilePic.src = URL.revokeObjectURL= '/img/5.png';
}