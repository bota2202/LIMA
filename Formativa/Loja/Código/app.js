let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

function showSlide(index){
  slides.forEach((s,i)=>{
    s.classList.toggle('active', i===index);
    dots[i].classList.toggle('active', i===index);
  });
  currentSlide = index;
}

dots.forEach(dot => {
  dot.addEventListener('click', ()=>{
    const index = parseInt(dot.dataset.index);
    showSlide(index);
    resetInterval();
  });
});

function nextSlide(){
  currentSlide = (currentSlide+1)%slides.length;
  showSlide(currentSlide);
}

function startInterval(){ slideInterval = setInterval(nextSlide,3000); }
function resetInterval(){ clearInterval(slideInterval); startInterval(); }

startInterval();
