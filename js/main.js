$('.hover-modal').hover(function() {
    $('.popup_custom').css("visibility", "visible");
})
$('.close_button').click(function() {
    $('.popup_custom').css("visibility", "hidden");
})

jQuery(document).ready(($) => {

    var sliders = $('.slider');

    Array.from(sliders).forEach(function(slider, index) {

        var withArrows = slider.hasAttribute("data-arrows") ? slider.dataset.arrows : false;
        var fade = slider.hasAttribute("data-fade") ? slider.dataset.fade : false;

        $(slider).slick({
            dots: true,
            arrows: withArrows == 'true',
            infinite: true,
            speed: 300,
            fade: fade == 'true',
            autoplay: false,
            autoplaySpeed: 7000,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>',
            customPaging: function(slider, i) {
                var slideNumber = (i + 1),
                    totalSlides = slider.slideCount;
                return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="dot_inner">' + slideNumber + '</span></a>';
            },
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],


        });
    })



    function sleep(miliseconds) {
        var currentTime = new Date().getTime();
        while (currentTime + miliseconds >= new Date().getTime()) {}
    }


    $('.scroll-top-btn').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.hero').offset().top + 'px'
        }, 500)
    })


    $('.pops').click(function() {
        posY = $(window).scrollTop();
        $('body').css({
            overflow: 'hidden'
        })
        var r = $(this).attr('data-pop');
        $('.terms[data-pop=' + r + ']').addClass('modal-open').css('display', 'block');
        $('.modal-bg').addClass('modal-open').css('display', 'block');
    })


    window.onscroll = function() {
        $(window).scrollTop() > 200 ? $('.navBarSlider').addClass('slided') : $('.navBarSlider').removeClass('slided');
    }
    if ($.exitIntent) {
        $.exitIntent('enable');
        var fr = false;
        var timeout = 120000;
        if ($('html').hasClass('test')) {
            timeout = 1000;
        }

        function timeoutWait() {
            setTimeout(function() {
                fr = true
            }, timeout)
        }
        timeoutWait()

        $(document).bind('exitintent', function() {
            if (!fr) {
                return
            }
            fr = false;
            timeoutWait();
            posY = $(window).scrollTop();
            $('.exit_popup').show().css('display', 'block');
            $('.modal-bg').addClass('modal-open').css('display', 'block');
        });
    }

})