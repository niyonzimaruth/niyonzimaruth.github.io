// Auto update year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
  navUl.classList.toggle('show');
  toggle.classList.toggle('active');
});

// Close menu when a link is clicked (on mobile)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navUl.classList.remove('show');
      toggle.classList.remove('active');
    }
  });
});