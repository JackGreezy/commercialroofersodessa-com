
    (function ($) {

        $(window).on('load', function () {

            $(".resource-slider").slick({
                dots: false,
                infinite: true,
                slidesToShow: 3,
              //  slidesToScroll: 1,
                nextArrow: '<i class="fa fa-angle-right next"></i>',
                prevArrow: '<i class="fa fa-angle-left prev"></i>',
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
            $(".person-slider").slick({
                dots: false,
                infinite: true,
                speed: 300,
                variableWidth: false,
                slideshow : 3,
                slidesToShow: 3,
                slidesToScroll: 1,
                nextArrow: '<i class="fa fa-angle-right next"></i>',
                prevArrow: '<i class="fa fa-angle-left prev"></i>',
                responsive: [

                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 2,
                           
                        }
                    },

                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });


        });

        $(".cc-slider").slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: '<div class="nextBox"><h2>Next</h2><i class="fa fa-angle-right"></i></div>',
            prevArrow: '<div class="prevBox"><h2>Prev</h2><i class="fa fa-angle-left"></i></div>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                },
            ]
        });
      
    }(jQuery));
