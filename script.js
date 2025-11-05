/* Reset & global */
* {margin:0; padding:0; box-sizing:border-box;}
body, html {font-family:'Montserrat', sans-serif; scroll-behavior:smooth; background:#000; color:#fff;}
a {text-decoration:none;}
ul {list-style:none;}

/* Header */
header {
  position:fixed; top:0; left:0; width:100%; height:70px; display:flex; justify-content:space-between; align-items:center; padding:0 50px; background:rgba(0,0,0,0.7); z-index:1000;
}
.logo {color:#D4AF37; font-weight:700; font-size:1.5rem;}
nav ul {display:flex; gap:30px;}
nav ul li a {color:#fff; font-weight:500; transition:0.3s;}
nav ul li a:hover {color:#D4AF37;}

/* Buttons */
.btn {background:#D4AF37; color:#000; padding:12px 30px; font-weight:bold; border-radius:5px; transition: transform 0.3s;}
.btn:hover {transform: scale(1.05);}

/* Hero */
#hero {height:100vh; background:url('hero.jpg') center/cover no-repeat; display:flex; justify-content:center; align-items:center;}
.hero-content {text-align:center; animation:fadeInHero 1.5s ease forwards;}
.hero-title {font-size:4rem; color:#D4AF37; margin-bottom:20px;}
.hero-subtitle {font-size:1.5rem; margin-bottom:30px; color:#fff;}

/* About Section */
#about {padding:120px 20px; display:flex; justify-content:center; align-items:center;}
.about-container {display:flex; flex-wrap:wrap; gap:30px; max-width:1200px; align-items:center;}
.about-text {flex:1 1 400px; animation:fadeInLeft 1s ease forwards;}
.about-image {flex:1 1 400px; animation:fadeInRight 1s ease forwards;}
.about-image img {width:100%; border-radius:15px;}

/* Reviews */
#reviews {background:#111; padding:80px 20px; text-align:center;}
.review-cards {display:flex; gap:20px; flex-wrap:wrap; justify-content:center;}
.review {background:rgba(255,255,255,0.05); padding:20px; border-radius:10px; flex:1 1 250px; transition:transform 0.3s;}
.review:hover {transform:translateY(-10px);}
.review span {display:block; margin-top:10px; color:#D4AF37;}

/* Quote */
#quote {padding:80px 20px; text-align:center;}
#quote iframe {border-radius:10px;}

/* Footer */
footer {padding:40px 20px; text-align:center; background:#111; color:#D4AF37;}

/* Animations */
@keyframes fadeInHero {0%{opacity:0; transform:translateY(-50px);}100%{opacity:1; transform:translateY(0);}}
@keyframes fadeInLeft {0%{opacity:0; transform:translateX(-50px);}100%{opacity:1; transform:translateX(0);}}
@keyframes fadeInRight {0%{opacity:0; transform:translateX(50px);}100%{opacity:1; transform:translateX(0);}}
