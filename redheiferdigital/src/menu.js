(function($) {
    $.fn.menumaker = function(options) {
        var navigate = $(this),
            settings = $.extend({
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function() {
            $(this).find(".button").on('click', function() {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.slideToggle().removeClass('open');
                } else {
                    mainmenu.slideToggle().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });
            navigate.find('li ul').parent().addClass('has-sub');
            multiTg = function() {
                navigate.find(".has-sub").prepend('<span class="submenu-button"></span>');
                navigate.find('.submenu-button').on('click', function() {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').slideToggle();
                    } else {
                        $(this).siblings('ul').addClass('open').slideToggle();
                    }
                });
            };
            if (settings.format === 'multitoggle') multiTg();
            else navigate.addClass('dropdown');
            if (settings.sticky === true) navigate.css('position', 'fixed');
            resizeFix = function() {
                var mediasize = 1024;
                if ($(window).width() > mediasize) {
                    navigate.find('ul').show();
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };
})(jQuery);
(function($) {
    $(document).ready(function() {
        $("#navigate").menumaker({
            format: "multitoggle"
        });
    });
})(jQuery);