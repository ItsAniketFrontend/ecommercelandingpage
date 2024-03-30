$('.owl-carousel').owlCarousel({
    loop:true,
  stagePadding: 20,
    margin:20,
    nav:true,
  navText : ['<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>','<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>'],
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1
        },
        640:{
            items:2
        },
      960:{
            items:3
        },
        1200:{
            items:4
        }
    }
})


$(document).ready(function() {
    setInterval(function() {
        $('.owl-next').click();
    }, 2000); 
});




