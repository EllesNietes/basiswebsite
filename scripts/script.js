// JavaScript Document
console.log("hi");

var hamburgerMenu = document.querySelector('header > button');

hamburgerMenu.addEventListener('click', openMenu);

function openMenu () {
  var nav = document.querySelector('nav');
  nav.classList.toggle('toonMenu');
}

var sluit = document.querySelector('nav button');

sluit.addEventListener('click', sluitMenu);

function sluitMenu () {
  var nav = document.querySelector('nav');
  nav.classList.remove('toonMenu');
}


