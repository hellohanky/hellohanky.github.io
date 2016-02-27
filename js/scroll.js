$(window).scroll(function() {

    if ($(this).scrollTop()>70)
     {
        $('.navigation').fadeOut();
     }
    else
     {
      $('.navigation').fadeIn();
     }
 });