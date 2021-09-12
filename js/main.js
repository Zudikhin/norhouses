$(document).ready(function () {
    "use strict";

    init();

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
        speed: 1000,
        slidesToScroll: 1,
        slidesToShow: 1,
        centerMode: true,
        nextArrow: $('.come_btn'),
        variableWidth: true
    });

    $(".come_slider").on("afterChange", function(event, slick, currentSlide, nextSlide) {
        var lengthSlider = $(".come_slider .slick-dots li").length;
        var widthPercent = (currentSlide*100)/lengthSlider;
        widthPercent = widthPercent + '%';
        $(".come_bar_tool").css("left", widthPercent);
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

    $(".husen_content_hero_item_btn").click(function() {
        $(".husen_content_hero_item").removeClass("active");
        $(this).parent().toggleClass("active");
    });

    $(document).click(function(e) {
        var container = $(".husen_content_hero_item");
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".husen_content_hero_item").removeClass("active");
        }
    });

    

    if ($(window).width() > 1199 ) {
        $(".come_slider_item").click(function() {
            $(this).toggleClass("active");
        });
    }

    $(".order_catalog_content_main input").focus(function() {
        $(this).addClass("focus");
    });

    $(".order_catalog_content_main input").focusout(function() {
        $(this).removeClass("focus");
    });

    $(".optional_catalog_content_main input").focus(function() {
        $(this).addClass("focus");
    });

    $(".optional_catalog_content_main input").focusout(function() {
        $(this).removeClass("focus");
    });

    $(".optional_catalog_content_design input").focus(function() {
        $(this).addClass("focus");
    });

    $(".optional_catalog_content_design input").focusout(function() {
        $(this).removeClass("focus");
    });

    $(".contact_us_block_form input").focus(function() {
        $(this).addClass("focus");
    });

    $(".contact_us_block_form input").focusout(function() {
        $(this).removeClass("focus");
    });

    $(".contact_us_block_form textarea").focus(function() {
        $(this).addClass("focus");
    });

    $(".contact_us_block_form textarea").focusout(function() {
        $(this).removeClass("focus");
    });

    $(document).on('change','#optionalChoice' , function() { 
        var text = this.files[0].name;
        $("#val").text(text);
    });


    $(".order_catalog_content_plot input").click(function() {
        $(".order_catalog_content_plot input").prop('checked', false);
        $(this).prop('checked', true);
    });

    $(".optional_catalog_content_building input").click(function() {
        $(".optional_catalog_content_building input").prop('checked', false);
        $(this).prop('checked', true);
    });

    $(".optional_catalog_content_design_checkboxes input").click(function() {
        $(".optional_catalog_content_design_checkboxes input").prop('checked', false);
        $(this).prop('checked', true);
    });

    $(".optional_catalog_content_type input").click(function() {
        $(".optional_catalog_content_type input").prop('checked', false);
        $(this).prop('checked', true);
    });

    function init() {
        $(".drawings_title select").select2({
          width: "100%",
          allowClear: false
        }).on('select2:open', function(e) {
          $('.select2-dropdown').hide();
          setTimeout(function() {
            jQuery('.select2-dropdown').slideDown(500);
          });
        }).on('select2:closing', function(e) {
          e.preventDefault();
          setTimeout(function() {
            jQuery('.select2-dropdown').slideUp(500, function() {
              close();
            });
          }, 0);
        });
      }
      
      function close() {
        $(".drawings_title select").select2('destroy');
        init();
    }

    $('.house_one_content_main_slider_block').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear'
    });

    $('.house_two_content_main_slider_block').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear'
    });

    $('.modal_house_one_slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        prevArrow: $('.modal_house_one_prev'),
        nextArrow: $('.modal_house_one_next'),
        cssEase: 'linear',
        fade: true
    });

    $('.modal_house_two_slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        prevArrow: $('.modal_house_two_prev'),
        nextArrow: $('.modal_house_two_next'),
        cssEase: 'linear',
        fade: true
    });

    $(".house_one_content_main_slider_open").click(function() {
        $(".modal_house_one").addClass("active");
        $("body").addClass("no_scroll");
        var dataId = $('.house_one_content_main_slider_block .slick-current').attr("data-slick-index");   
        $('.modal_house_one_slider').slick('slickGoTo', dataId);
    });

    $(".modal_house_one_back").click(function() {
        $(".modal_house_one").removeClass("active");
        $("body").removeClass("no_scroll");
        var dataId = $('.modal_house_one_slider .slick-current').attr("data-slick-index");   
        $('.house_one_content_main_slider_block').slick('slickGoTo', dataId);
    });

    $(".house_two_content_main_slider_open").click(function() {
        $(".modal_house_two").addClass("active");
        $("body").addClass("no_scroll");
        var dataId = $('.house_two_content_main_slider_block .slick-current').attr("data-slick-index");   
        $('.modal_house_two_slider').slick('slickGoTo', dataId);
    });

    $(".modal_house_two_back").click(function() {
        $(".modal_house_two").removeClass("active");
        $("body").removeClass("no_scroll");
        var dataId = $('.modal_house_two_slider .slick-current').attr("data-slick-index");   
        $('.house_two_content_main_slider_block').slick('slickGoTo', dataId);
    });

    $('.find_content_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        prevArrow: $('.find_content_bar_main_prev'),
        nextArrow: $('.find_content_bar_main_next'),
        cssEase: 'linear'
    });

    $(".find_content_next").click(function() {
        $(".find_content_slider").slick('slickNext');
    });

    $(".find_content_slider").on("afterChange", function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        var lengthSlider = $(".find_content_slider .slick-dots li").length;
        var widthPercent = (i*100)/lengthSlider;
        widthPercent = widthPercent + '%';
        $(".find_content_bar_count span").text("/ 0" + i);
        var textTitle = $(".find_content_slider .slick-current").find("h5").text();
        $(".find_content_bar_main span").text(textTitle);
        $(".find_content_bar_main_line_sticks").css("width", widthPercent);
    });


    $('.find_desktop_content_main_slider').slick({
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 2,
        speed: 500,
        prevArrow: $('.find_desktop_content_main_bar_line_prev'),
        nextArrow: $('.find_desktop_content_main_bar_line_next'),
        cssEase: 'linear'
    });

    $(".find_desktop_content_main_next").click(function() {
        $(".find_desktop_content_main_slider").slick('slickNext');
    });

    $(".find_desktop_content_main_slider").on("afterChange", function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        var lengthSlider = $(".find_desktop_content_main_slider .slick-dots li").length;
        var widthPercent = (i*100)/lengthSlider;
        widthPercent = widthPercent + '%';
        $(".find_desktop_content_main_bar_count span").text("/ 0" + i);
        var textTitle = $(".find_desktop_content_main_slider .slick-current").find("h5").text();
        $(".find_desktop_content_main_bar p").text(textTitle);
        $(".find_desktop_content_main_bar_line_tool_sticks").css("width", widthPercent);
    });

    $(".catalog_content_item .catalog_content_item_slider_list").each(function() {
        if($(this).children().length > 1) {
            $(this).slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                prevArrow: '<div class="catalog_content_item_slider_prev"><img src="img/search/arrow_prev.svg" alt=""></div>',
	            nextArrow: '<div class="catalog_content_item_slider_next"><img src="img/search/arrow_next.svg" alt=""></div>'
            });
        }
    });

    
    document.querySelectorAll(".search_content_calculator_space input").forEach(function(el) {       
        el.oninput = function() {            
        var valPercent = (el.valueAsNumber  - parseInt(el.min)) / 
                            (parseInt(el.max) - parseInt(el.min));
          var style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+ valPercent+', #CBA689), color-stop('+ valPercent+', transparent));';
          el.style = style;
        };
        el.oninput();
    });


    document.querySelectorAll(".search_content_calculator_price input").forEach(function(el) {       
        el.oninput = function() {            
        var valPercent = (el.valueAsNumber  - parseInt(el.min)) / 
                            (parseInt(el.max) - parseInt(el.min));
          var style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+ valPercent+', #CBA689), color-stop('+ valPercent+', transparent));';
          el.style = style;
        };
        el.oninput();
    });

    $(".search_content_calculator_drop").click(function() {
        $(this).toggleClass("active");
    });

    $(".search_content_calculator_drop_choice input").click(function() {
        $(".search_content_calculator_drop_choice input").prop('checked', false);
        $(this).prop('checked', true);
        var valText = $(this).siblings(".text").text();
        $(".search_content_calculator_drop p").text(valText);
    });

    $('#spaceRange').on('input', function() {
        var inputVal = $(this).val();
        $(".search_content_calculator_space_min").text(inputVal + 'm²');
    });


    $('#priceRange').on('input', function() {
        var inputVal = $(this).val();
        $(".search_content_calculator_price_min").text('DKK ' + inputVal);
    });

    

});