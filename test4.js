$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.head').fadeOut();
     }
    else
     {
      $('.head').fadeIn();
     }
  });