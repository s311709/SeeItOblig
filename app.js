const hamburgerKnapp = document.getElementById('hamburgerKnapp');
const navBar = document.getElementById('navBar');
const toggle = document.getElementById('toggle');

hamburgerKnapp.addEventListener('click', () => {
//  console.log("button clicked");
  navBar.classList.toggle('open');
})


/*if $('navbar').toggle('open') {
      $(this).toggleClass("toggle");
    }
    else {
      $(this).toggleClass("hamburgerKnapp");
    }
});

const toggle = document.getElementById('toggle');
 $('toggle').toggleClass('toggle', open );

 $('hamburgerKnapp').toggleClass(function (navBar, currentclass) {
   if (navBar == open)

 }
 */

 $(document).ready(function() {
   $("hamburgerKnapp").click(function() {
     $('hamburgerKnapp').toggleClass("toggle");
   });
 });

 $("navBar").toggleClass("toggle");
 // give up


$('.degrees-knapp').click(function() {
  $('nav ul .deg-vis').toggleClass("vis");
});


$('.about-knapp').click(function() {
  $('nav ul .ab-vis').toggleClass("vis");
});
