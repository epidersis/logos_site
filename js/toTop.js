let btn = $('.toTop')

btn.on('click', function() {
  $('html, body').animate({scrollTop: 0}, 500);
});

$(window).on('scroll', function() {
  if (window.pageYOffset < 300) {
    btn.fadeOut();
  } else {
    btn.fadeIn();
  }
});