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

    $(".form_content_form form input").focus(function() {
        $(this).parent().addClass("focus");
    });

    $(".form_content_form form input").focusout(function() {
        $(this).parent().removeClass("focus");
    });

    $(".edit_item_wood button").click(function() {
        $(".edit").addClass("active");
        $(".edit_choice_wood").addClass("active");
        $(".edit_choice_window").removeClass("active");
    });

    $(".edit_item_window button").click(function() {
        $(".edit").addClass("active");
        $(".edit_choice_window").addClass("active");
        $(".edit_choice_wood").removeClass("active");
    });

    $(".edit_choice_wood_list input").click(function() {
        $(".edit_choice_wood_list input").prop('checked', false);
        $(this).prop('checked', true);
        var currentValue = $(this).val();
        var anotherValue = $(".edit_choice_window_list input:checked").val();
        $(".edit_images_item").removeClass("active");
        if(currentValue == 'wood_one' && anotherValue == 'window_one') {
            $(".edit_images .one_one").addClass("active");
        } else if (currentValue == 'wood_one' && anotherValue == 'window_two') {
            $(".edit_images .one_two").addClass("active");
        } else if (currentValue == 'wood_one' && anotherValue == 'window_three') {
            $(".edit_images .one_three").addClass("active");
        } else if (currentValue == 'wood_two' && anotherValue == 'window_one') {
            $(".edit_images .two_one").addClass("active");
        } else if (currentValue == 'wood_two' && anotherValue == 'window_two') {
            $(".edit_images .two_two").addClass("active");
        } else if (currentValue == 'wood_two' && anotherValue == 'window_three') {
            $(".edit_images .two_three").addClass("active");
        } else if (currentValue == 'wood_three' && anotherValue == 'window_one') {
            $(".edit_images .three_one").addClass("active");
        } else if (currentValue == 'wood_three' && anotherValue == 'window_two') {
            $(".edit_images .three_two").addClass("active");
        } else if (currentValue == 'wood_three' && anotherValue == 'window_three') {
            $(".edit_images .three_three").addClass("active");
        }
        $(".edit_choice_wood").removeClass("active");
        $(".edit").removeClass("active");
    });


    $(".edit_choice_window_list input").click(function() {
        $(".edit_choice_window_list input").prop('checked', false);
        $(this).prop('checked', true);
        var currentValue = $(this).val();
        var anotherValue = $(".edit_choice_wood_list input:checked").val();
        $(".edit_images_item").removeClass("active");
        if(anotherValue == 'wood_one' && currentValue == 'window_one') {
            $(".edit_images .one_one").addClass("active");
        } else if (anotherValue == 'wood_one' && currentValue == 'window_two') {
            $(".edit_images .one_two").addClass("active");
        } else if (anotherValue == 'wood_one' && currentValue == 'window_three') {
            $(".edit_images .one_three").addClass("active");
        } else if (anotherValue == 'wood_two' && currentValue == 'window_one') {
            $(".edit_images .two_one").addClass("active");
        } else if (anotherValue == 'wood_two' && currentValue == 'window_two') {
            $(".edit_images .two_two").addClass("active");
        } else if (anotherValue == 'wood_two' && currentValue == 'window_three') {
            $(".edit_images .two_three").addClass("active");
        } else if (anotherValue == 'wood_three' && currentValue == 'window_one') {
            $(".edit_images .three_one").addClass("active");
        } else if (anotherValue == 'wood_three' && currentValue == 'window_two') {
            $(".edit_images .three_two").addClass("active");
        } else if (anotherValue == 'wood_three' && currentValue == 'window_three') {
            $(".edit_images .three_three").addClass("active");
        }
        $(".edit_choice_window").removeClass("active");
        $(".edit").removeClass("active");
    });

    $('.come_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 1,
        centerMode: true,
        nextArrow: $('.come_btn'),
        variableWidth: true
    });

    $(".come_slider").on("afterChange", function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        var lengthSlider = $(".come_slider .slick-dots li").length;
        var widthPercent = (i*100)/lengthSlider;
        widthPercent = widthPercent + '%';
        $(".come_bar_tool").css("width", widthPercent);
    });

    var defaultWidthCome = 100/$(".come_slider .slick-dots li").length;
    defaultWidthCome = defaultWidthCome + '%';
    $(".come_bar_tool").css("width", defaultWidthCome);


    $(".come_slider .come_slider_item").mousemove(function(e){
        var parentOffset = $(this).offset(); 
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(".come_slider_item_cursor").css("top", relY);
        $(".come_slider_item_cursor").css("left", relX);
     });

     $(".drawings_title select").select2();

     $(".drawings_title select").on('change', function() {
        var currentVal = this.value;
        $(".drawings_content_item").removeClass("active");
        $(".drawings_content").find(`[data-target='${currentVal}']`).addClass("active");
     });

     $('.meet_slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        prevArrow: $('.meet_prev'),
        nextArrow: $('.meet_next'),
        cssEase: 'linear'
    });

});