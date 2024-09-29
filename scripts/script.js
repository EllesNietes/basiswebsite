// JavaScript Document
var hamburgerMenu = document.querySelector('header > button');

var sluit = document.querySelector('nav button');


function openMenu () {
  var nav = document.querySelector('nav');
  nav.classList.toggle('toonMenu');
}

hamburgerMenu.addEventListener('click', openMenu);


function sluitMenu () {
  var nav = document.querySelector('nav');
  nav.classList.remove('toonMenu');
}

sluit.addEventListener('click', sluitMenu);


