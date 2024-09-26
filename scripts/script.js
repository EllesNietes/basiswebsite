// JavaScript Document
console.log("hi");

var menu = document.querySelector('header > button');

menu.addEventListener('click', openMenu);

function openMenu () {
  var nav = document.querySelector('nav');
  nav.classList.toggle('toonMenu');
}

var sluit =
document.querySelector('nav button');

sluit.addEventListener('click', sluitMenu);

function sluitMenu () {
  var nav = document.querySelector('nav');
  nav.classList.remove('toonMenu');
}


