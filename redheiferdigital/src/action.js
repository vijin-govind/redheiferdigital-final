$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 350) {
        $(".header").addClass("bg");
    } else {
        $(".header").removeClass("bg");
    }
});
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 850) {
        $("#rt-link").addClass("show01");
    } else {
        $("#rt-link").removeClass("show01");
    }
});
$(function() {
    $('.header a, .menu_blk a, .main_banner a[href^="#"]').click(function() {
        var pageid = $(this).attr('href').split('#');
        var id = pageid[1];
        pageid = '#' + pageid[1];
        pos = $(pageid).offset();
        $('a').each(function() {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: pos.top - 70
        }, 800, function() {
            history.pushState(null, null, pageid);
        });
        return false;
    });
    $(".arrow-container a").click(function() {
        $('html, body').animate({
            scrollTop: $("#scroll").offset().top
        }, 2000);
    });
});