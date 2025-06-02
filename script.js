
  const blob = document.querySelector('.blob');

  function randomize() {
    const x = Math.random() * window.innerWidth - 150;
    const y = Math.random() * window.innerHeight - 150;
    blob.style.transform = `translate(${x}px, ${y}px)`;
    
    const r1 = Math.floor(Math.random() * 100);
    const r2 = 100 - r1;
    const r3 = Math.floor(Math.random() * 100);
    const r4 = 100 - r3;

    blob.style.borderRadius = `${r1}% ${r2}% ${r3}% ${r4}%`;
  }

  setInterval(randomize, 3000);

//mousemove circles animation
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#2a1a3a", // deep purple/navy blend
  "#3b2560",
  "#4c3086",
  "#5e3bab",
  "#7046d1",
  "#8254e8",
  "#9470f2",
  "#a88cf7",
  "#bba7fa",
  "#cfc1fc",
  "#e2d8fd",
  "#f0e8fe",
  "#faf4ff",
  "#ffffff"  // glowing star white
];



circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 15 + "px";
    circle.style.top = y - 15 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.4;
    y += (nextCircle.y - y) * 0.4;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();



// BACK TO TOP BUTTON
  document.querySelector('.back').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smooth scroll
    });
  });

// SCROLL TO PROJECT BUTTON
  document.getElementById('scroll-to-project').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default jump

    const target = document.querySelector('.project');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });


  new Swiper('.swiper-warpper', {
  // Optional parameters
  loop: true,
  SpaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});