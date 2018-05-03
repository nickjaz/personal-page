'use strict';

$('.nav-icon').on('click', function() {
  var $navIcon = $('.nav-icon');
  var $mainNav = $('.main-nav');
  var $navContent = $('.nav-content');
  var $navList = $('.main-nav ul li');

  $navIcon.on('click', function() {
    $navIcon.toggleClass('active');
    $mainNav.toggleClass('active');
    $navContent.toggleClass('hidden');
  });

  $navList.on('click', function() {
    $mainNav.removeClass('active');
    $navContent.removeClass('hidden');
  });
});
