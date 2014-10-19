'use strict';

$(document).ready(function () {
    // Fade whole page in
    fadeIn('body');

    // Install hide navigation bar on scroll
    $(window).scroll(onWindowScroll);
    $(window).on('mouseup', scrollEnd);
    $(window).on('touchend', scrollEnd);
    onWindowScroll();

    // Install go back on swipe
//    $('body').on('swiperight', onBodySwipeLeft);

    $(".also-like .right").click(onAlsoLikeRight);
    $(".also-like .left").click(onAlsoLikeLeft);
});

function fadeIn (element) {
    move(element)
        .set('opacity', 1)
        .duration('0.3s')
        .end();
}

function fadeOut (element) {
    move(element)
        .set('opacity', 0)
        .duration('0.3s')
        .end();
}

var pinOffset = 300,
    showHideOffset = 52,
    scrollVector = 0,
    scrollStartOffset = $(window).scrollTop();

function onWindowScroll () {
    var currentPosition = parseInt($('.navbar').css('top')),
        currentPageOffset = $(window).scrollTop();

    scrollStartOffset = scrollStartOffset || ($(window).scrollTop() + currentPosition);

    if (currentPageOffset < 5) {
        $('.navbar').css('box-shadow', 'none');
    } else {
        $('.navbar').css('box-shadow', '');
    }

    if (currentPageOffset < pinOffset) {
        $('.navbar').css('top', '0');
        return;
    }

    var oldPageOffset = scrollStartOffset + scrollVector;
    if (scrollStartOffset < currentPageOffset && currentPageOffset < oldPageOffset ||
        oldPageOffset < currentPageOffset && currentPageOffset < scrollStartOffset) {
        scrollStartOffset = oldPageOffset;
    }

    scrollVector = currentPageOffset - scrollStartOffset;

    var moveOffset = Math.max(-scrollVector, -showHideOffset);
    if (scrollVector < 0) {
        moveOffset = Math.max(scrollVector, 0);
    }

    var duration = '0s';
    if (Math.abs(moveOffset) === showHideOffset || moveOffset === 0) {
        duration = '0.3s';
    }

    move('.navbar')
        .set('top', moveOffset + 'px')
        .duration(duration)
        .end();
}

function scrollEnd () {
    var barPos = parseInt($('.navbar').css('top'));
    if (barPos < -showHideOffset / 2) {
        move('.navbar')
            .set('top', '-50px')
            .duration('0.3s')
            .end();
    } else {
        move('.navbar')
            .set('top', '0')
            .duration('0.3s')
            .end();
    }
    scrollVector = 0;
    scrollStartOffset = null;
}

function onBodySwipeLeft () {
    if(window.location.href.indexOf('post') !== -1) {
        move('.post')
            .x(200)
            .set('opacity', 0)
            .duration('0.2s')
            .end();
        window.history.back();
    } else {
        // scroll to top
        $('body').scrollTo(0, 400);
    }
}

function onAlsoLikeRight() {
    move('.also-like .entries')
        .sub('left', 180*2)
        .duration('0.4s')
        .end();
}

function onAlsoLikeLeft() {
    move('.also-like .entries')
        .add('left', 180*2)
        .duration('0.4s')
        .end();
}