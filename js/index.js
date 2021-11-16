const openMenuButton = document.querySelector('.menu-bars');
const closeMenuButton = document.querySelector('#times');
const mobileMenu = document.querySelector('#mobile-menu');

openMenuButton.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
  closeMenuButton.style.display = 'block';
  openMenuButton.style.display = 'none';
});

closeMenuButton.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  closeMenuButton.style.display = 'none';
  openMenuButton.style.display = 'block';
});

window.onscroll = () => {
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    mobileMenu.style.display = 'none';
    closeMenuButton.style.display = 'none';
    openMenuButton.style.display = 'block';
  } else {
    mobileMenu.style.display = 'none';
    closeMenuButton.style.display = 'none';
    openMenuButton.style.display = 'block';
  }
};
