'use strict';

var app = app || {};

(function(module){
  var pageView = {};

  pageView.home = () => {
    $('.nav-content').hide();
    $('.home').show();
  };

  pageView.resume = () => {
    $('.nav-content').hide();
    $('.resume').show();
  };

  pageView.portfolio = () => {
    $('.nav-content').hide();
    $('.portfolio').show();
  };

  pageView.about = () => {
    $('.nav-content').hide();
    $('.about').show();
  };

  pageView.contact = () => {
    $('.nav-content').hide();
    $('.contact').show();
  };

  module.pageView = pageView;
}(app));
