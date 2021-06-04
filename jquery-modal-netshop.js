$(function() {
    $('.ajax-shipping-info').click(function(event) {
        event.preventDefault();
        $.get(this.href, function(html) {
            $(html).appendTo('body').modal();
        });
    });
});