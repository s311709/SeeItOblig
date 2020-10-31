const hamburgerKnapp = document.getElementById('hamburgerKnapp');
const navBar = document.getElementById('navBar');
const toggle = document.getElementById('toggle');

// opens/closes hamburger menu on mobile
hamburgerKnapp.addEventListener('click', () => {
//  console.log("button clicked");
  navBar.classList.toggle('open');
})

// toggles color of hamburger menu symbol
$(() => {
  'use strict';
  $('#hamburgerKnapp').click(function() {
    $(this).toggleClass('toggle');
  });
});

// toggles drop down menu
$('.degrees-knapp').click(function() {
  $('nav ul .deg-vis').toggleClass("vis");
});

// toggles drop down menu
$('.about-knapp').click(function() {
  $('nav ul .ab-vis').toggleClass("vis");
});
