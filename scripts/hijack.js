function makeAllLinksUnclickable() {
    'use strict';
    var Links = document.getElementsByTagName('a');

    for (var i = 0; i < Links.length; i++) {
        Links[i].addEventListener('click',
            function(event) {
                event.preventDefault();
            });
    }
}

makeAllLinksUnclickable();
