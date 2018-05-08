$(document).ready(function () {
    $('body').on('click', '.company-page_reviews_leave-your-assessment-left a', function () {
        $(".company-page_reviews_items").hide();
        $(".company-page_reviews_add").show();
    });

    $('body').on('mousemove', '.company-page_reviews_your-bottom-wrap .company-page_starts-pat', function (e) {
        offset = $(this).offset();
        cursor = (e.pageX - offset.left);
        width = $(this).outerWidth();
        percent = cursor / width * 100;
        if (percent > 100) {
            percent = 100;
        }
        param = ~~percent / 100;
        $(this).children(".company-page_starts-pat-back").css('width', ~~percent + '%');
    });
    $('body').on('click', '.company_mobile-call span', function () {
        if (!$(".company-page_description").hasClass("open")) {
            $(".company_mobile-call_hidden").show();
            $(".company-page_description").addClass("open");
            $(".company_mobile-call span").text("Скрыть контакты");
        }
        else{
            $(".company_mobile-call_hidden").hide();
            $(".company-page_description").removeClass("open");
            $(".company_mobile-call span").text("Позвонить");
        }
    });

    $('body').on('click', '.company_mobile-mode span', function () {
        if (!$(".company-page_description").hasClass("mode-open")) {
            $(".company_mobile-mode_hidden").show();
            $(".company-page_description").addClass("mode-open");
            $(".company_mobile-mode span").text("Скрыть режим работы");
        } else {
            $(".company_mobile-mode_hidden").hide();
            $(".company-page_description").removeClass("mode-open");
            $(".company_mobile-mode span").text("Режим работы");
        }
    });

    $('body').on('click', '.company-page_content-show-more', function () { 
        $(this).hide().siblings(".company-page_content-hidden").show();
    });
    if ($(window).width() <= 560) {
        $(".company-page_watch-more a").text("Все отзывы");
    }
    else{
        $(".company-page_watch-more a").text("смотреть больше отзывов");
    }
    $(window).resize(function () {
        if ($(window).width() <= 560) {
            $(".company-page_watch-more a").text("Все отзывы");
        } else {
            $(".company-page_watch-more a").text("смотреть больше отзывов");
        }
    });

});