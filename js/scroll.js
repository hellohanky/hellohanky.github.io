$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.navigation').fadeOut();
     }
    else
     {
      $('.navigation').fadeIn();
     }
 });