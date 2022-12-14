
// меню бургер

const iconMenu = document.querySelector('.menu-icon');
const menuNav = document.querySelector('.menu');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuNav.classList.toggle('is-open');
  });
}

// Скрол до розділів
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.page-header').offsetHeight;

      if (iconMenu.classList.contains('active')) {
        document.body.classList.remove('lock');
        iconMenu.classList.remove('active');
        menuNav.classList.remove('is-open');

      }

      window.scrollTo({
        top: gotoBlockValue, behavior: 'smooth'
      });
      e.preventDefault();
    }
  }
}