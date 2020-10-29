const hamburgerKnapp = document.getElementById('hamburgerKnapp');
const navBar = document.getElementById('navBar');

hamburgerKnapp.addEventListener('click', () => {
//  console.log("button clicked");
  navBar.classList.toggle('open');
})


$('.degrees-knapp').click(function() {
  $('nav ul .deg-vis').toggleClass("vis");
});


$('.about-knapp').click(function() {
  $('nav ul .ab-vis').toggleClass("vis");
});
