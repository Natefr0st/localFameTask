AOS.init();

$(document).ready(function(){

    var mobileBtn = $('.btn-mobile');
    var mobileMenu = $('.mobile-menu');

    // Show menu on click
    
    mobileBtn.on('click', function(){

        if (mobileMenu.hasClass('open')) {
            mobileMenu.removeClass('open');
            mobileBtn.removeClass('active');
        } else {
            mobileMenu.addClass('open');
            mobileBtn.addClass('active');
        }
        
    });


    // To the top btn
    var btn = $('#top');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });

    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });

});