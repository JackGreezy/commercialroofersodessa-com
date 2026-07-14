jQuery(function ($) {

    // put social icon class in the right spot when it's added from the menu manager

    $('.social-menu li').each(function () {
        if ($(this).hasClass('fa')) {
            var classy = $(this).attr('class');
            var iconsplit = classy.split(' ');
            var firstClass = iconsplit[0]; // the fa class
            var secondClass = iconsplit[1]; // the fa class that specifies the icon, ie fa-facebook

            $(this).children('a').addClass(firstClass).addClass(secondClass);
            $(this).removeClass(firstClass).removeClass(secondClass);
        }
    });

    /*$('body').flowtype({
        minimum   : 500,
        maximum   : 1200,
        minFont   : 12,
        maxFont   : 40,
        fontRatio : 30});
        */

    // single-projects.php slider init

    $(window).load(function () {
        $(".single-projects .project-img-slider").on('init', function(slick) {
          //console.log('here');
            //$('#the-projects-slider').fadeIn('fast');
        }).slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrow: false,
            adaptiveHeight: false, // true
            asNavFor: '.project-nav',
             mobileFirst: true
        });

        // nav for gallery
        $(".single-projects .project-nav").slick({
            dots: false,
            infinite: true,
            speed: 300,
           // slideShow: '.project-img-slider',
            slidesToShow: 3,
            adaptiveHeight: true,
            zIndex: 9999,
            centerMode: false,  //true
            slidesToScroll: 1,
            nextArrow: '<div style="z-index: 999;" class="nextBox"><i class="fa fa-angle-down"></i></div>',
            prevArrow: '<div style="z-index: 999;"class="prevBox"><i class="fa fa-angle-up"></i></div>',
            vertical: true,
            asNavFor: '.project-img-slider',
            focusOnSelect: false,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        vertical: false,
                        zIndex: 9999,
                        adaptiveHeight: true,
                        centerMode: false,
                        nextArrow: '<div class="nextBox"><i class="fa fa-angle-right"></i></div>',
                        prevArrow: '<div class="prevBox"><i class="fa fa-angle-left"></i></div>',
                    }
                }
            ]
        }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
           // alignSliderNav();
        });


        function alignSliderNav() {
            if ($(window).width() > 775) {
                var slideImg = jQuery('.single-projects .project-img-slider .slick-active').height();
                var slideNav = jQuery('.single-projects .project-nav .slick-track').height();
                var slideArrow = jQuery('.single-projects .project-nav .nextBox').height();


                var combine = (slideImg - slideNav);
                if (combine > 0) {

                    var total = ((slideImg - slideNav) / 2);
                    var slickList = (jQuery('.single-projects .project-nav .slick-track').height() - combine);

                    jQuery('.single-projects .project-nav .slick-list').height(slickList);
                    jQuery('.single-projects .slick-arrow').animate({
                        'padding': total + 'px'
                    }, 300);

                } else {

                    jQuery('.single-projects .slick-arrow').animate({
                        'padding': '0'
                    }, 300);
                }
                //   console.log(total + ' total');
            }
        }
      // alignSliderNav();  // this does the alignment on page load
    });



    function sliderRestrain() {
            if ($(window).width() > 775) {
                var sliderImg = jQuery('.single-projects .project-img-slider .slide-item img');
                var sliderNav = jQuery('.single-projects .project-nav .slick-track').height();
                var sliderArrowNext = jQuery('.single-projects .project-nav .nextBox').height();
                var sliderArrowPrev = jQuery('.single-projects .project-nav .prevBox').height();
				jQuery(sliderImg).addClass('imagerestraint');
				equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}
var sliderHeight = $('.single-projects .slick-slider').height();
var arrowHeights = $('.single-projects .slick-arrow').height();
$(window).load(function() {
  //equalheight('.single-projects .slick-slider');
  //$('.single-projects .project-nav .slick-list').height($('.single-projects .slick-slider').height() - ($('.single-projects .slick-arrow').height()));
  $('.single-projects .project-img-slider .slick-list').height($('.single-projects .project-nav').height());
  $('.single-projects .project-img-slider img').height($('.single-projects .project-nav').height());
  });


$(window).resize(function(){
  //equalheight('.single-projects .slick-slider');
  //$('.single-projects .project-nav .slick-list').height($('.single-projects .slick-slider').height() - ($('.single-projects .slick-arrow').height()));
  $('.single-projects .project-img-slider .slick-list').height($('.single-projects .project-nav').height());
  $('.single-projects .project-img-slider img').height($('.single-projects .project-nav').height());
});

        }

    };
    sliderRestrain();

    $(window).load(function() {
    	$('.home-featured-img').height($('.home-content').outerHeight());
	});
	$(window).resize(function(){
		$('.home-featured-img').height($('.home-content').outerHeight());
	});
}(jQuery));
