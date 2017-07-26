$(document).ready(function() {
  if (sessionStorage.visited) {
    $('.puff-in-center').removeClass('puff-in-center');
    $('.scale-in-hor-center').removeClass('scale-in-hor-center');
    $('.scale-in-ver-top').removeClass('scale-in-ver-top');
  }
  if (window.location.pathname === '/about' || window.location.pathname === '/projects') {
    $('ul.scale-in-hor-center').removeClass('scale-in-hor-center');
    $('li.font-weight-bold').removeClass('font-weight-bold');
  }
  if (window.location.pathname === '/about') {
    $('li.nav-item.active').removeClass('active');
    $('li.nav-item a[href="/about"]').addClass('active');
    $('li.nav-item a[href="/about"]').addClass('font-weight-bold');
  }
  if (window.location.pathname === '/projects') {
    $('li.nav-item.active').removeClass('active');
    $('li.nav-item a[href="/projects"]').addClass('active');
    $('li.nav-item a[href="/projects"]').addClass('font-weight-bold');
  }

  $(window).scroll(function() {
    if (window.scrollY > 0) {
      window.scrollTo(0,0)
    }
  })

  $('#carousel').carousel({
    interval: 15000
  })

  totalItems = $('.carousel-item').length;
  currentIndex = $('div.active').index() + 1;
  $('#carousel-index').html(''+currentIndex+' OF '+totalItems+'');

  $('#carousel').on('slid.bs.carousel', function() {
    totalItems = $('.carousel-item').length;
    currentIndex = $('div.active').index() + 1;
    $('#carousel-index').html(''+currentIndex+' OF '+totalItems+'');
  });

  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

  sessionStorage.visited = true;
})
