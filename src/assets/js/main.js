// IIFE - Immediately Invoked Function Expression
(function(yourcode) {

    // The global jQuery object is passed as a parameter
    yourcode(window.jQuery, window, document);

}(function($, window, document) {

    // The $ is now locally scoped 

    // Listen for the jQuery ready event on the document
    $(function() {

        var $window = $(window),
            $body = $('body');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function() {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Scrolly.
        $('.scrolly').scrolly();

        // Gallery.
        $('.gallery').each(function() {

            var $gallery = $(this),
                $content = $gallery.find('.content');
            // Poptrox.
            // $content.poptrox({
            //     usePopupCaption: true,
            //     usePopupNav: true,
            //     popupPadding: 0
            // });
            // $('.content').poptrox({
            //     usePopupCaption: true,
            //     usePopupNav: true,
            //     popupPadding: 0
            // });
            // Tabs.
            $gallery.each(function() {

                var $this = $(this),
                    $tabs = $this.find('.tabs a'),
                    $media = $this.find('.media');

                $tabs.on('click', function(e) {

                    var $this = $(this),
                        tag = $this.data('tag');

                    // Prevent default.
                    e.preventDefault();

                    // Remove active class from all tabs.
                    $tabs.removeClass('active');

                    // Reapply active class to current tab.
                    $this.addClass('active');

                    // Hide media that do not have the same class as the clicked tab.
                    $media
                        .fadeOut('fast')
                        .each(function() {

                            var $this = $(this);

                            if ($this.hasClass(tag))
                                $this
                                .fadeOut('fast')
                                .delay(200)
                                .queue(function(next) {
                                    $this.fadeIn();
                                    next();
                                });

                        });

                });

            });


        });

    });
    // The rest of the code goes here!


}));