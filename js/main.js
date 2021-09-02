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


    $('.every_content_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        prevArrow: $('.every_content_bar_main_prev'),
        nextArrow: $('.every_content_bar_main_next'),
        cssEase: 'linear'
    });

    $('.every_desktop_content_main_slider').slick({
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 2,
        speed: 500,
        prevArrow: $('.every_desktop_content_main_bar_line_prev'),
        nextArrow: $('.every_desktop_content_main_bar_line_next'),
        cssEase: 'linear'
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

    $(".every_content_next").click(function() {
        $(".every_content_slider").slick('slickNext');
    });

    $(".every_desktop_content_main_next").click(function() {
        $(".every_desktop_content_main_slider").slick('slickNext');
    });

    $(".every_content_slider").on("afterChange", function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        var lengthSlider = $(".every_content_slider .slick-dots li").length;
        var widthPercent = (i*100)/lengthSlider;
        widthPercent = widthPercent + '%';
        $(".every_content_bar_count span").text("/ 0" + i);
        var textTitle = $(".every_content_slider .slick-current").find("h5").text();
        $(".every_content_bar_main span").text(textTitle);
        $(".every_content_bar_main_line_sticks").css("width", widthPercent);
    });

    $(".every_desktop_content_main_slider").on("afterChange", function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        var lengthSlider = $(".every_desktop_content_main_slider .slick-dots li").length;
        var widthPercent = (i*100)/lengthSlider;
        widthPercent = widthPercent + '%';
        $(".every_desktop_content_main_bar_count span").text("/ 0" + i);
        var textTitle = $(".every_desktop_content_main_slider .slick-current").find("h5").text();
        $(".every_desktop_content_main_bar p").text(textTitle);
        $(".every_desktop_content_main_bar_line_tool_sticks").css("width", widthPercent);
    });

});