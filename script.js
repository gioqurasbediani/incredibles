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
