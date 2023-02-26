(function ($) {
	"use strict";

    jQuery(document).ready(function($){
            $(".homepage-slides").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
             mouseDrag: false,
            touchDrag: false,
        });

            $(".homepage-slides").on("translate.owl.carousel",function(){
            	$(".single-slide-item h2, .single-slide-item p").removeClass("animated fadeInUp").css("opacity","0");
            	$(".single-slide-item h2, .slide-btn").removeClass("animated fadeInDown").css("opacity","0");
            });
             $(".homepage-slides").on("translated.owl.carousel",function(){
            	$(".single-slide-item h2, .single-slide-item p").addClass("animated fadeInUp").css("opacity","1");
            	$(".single-slide-item h2, .slide-btn").addClass("animated fadeInDown").css("opacity","1");
            });

      


            $(".gallery-lightbox").magnificPopup({
            	type: 'image',
            	gallery: {
            		enabled: true
            	}
            });

            new WOW().init();


            $("ul#navigation").slicknav({
            	prependTo: ".responsive-menu-wrap"
            });

    });


    jQuery(window).load(function(){
       jQuery(".slide-preloader-wrap, .site-preloader").fadeOut(500);
    });


}(jQuery));	