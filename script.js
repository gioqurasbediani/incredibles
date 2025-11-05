// Smooth scroll for menu links
document.querySelectorAll('nav a').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Mouse pointer particle effect
const canvas = document.getElementById('mouse-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];

window.addEventListener('resize', ()=>{canvas.width=window.innerWidth; canvas.height=window.innerHeight;});

window.addEventListener('mousemove', (e)=>{
  for(let i=0;i<2;i++){
    particles.push({x:e.clientX, y:e.clientY, size:Math.random()*5+2, alpha:1});
  }
});

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach((p,index)=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fillStyle=`rgba(212,175,55,${p.alpha})`;
    ctx.fill();
    p.y -= 0.5; p.alpha -=0.02; p.size *=0.95;
    if(p.alpha <=0) particles.splice(index,1);
  });
  requestAnimationFrame(animate);
}
animate();
