$(document).ready(function() {

    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
      
   
    
    $('.js--scroll-to-plan').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-price').offset().top}, 1000);
    });
    $('.js--scroll-to-start').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
        return false;
    });
    
   
   
    $(Function(), {
      $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({ scrollTop: target.offset().top}, 1000);
            return false;
          }
        }
      });
    });
   

/*---animation on scroll---*/

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadein');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeinup');
    }, {
        offset: '50%'
    });
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadein');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

/*---mobile app nav---*/
   $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
       var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
       
       if (icon.hasClass('icon ion-ios-app')) {
           icon.addClass('icon ion-ios-add');
           icon.removeClass('icon ion-ios-app');
       } else {
           icon.addClass('icon ion-ios-app');
           icon.removeClass('icon ion-ios-add');
       }
    });

});