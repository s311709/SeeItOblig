const hamburgerKnapp = document.getElementById('hamburgerKnapp');
const navBar = document.getElementById('navBar');

hamburgerKnapp.addEventListener('click', () => {
//  console.log("button clicked");
  navBar.classList.toggle('open');
})
