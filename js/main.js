window.addEventListener('DOMContentLoaded', function () {
    initMenu();
    var mybutton = document.getElementById("knop");
    if (mybutton.length) {
      window.onscroll = function() {scrollFunction(mybutton)};
    }



})

function initMenu() {
    const menu = document.querySelector('nav ul'); 
    const menuBtn = document.querySelector('.menu-open'); 
    const closeBtn = document.querySelector('.menu-close'); 

    menuBtn.addEventListener('click', () => {
        menu.classList.add('open')
        
    })

    closeBtn.addEventListener('click', () => {
        menu.classList.remove('open')
        
    })
}


// When the user scrolls down 20px from the top of the document, show the button


function scrollFunction(mybutton) {
  console.log('scroll');
  console.log(mybutton)
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


  $(document).ready(function(){
    $('.slide-images').slick({ 
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
      });
  });

  $(document).ready(function(){
    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
  });

