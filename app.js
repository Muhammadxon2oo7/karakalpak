 

 
var modal = document.getElementById("tur__modal");
var btn = document.getElementById("opnmodal");

 
btn.onclick = function () {
  document.body.style.overflow='hidden'
    modal.style.display = "flex";
    console.log('slaom');
    
}
window.onclick = function (event) {
    if (event.target == modal) {
      document.body.style.overflow='unset'
        modal.style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', function() {
  const card = document.querySelector('.card');
  const imagesContainer = document.querySelector('.images');
  let interval;

  card.addEventListener('mouseenter', function() {

    
    const width = -imagesContainer.offsetWidth / 2;  
    let currentPosition = 0;

    interval = setInterval(() => {
      currentPosition -= 300; 
      if (currentPosition < width) {
        currentPosition = 0;  
      }
      imagesContainer.style.transition = 'none';  
      imagesContainer.style.transform = `translateX(${currentPosition}px)`;
      setTimeout(() => {
        imagesContainer.style.transition = 'transform 0.5s ease'; 
      });
    }, 2000);
  });

  card.addEventListener('mouseleave', function() {
    clearInterval(interval);
    imagesContainer.style.transform = 'translateX(0)'; 
  });
});





document.querySelectorAll('.card').forEach(card => {
    let carouselInterval;
    const coverImage = card.querySelector('.cover-image');
    const carouselImages = card.querySelectorAll('.carousel-images img');
    let currentIndex = 0;
  
    card.addEventListener('mouseover', () => {
      coverImage.style.display = 'none';
      carouselImages[currentIndex].style.display = 'block';
      
      carouselInterval = setInterval(() => {
        carouselImages[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % carouselImages.length;
        carouselImages[currentIndex].style.display = 'block';
      }, 500);  
    });
  
    card.addEventListener('mouseout', () => {
      clearInterval(carouselInterval);  
      carouselImages.forEach(img => img.style.display = 'none');
      coverImage.style.display = 'block';
    });
  });


document.addEventListener("DOMContentLoaded", function() {
  const paths = document.querySelectorAll('svg path');
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);

  paths.forEach(path => {
      path.addEventListener('mousemove', function(e) {
        
          this.style.strokeWidth = '2';  
      });

      path.addEventListener('mouseout', function() {
        
          tooltip.style.display = 'none';

 
          this.style.fill = '';   
          this.style.stroke = ''; 
          this.style.strokeWidth = ''; 
      });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const paths = document.querySelectorAll('svg path');
  const tooltip = document.createElement('div');
  document.body.appendChild(tooltip);
  const infoPanel = document.getElementById('infoPanel');

  paths.forEach(path => {
      path.addEventListener('mousemove', function(e) {

          this.style.stroke = 'white';
          this.style.strokeWidth = '2';          
          infoPanel.innerHTML = `
          <img src="${this.getAttribute('src')}" class='pointer__image' alt="Image of ${this.getAttribute('id')}" style="height:300px">
              <h4 class="title"> ${this.getAttribute('id')}</h4>
              
              <p class='map-dec'>${this.getAttribute('dec')}</p>
          `;
      });

      path.addEventListener('mouseout', function() {

          tooltip.style.display = 'none';
          this.style.fill = '';
          this.style.stroke = '';
          this.style.strokeWidth = '';
          this.style.zIndex = '';
          this.style.transform = '';
          
      });
  });
});


window.addEventListener('scroll', function() {
  const header = document.getElementById('main-header');
  const firstSectionHeight = document.querySelector('#first-section').offsetHeight;
  if (window.scrollY > firstSectionHeight) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

let hamburger = document.querySelector('.ham__Wrapper')
let navItem = document.querySelector('.nav__Wrapper')
hamburger.addEventListener('click',()=>{
    navItem.classList.toggle("display")
 
})

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});