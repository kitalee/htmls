$(function () {

    var $sticky = $('.js-sticky');
    var $stickyrStopper = $('.js-sticky-stopper');
    var $stickyContainer = $('.js-sticky-container');

    if (!!$sticky.offset()) {
        var stickyWidth = $sticky.outerWidth();
        var stickyTopOff = $sticky.offset().top;
        var stickyLeftOff = $sticky.offset().left;
        var stickOffset = 0; 

        $(window).bind("load scroll resize", function () {
            if ($sticky.css('display') === 'block') {
                stickyTopOff = $stickyContainer.offset().top;
                stickyWidth = $sticky.outerWidth();
            }
            var windowTop = $(window).scrollTop();
            var stopPointOff = $stickyrStopper.offset().top - $sticky.outerHeight() - stickOffset;
            var stopPoint = stopPointOff - stickyTopOff;
            var stickyLeftPos = $stickyContainer.offset().left + $stickyContainer.outerWidth() - stickyWidth;

            if (stopPointOff <= windowTop) {
                // stop at bottom
                $sticky.css({ position: 'absolute', top: stopPoint, left: 'auto', right: 0  });
            } else if (stickyTopOff < windowTop + stickOffset) {
                // sticking
                $sticky.css({ position: 'fixed', top: stickOffset, left: stickyLeftPos, right: 'auto' });
            } else {
                // stop at top
                $sticky.css({ position: 'absolute', top: 0, left: 'auto', right: 0  });
            }
        });
    }

    $(window).scroll(function () {
        if ($(document.body).scrollTop() > 400 || $(document.documentElement).scrollTop() > 400) {
            $('.js-btn-go-top').css('display', 'block');
        } else {
            $('.js-btn-go-top').css('display', 'none');
        }
    });

    $('.js-btn-go-top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    $('.js-btn-search').click(function () {
        $('body').css('overflow', 'hidden');
        $('.js-search-overay').css('display', 'block');
        $('#txtSearch').focus();
    });

    $('#btnCloseSearch').click(function () {
        $('body').css('overflow', 'auto');
        $('.js-search-overay').css('display', 'none');
    });

    $('.js-btn-menu').click(function () {
        $('body').css('overflow', 'hidden');
        $('.js-menu-overay').css('display', 'block');
    });

    $('#btnCloseMenu').click(function () {
        $('body').css('overflow', 'auto');
        $('.js-menu-overay').css('display', 'none');
    });

    $('.js-btn-masthead-nav').click(function (e) {
        e.preventDefault();

        var target = $(this).data("target");
        var selectedTitle = $(this).text();

        $('.js-btn-masthead-nav').each(function () {
            $(this).removeClass('active');
        });

        $('.js-xs-dropdown__title').text(selectedTitle);
        $('.js-btn-masthead-nav[data-target="' + target + '"]').each(function () {
            $(this).addClass('active');
        });

        $('.js-masthead-article').each(function () {
            $(this).removeClass('active');
        });

        $('#' + target).addClass('active');

    });



});