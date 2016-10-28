//jQuery(document).foundation();
/*$(document).ready(function () {
    $('.dropdown').mouseover().addClass('open');

    $('.dropdown').mouseout(function() {
        t = setTimeout(function() {
            $(this).removeClass('open');
        }, 100);
    });
});*/
var hoverTimeout;
$('.dropdown').hover(function() {
    clearTimeout(hoverTimeout);
    $(this).addClass('open');
}, function() {
    var $self = $(this);
    hoverTimeout = setTimeout(function() {
        $self.removeClass('open');
    }, 150);
});