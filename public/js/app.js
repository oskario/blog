'use strict';

$(document).ready(function () {
    move('body')
        .set('opacity', 1)
        .duration('0.3s')
        .end();

    setTopBarColor();
    $('body').on('swiperight', onBodySwipeLeft);
});

function onBodySwipeLeft () {
    if(window.location.href.indexOf('post') !== -1) {
        move('body')
            .add('margin-left', 200)
            .set('opacity', 0)
            .duration('0.3s')
            .then(function () {
                window.history.back();
            })
            .end();
    } else {
        // scroll to top
        $('body').scrollTo(0, 400);
    }
}

function setTopBarColor() {
//    var colorThief = new ColorThief();
//    var color = colorThief.getColor($('#header-image')[0]);
//    debugger;
//    var c = $('#header-image').averageColor();
//    var color = 'rgba(' + c.r + ',' + c.g + ','+ c.b + ',0.3)';
//    debugger;
//    $('.top-bg-bar').css('background-color', color);
}

// Wait for 'polymer-ready'. Ensures the element is upgraded.
//window.addEventListener('polymer-ready', function(e) {
//    alert('polymer ready');
//    var ajax = document.querySelector('core-ajax');
//
//    Respond to events it fires.
//    ajax.addEventListener('core-response', function(e) {
//    console.log(this.response);
//    });
//
//ajax.go(); // Call its API methods.
//});
//