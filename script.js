/* Global */
* {margin:0; padding:0; box-sizing:border-box;}
body, html {font-family:'Montserrat', sans-serif; scroll-behavior:smooth; background:#000; color:#fff;}
a{text-decoration:none;}
h1,h2,h3{font-weight:700;}
p{font-weight:400; line-height:1.6;}

/* Header */
header{
  position:fixed; top:0; left:0; width:100%; height:70px;
  display:flex; justify-content:space-between; align-items:center;
  padding:0 50px; background:rgba(0,0,0,0.85); z-index:1000;
}
.logo{color:#D4AF37; font-size:1.6rem;}
nav ul{display:flex; gap:25px;}
nav ul li{list-style:none;}
nav ul li a{color:#fff; font-weight:500; text-transform:uppercase; transition:0.3s;}
nav ul li a:hover{color:#D4AF37;}

/* Hero */
#hero{
  height:100vh; display:flex; justify-content:center; align-items:center; text-align:center;
  background:url('images/hero.jpg') center/cover no-repeat; padding-top:70px;
}
.hero-content{max-width:90%; animation:fadeInHero 1.5s ease forwards;}
.hero-content h1{font-size:4rem; color:#D4AF37; margin-bottom:20px;}
.hero-content p{font-size:1.6rem; margin-bottom:30px;}
.btn{background:#D4AF37; color:#000; padding:12px 30px; border-radius:5px; font-weight:bold; transition:0.3s;}
.btn:hover{transform:scale(1.05);}

/* Sections */
section{padding:100px 20px;}
.container{display:flex; flex-wrap:wrap; gap:30px; max-width:1200px; margin:auto; align-items:center;}
.about-text{flex:1 1 400px;}
.about-image{flex:1 1 400px;}
.about-image img{width:100%; border-radius:15px;}

/* Services */
.service-cards{display:flex; flex-wrap:wrap; gap:30px; justify-content:center;}
.card{background:rgba(255,255,255,0.05); padding:20px; border-radius:15px; flex:1 1 250px; transition:0.3s;}
.card img{width:100%; border-radius:10px;}
.card:hover{transform:translateY(-10px);}

/* Reviews */
#reviews{text-align:center; background:#111;}
.review-cards{display:flex; flex-wrap:wrap; justify-content:center; gap:20px;}
.review{background:rgba(255,255,255,0.05); padding:20px; border-radius:10px; flex:1 1 250px; transition:transform 0.3s;}
.review:hover{transform:translateY(-10px);}

/* Quote */
#quote iframe{width:100%; max-width:800px; border-radius:10px; height:600px;}

/* Contact & Footer */
#contact{text-align:center;}
footer{text-align:center; padding:40px 20px; background:#111; color:#D4AF37;}

/* Animations */
@keyframes fadeInHero{0%{opacity:0; transform:translateY(-30px);}100%{opacity:1; transform:translateY(0);}}

/* Responsive */
@media(max-width:1200px){.hero-content h1{font-size:3.5rem;}.hero-content p{font-size:1.4rem;}}
@media(max-width:900px){.hero-content h1{font-size:3rem;}.hero-content p{font-size:1.2rem;}.btn{padding:10px 20px;}.container{flex-direction:column;}}
@media(max-width:600px){.hero-content h1{font-size:2.5rem;}.hero-content p{font-size:1rem;}.btn{padding:8px 16px;}}
