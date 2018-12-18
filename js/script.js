// ---- News slider ----
let slideIndex = 0;
   
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slider");
    const dots = document.getElementsByClassName("dot");

    for(let i=0; i< slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if(slideIndex > slides.length ) {
        slideIndex = 1;
    }

    for(let i=0; i< dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }


    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 8000);
}


// ---Hamburger Menu---
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    // $(".mobile-menu").toggle();
    $(".mobile-menu").slideToggle(500);
  });

 

// ---Smooth Scroll---
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

// -------------Menu-toggle button

$(document).ready(function() {
  $(".menu-icon").on("click", function() {
        $(".main-nav1 .nav").toggleClass("showing");
  });
});





// ----------------------Scrolling Effect

$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
      $('.main-nav').addClass('red');
  } else {
      $('.main-nav').removeClass('red');
  }
})



// ----------------Scroll To Top

$(document).ready(function() {
  // show hide button on scroll
  $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('.scrollToTop').fadeIn();
      } else {
          $('.scrollToTop').fadeOut();
      }
  });

  // smooth scrolling to top
  $('.scrollToTop').click(function() {
      $('html,body').animate({
          scrollTop: 0
      })
  })
});






