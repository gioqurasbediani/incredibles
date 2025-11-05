const header = document.getElementById('header');

function handleHeader() {
  if(window.scrollY > 50){
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}

// Run on scroll
window.addEventListener('scroll', handleHeader);

// Run on load
window.addEventListener('load', handleHeader);

// Smooth scroll for menu
document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
