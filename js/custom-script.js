jQuery(function($) {'use strict',

   //Script for nav button animation    
    $(".navbar-toggle").on('click', function(){
      $(this).toggleClass("active");
    });

    //#main-slider
    var slideHeight = $(window).height();
    $('#home-slider .item').css('height',slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-slider .item').css('height',slideHeight);
    });

    //Initiat WOW JS
    new WOW().init();

    //owl-carousel
    var owlOne = $("#charts");   
    owlOne.owlCarousel({
        autoPlay : 3000,
        items : 1,
        itemsCustom : false,
        itemsDesktop : [1199, 1],
        itemsDesktopSmall : [979, 1],
        itemsTablet : [768, 1],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleItem : false,
        itemsScaleUp : false       
    });
    var owlTwo = $("#technologyCost");   
    owlTwo.owlCarousel({
        autoPlay : 4000,
        items : 1,
        itemsCustom : false,
        itemsDesktop : [1199, 1],
        itemsDesktopSmall : [979, 1],
        itemsTablet : [768, 1],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleItem : false,
        itemsScaleUp : false
    });

    $('#tohash').on('click', function(){
        $('html, body').animate({scrollTop: $(this.hash).offset().top}, 1000);
        return false;
    });

    
});