// Get the menu icon
const menuIcon = document.querySelector('.menu-icon');

// Add an event listener to the menu icon that toggles the display of the nav items when the menu icon is clicked
menuIcon.addEventListener('click', () => {
  document.querySelector('nav > ul').classList.toggle('show');
});
