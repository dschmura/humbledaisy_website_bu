// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery2
//= require bootstrap
//= require tether
//= require rails-ujs
//= require turbolinks
//= require plugins/plugins
//= require template-custom

//= require_tree .
    $(document).on('turbolinks:load', function() {
      setActiveLink();
    });

    function setActiveLink() {
      var path = window.location.pathname;
      path = path.replace(//$/, "");
      path = decodeURIComponent(path);
      var elemental = $("header .navbar-nav li a");
      elemental.each(function() {
        var href = $(this).attr('href');
        if (path.substring(0, href.length) === href) {
            $(this).closest('a').addClass('active');
        }
    });
  }