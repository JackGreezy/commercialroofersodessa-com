jQuery(function ($) {

    // do dropdown menu on hover instead of onclick (bootstrap overwrite)

    $(".dropdown").hover(
        function () {
            $(this).addClass('open')
        },
        function () {
            $(this).removeClass('open')
        }
    );

    // make the dropdown menu work with bootstrap

    $('#mnh-menu .menu-item-has-children').each(function () {
        $(this).find('div').addClass('submenu dropdown-menu');
        var itemWithDropdown = '.menu-item-has-children';
        $(itemWithDropdown).find(itemWithDropdown).find('div').removeClass('submenu dropdown-menu');
        $(this).removeClass('waiting'); //  :(
    });

    $('.menu-item-has-children a').addClass('dropdown-toggle'); //.attr("data-toggle", "dropdown");
    //$('#mnh-menu .menu-item-has-children').addClass('dropdown'); //.attr("data-toggle", "dropdown");

    /** begin the expandable menu items with + and -
     * .always-opened on the li spots all expanding action
     * .expandable.opened shows the item open on page load
     *  .expandable.closed shows the li items hidden
     *
     */

    // pop in the right icons
    // the top a tag still needs to be clicked, so keep the click listener only on these button classes
    $('li.expandable.closed > a').after('<span class="collapsible-btn">+</span>');
    $('li.expandable.opened-always > a').after('<span class="collapsible-btn">-</span>');

    // make sure the right things are hidden or shown
    $('.expandable.closed div').css('display', 'none');
    $('.expandable.opened div').css('display', 'block');

    $('.collapsible-btn').click(function () {

        if(!$(this).next().hasClass('opened')) {
            //$(this).next().css('display', 'block');
            $(this).next().slideToggle()
            $(this).next().addClass('opened');
            $(this).html('-');
        } else {
            //$(this).next().css('display', 'none');
            $(this).next().slideToggle();
            $(this).next().removeClass('opened');
            $(this).html('+');
        }
        

   //      jQuery('.collapsible-btn').each( function () {

			// if ($(this).next('div').hasClass('opened') || $(this).parent('li').hasClass('opened-always')) {
			//  	$(this).next('div').eq(0).slideToggle().removeClass('opened'); // toggle to closed
   //              $(this).parent('li').removeClass('opened-always');
   //              $(this).text('+');
   //              }
			// });
			// if (!$(this).next('div').hasClass('opened') || !$(this).parent('li').hasClass('opened-always')) {

   //              $(this).next('div').eq(0).slideToggle().addClass('opened'); // toggle to opened
   //              $(this).text('-');
   //          }

            // do the toggling code
            // if ($(this).next('div').hasClass('opened') || $(this).parent('li').hasClass('opened-always')) {
            //     $(this).next('div').eq(0).slideToggle().removeClass('opened'); // toggle to closed
            //     $(this).parent('li').removeClass('opened-always');
            //     $(this).text('+');
            // } else {

            //     $(this).next('div').eq(0).slideToggle().addClass('opened'); // toggle to opened
            //     $(this).text('-');
            // }
    });

}(jQuery));