$(document).ready(function () {
    $('.nav').find('.hover').click(function () {
        let target = $(this).data('name')
        let _offset = $(target).offset().top
        $('html,body').animate({
            scrollTop: _offset
        })
    })

    //右下角click 移到最上面
    $('#gotop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        })
    })

    //右下角小圖出現
    $('#gotop').hide()
    $(window).scroll(function () {
        let height = $(this).scrollTop()
        if (height > 100) {
            $('#gotop').show()
            $('#gotop').removeClass()
            // $('#gotop').addClass('animated bounceIn')
            $('#gotop').addClass('animated jackInTheBox')
        } else {
            $('#gotop').removeClass()
            $('#gotop').addClass('animated bounceOut')
        }
    })

    //menu 重新調整視窗
    $(window).resize(function () {
        let width = $(window).width()
        if (width > 768) {
            $('.hamburger').hide()
            $('.menu').show()
        } else {
            $('.hamburger').show()
            $('.menu').hide()
        }
    })

    //呼叫 menu
    $('.hamburger').click(function () {
        $('.menu').slideToggle()
    })


    //scroll到的地方才會顯示區塊
    $(window).scroll(function () {
        let windowBottom = $(this).scrollTop() + $(this).innerHeight()
        $('.fade').each(function () {
            let objBottom = $(this).offset().top + $(this).outerHeight()

            if (objBottom < windowBottom) {
                if ($(this).css('opacity') == 0) {
                    $(this).fadeTo(300, 1)
                }
            } else {
                if ($(this).css('opacity') == 1) {
                    $(this).fadeTo(500, 0)
                }
            }
        })
    }).scroll()


    //header -> ball animation
    function ballRotate(degree) {
        $('.ballimg').css('transform', 'rotate(' + degree + 'deg)');
        $(".ballimg").css('WebkitTransform' , 'rotate(' + degree + 'deg)');
        console.log('.ballimg')
    }

    let degree = 1
    setInterval(function () {
        ballRotate(degree)
        degree += 1
    }, 100)


})