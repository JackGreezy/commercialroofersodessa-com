(function($){
  $(document).ready(function(){
  	var w = window.innerWidth;
  	if(w < 769){
  	  $(".submenu").find("h6").on("click", function(){
	  	$(this).closest("li").find("ul").slideToggle();
	  });
  	}else{
	  $(".collapsible").find("h6").on("click", function() {
	    if($(this).find(".collapsible-btn").text() == "+")
	    	$(this).find(".collapsible-btn").text("-");
	    else $(this).find(".collapsible-btn").text("+");
	    	$(this).closest(".collapsible").find(".collapsible-content").slideToggle();
	  });
	}
  	$('.submenu').on({
		"click":function(e){
	      e.stopPropagation();
	    }
	});
	$(".search-btn").on('click', function(){
	  $(".searchform").toggleClass("open");
	});
	$(".menus").find(".fa-times-circle-o").on('click', function(){
	  $(".navbar-header").find("button.navbar-toggle").trigger('click');
	});

	// $('header .collapsible-btn').click(function(event) {
 //  		// if the menu is open, then close it
 //  		var menu = $(this).next();
 //  		if(menu.hasClass('opened')) {
 //  			$(this).html('-');
 //  			menu.removeClass('opened');
 //  		} else {
 //  			menu.addClass('opened');
 //  			$(this).html('+');
 //  		}

 //  		event.stopPropagation();
 //  		event.preventDefault();
 //  		event.stopImmediatePropagation();
 //  	});
});
$(window).load(function() {

 //isotope stuff
 if ($('#b3-filtertron').length) {
     var targetSelector = '.mix';
     var $container;

     function getSelectorFromHash() {
         var hash = window.location.hash.replace(/^#/g, '');
         var selector = hash ? '.' + hash : targetSelector;
         return selector;
     }

     // Check for URL parameter filter first
     var autoFilter = '';
     if (window.autoFilterSlug && window.autoFilterSlug !== '') {
         autoFilter = '.' + window.autoFilterSlug;
     }

     var tag = autoFilter || getSelectorFromHash();
     if (tag && tag !== targetSelector) {
         $container = $(".mixer").isotope({
             itemSelector: '.mix',
             filter: tag
         });
         $('button[data-filter="'+tag+'"]').addClass('mixitup-control-active');
         
         // Update the filter display area if auto-filtering
         if (autoFilter && window.autoFilterName) {
             $('#filtersArea').html('<h3 style="font-weight: 500; display: inline;">' + window.autoFilterName + '</h3>').css('display', 'block');
         }
     } else {
         $container = $(".mixer").isotope({
             itemSelector: '.mix' //,filter: '.featured'
         });
     }

     $('.mobile-filter-select').on('change', function () {
       var value = '.'+$(this).val();
       //console.log(value);

       if (value === '.all') {
         $container.isotope({ filter: '*' });
       } else {
         $container.isotope({ filter: value });
       }
     });

     $('.filters').on( 'click', '.control', function( event ) {
         var $button = $( event.currentTarget );
         var $parent = $button.parent();
         var filter = $button.attr('data-filter');

         //remove active of anything under same cat
         $parent.find('.mixitup-control-active').each(function (i,e) {
             var filter2 = $(e).attr('data-filter');
             if (filter != filter2) {
                 $(e).removeClass('mixitup-control-active');
             }
         });

         //handle active of button
         if ($button.hasClass('mixitup-control-active')) {
             $button.removeClass('mixitup-control-active');
         } else {
             if (filter.includes('-all')) {

             } else {
                 $button.addClass('mixitup-control-active');
             }
         }

         if ($('.mixitup-control-active').length) {
             filters = [];
             $('.mixitup-control-active').each(function ( i, e ) {
                 var $this = $(e);
                 filters.push( $this.attr('data-filter') );
             });

             var filterValue = concatValues( filters );
             //console.log(filterValue);
             $container.isotope({ filter: filterValue });
         } else {
             $container.isotope({ filter: '*' });
         }


         /*if ( $(this).hasClass('mixitup-control-active') ) {
             $(this).removeClass('mixitup-control-active');

         } else {
             $('.mixitup-control-active').removeClass('mixitup-control-active');
             $(this).addClass('mixitup-control-active');
             var filter = $(this).attr('data-filter');
             $container.isotope({ filter: filter });
         }*/
     });
     $('#big-reset').click(function (e) {
         e.preventDefault();
         $('.mixitup-control-active').removeClass('mixitup-control-active');
         $container.isotope({ filter: '*' });
     });
 }

  });
}(jQuery));

function concatValues( obj ) {
    var value = '';
    for ( var prop in obj ) {
        value += obj[ prop ];
    }
    return value;
}
