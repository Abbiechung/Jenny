$(function () {
    function animation(animateIn, animateOut) {
        $('.layout').find('img').click(function () {
            let target = $(this).data('name')
            let fadeIn = 'bounceIn'
            let fadeOut = 'bounceOut'
            $(target).css('display', 'block')
            $(target).removeClass(animateOut)
            $(target).addClass('animated' + ' ' + animateIn)
        })

        $('.btn_1').click(function (e) {
            let target = e.target
            console.log(target)
            $(target).parent().parent().removeClass(animateIn)
            $(target).parent().parent().addClass(animateOut)
            setTimeout(function () {
                $(target).parent().parent().attr('style', 'display:none')
            }, 1000)
        })
    }

    $(animation('bounceIn', 'bounceOut'))

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
})