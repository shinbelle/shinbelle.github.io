(function ($) {
    
    // Init Wow
    wow = new WOW( {
        animateClass: 'animated',
        offset:       100
    });
    wow.init();
    
    // Countdown
    if ($('#countdown').length) { 
        $('#countdown').countdown({
            render: function(data) {
                if (data.years >= 1) {
                    var $days = (data.years*365)+data.days;
                } else {
                    var $days = data.days;
                }
                $(this.el).html(
                    '<div class="day">' +$days + ' <span>Days Left</span></div>'
                );
            }
        });
    }
    
})(jQuery);