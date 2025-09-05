document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const menuIcon = hamburger.querySelector('i');

  // Toggle navigation menu
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    if (navMenu.classList.contains('active')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
    } else {
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (
      !event.target.closest('#navMenu') &&
      !event.target.closest('#hamburger') &&
      navMenu.classList.contains('active')
    ) {
      navMenu.classList.remove('active');
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    }
  });

  // Update footer year and last modified date
  const currentYear = document.getElementById('currentYear');
  const lastModified = document.getElementById('lastModified');

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  if (lastModified) {
    lastModified.textContent = document.lastModified;
  }

  // Add filter functionality (optional enhancement)
  const addFilterFunctionality = () => {
    // This would be implemented based on the navigation menu items
    console.log('Filter functionality would be implemented here');
  };

  // Initialize any additional functionality
  addFilterFunctionality();
});