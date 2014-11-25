$(document).ready(function(){
  $('.js-menu-trigger').on('click touchstart', function(e){
    $('.js-menu').toggleClass('is-visible');
    $('.js-menu-screen').toggleClass('is-visible');
    $(".menu").toggleClass('close');
    e.preventDefault();
  });

  $('.js-menu-screen').on('click touchstart', function(e){
    $('.js-menu').toggleClass('is-visible');
    $('.js-menu-screen').toggleClass('is-visible');
     $(".menu").toggleClass('close');
    e.preventDefault();
  });

  //DISABLE ACTIVE CLASS ON INDEX PAGE
  var pathname = window.location.pathname; // returns path only
  //ACTIVE CLASS FOR CURRENT PAGE LINK
  if (pathname.length > 1) {
      $(function() {
      $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    });
  }
  


});



