document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger') as HTMLElement;
  const menu = document.querySelector('nav') as HTMLElement;

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  // Close the menu when a menu item is clicked
  document.querySelectorAll('nav a').forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  });
});
