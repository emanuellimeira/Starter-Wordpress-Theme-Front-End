//= include ../bower_components/jquery/dist/jquery.js
//= include ../bower_components/modernizr/modernizr.js
//= include ../bower_components/bootstrap/dist/js/bootstrap.js


jQuery(document).foundation();

$(document).ready(function () {
    $('.dropdown-toggle').mouseover(function() {
        $('.dropdown-menu').show();
    })

    $('.dropdown-toggle').mouseout(function() {
        t = setTimeout(function() {
            $('.dropdown-menu').hide();
        }, 100);

        $('.dropdown-menu').on('mouseenter', function() {
            $('.dropdown-menu').show();
            clearTimeout(t);
        }).on('mouseleave', function() {
            $('.dropdown-menu').hide();
        })
    })
})