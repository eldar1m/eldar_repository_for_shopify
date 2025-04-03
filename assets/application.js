// Put your application javascript here
function toggleDropdown(button) {
    const iconWrapper = button.querySelector('.icon-wrapper');
    const openIcon = iconWrapper.querySelector('.icon-open');
    const closedIcon = iconWrapper.querySelector('.icon-closed');

    const isOpen = iconWrapper.getAttribute('data-state') === 'open';

    if (isOpen) {
      openIcon.classList.add('hidden');
      closedIcon.classList.remove('hidden');
      iconWrapper.setAttribute('data-state', 'closed');
    } else {
      openIcon.classList.remove('hidden');
      closedIcon.classList.add('hidden');
      iconWrapper.setAttribute('data-state', 'open');
    }

    // Optional: also toggle dropdown menu
    const menu = button.nextElementSibling;
    if (menu && menu.classList.contains('dropdown-menu')) {
      menu.classList.toggle('hidden');
    }
  }