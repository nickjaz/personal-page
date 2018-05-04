'use strict';

$('.nav-icon').on('click', function() {
  var $navIcon = $('.nav-icon');
  var $mainNav = $('.main-nav');
  var $navContent = $('.nav-content');
  var $navList = $('.main-nav ul li');
  var $navCross = $('.icon-cross');
  var $navHamburger = $('.icon-menu');

  $navIcon.on('click', function() {
    $navIcon.toggleClass('active');
    $mainNav.toggleClass('active');
    $navContent.toggleClass('hidden');
    $navCross.toggleClass('active');
    $navHamburger.toggleClass('hidden');
  });

  $navList.on('click', function() {
    $mainNav.removeClass('active');
    $navContent.removeClass('hidden');
    $navHamburger.removeClass('hidden');
    $navCross.removeClass('active');
  });
});
