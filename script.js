document.querySelectorAll('nav a').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

function checkHeader() {
  if(window.scrollY > 50){
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
}

// Run on scroll
window.addEventListener('scroll', checkHeader);

// Run on page load
window.addEventListener('load', checkHeader);
