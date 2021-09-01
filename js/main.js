$(document).ready(function () {
    "use strict";

    $(".header_content_btn").click(function() {
        $(this).toggleClass("active");
        $(".header_dropdown").toggleClass("active");
        $("html").toggleClass("no_scroll");
        $("body").toggleClass("no_scroll");
    });

    $('.home_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        prevArrow: $('.home_content_desktop_top_left_feature_item_bottom'),
        nextArrow: $('.home_content_desktop_top_left_feature_item_top'),
        cssEase: 'linear'
    });

    $(".home_slider").on("afterChange", function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        var lengthSlider = $(".home_slider_item").length;
        var widthPercent = (i*100)/lengthSlider;
        widthPercent = widthPercent + '%';
        $(".home_content_desktop_top_left_feature_item_strip").css("width", widthPercent);
    });

    $('.reason_slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 1,
        centerMode: true,
        prevArrow: $('.reason_bar_prev'),
        nextArrow: $('.reason_bar_next'),
        variableWidth: true
      });

      $(".reason_slider").on("afterChange", function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        var lengthSlider = $(".reason_slider_item").length;
        var widthPercent = (i*100)/lengthSlider;
        widthPercent = widthPercent + '%';
        $(".reason_bar_item_strip").css("width", widthPercent);
    });

    $(".footer_content_mobile_top_btn").click(function() {
        $(this).toggleClass("active");
        $(".footer_dropdown").toggleClass("active");
    });

});