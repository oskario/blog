'use strict';

$(document).ready(function () {
    parseDates();

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
    $(".also-like .entry").click(onAlsoLikeEntryClick);
});

function parseDates () {
    $('.date').each(function () {
        var newDate = moment($(this).html()).format("dddd, MMMM Do YYYY");
        $(this).html(newDate);
    });
}

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

function calcAlsoLikeOffset (left) {
    var viewportWidth = $('.also-like').width();
    var current = parseInt($('.also-like .entries').css('left'));
    var width = $('.also-like .entries .entry').width() + 15;
    var count = $('.also-like .entries .entry').size();
    var offset = parseInt(viewportWidth / width) * width;
    var max = 15;
    var min = -(count * width - viewportWidth);
    var newOffset = left ? (current + offset) : (current - offset);

    if (newOffset < min) {
        return min - current;
    } else if (newOffset > max) {
        return max - current;
    } else {
        return newOffset - current;
    }
}

function onAlsoLikeRight () {
    move('.also-like .entries')
        .add('left', calcAlsoLikeOffset(false))
        .duration('0.4s')
        .end();
}

function onAlsoLikeLeft () {
    move('.also-like .entries')
        .add('left', calcAlsoLikeOffset(true))
        .duration('0.4s')
        .end();
}

function onAlsoLikeEntryClick () {
//    move($(this))
//        .set('opacity', 0)
//        .end();
}