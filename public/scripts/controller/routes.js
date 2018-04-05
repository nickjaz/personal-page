'use strict';

var app = app || {};

page('/', app.pageView.home);
page('/resume', app.pageView.resume);
page('/portfolio', app.pageView.portfolio);
page('/about', app.pageView.about);
page('/contact', app.pageView.contact);

page();
