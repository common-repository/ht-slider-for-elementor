(function($){
"use strict";

  // Carousel Handler
    var WidgetHtsliderCarouselHandler = function ($scope, $) {

        var carousel_elem = $scope.find( '.htslider-carousel-activation' ).eq(0);
        if ( carousel_elem.length > 0 ) {
            var settings = carousel_elem.data('settings');
            var arrows = settings['arrows'];
            var dots = settings['dots'];
            var autoplay = settings['autoplay'];
            var autoplay_speed = parseInt(settings['autoplay_speed']) || 3000;
            var animation_speed = parseInt(settings['animation_speed']) || 300;
            var pause_on_hover = settings['pause_on_hover'];
            var center_mode = settings['center_mode'];
            var center_padding = settings['center_padding'] ? settings['center_padding']+'px' : '50px';
            var display_columns = parseInt(settings['display_columns']) || 1;
            var scroll_columns = parseInt(settings['scroll_columns']) || 1;
            var tablet_width = parseInt(settings['tablet_width']) || 800;
            var tablet_display_columns = parseInt(settings['tablet_display_columns']) || 1;
            var tablet_scroll_columns = parseInt(settings['tablet_scroll_columns']) || 1;
            var mobile_width = parseInt(settings['mobile_width']) || 480;
            var mobile_display_columns = parseInt(settings['mobile_display_columns']) || 1;
            var mobile_scroll_columns = parseInt(settings['mobile_scroll_columns']) || 1;
            var carousel_style_ck = parseInt( settings['carousel_style_ck'] ) || 1;
            var carousel_rtl = $('html').attr('dir') === 'rtl' ? true : false;

            if( carousel_style_ck == 4 ){
                carousel_elem.slick({
                    arrows: arrows,
                    prevArrow: $('<div />').append($scope.find('.htslider-carosul-prev').clone().show()).html(),
                    nextArrow: $('<div />').append($scope.find('.htslider-carosul-next').clone().show()).html(),
                    dots: dots,
                    customPaging: function( slick,index ) {
                        var data_title = slick.$slides.eq(index).find('.htslider-data-title').data('title');
                        return '<h6>'+data_title+'</h6>';
                    },
                    infinite: true,
                    autoplay: autoplay,
                    autoplaySpeed: autoplay_speed,
                    speed: animation_speed,
                    fade: false,
                    pauseOnHover: pause_on_hover,
                    slidesToShow: display_columns,
                    slidesToScroll: scroll_columns,
                    centerMode: center_mode,
                    centerPadding: center_padding,
                    rtl: carousel_rtl,
                    responsive: [
                        {
                            breakpoint: tablet_width,
                            settings: {
                                slidesToShow: tablet_display_columns,
                                slidesToScroll: tablet_scroll_columns
                            }
                        },
                        {
                            breakpoint: mobile_width,
                            settings: {
                                slidesToShow: mobile_display_columns,
                                slidesToScroll: mobile_scroll_columns
                            }
                        }
                    ]
                }).css({
                    visibility: 'visible', 
                    'height': 'initial'
                });
            }else{
                carousel_elem.slick({
                    arrows: arrows,
                    prevArrow: $('<div />').append($scope.find('.htslider-carosul-prev').clone().show()).html(),
                    nextArrow: $('<div />').append($scope.find('.htslider-carosul-next').clone().show()).html(),
                    dots: dots,
                    infinite: true,
                    autoplay: autoplay,
                    autoplaySpeed: autoplay_speed,
                    speed: animation_speed,
                    fade: false,
                    pauseOnHover: pause_on_hover,
                    slidesToShow: display_columns,
                    slidesToScroll: scroll_columns,
                    centerMode: center_mode,
                    centerPadding: center_padding,
                    rtl: carousel_rtl,
                    responsive: [
                        {
                            breakpoint: tablet_width,
                            settings: {
                                slidesToShow: tablet_display_columns,
                                slidesToScroll: tablet_scroll_columns
                            }
                        },
                        {
                            breakpoint: mobile_width,
                            settings: {
                                slidesToShow: mobile_display_columns,
                                slidesToScroll: mobile_scroll_columns
                            }
                        }
                    ]
                    
                }).css({
                    visibility: 'visible', 
                    'height': 'initial'
                });

            }


            // Slider Area Element Animation
            //var $sliderArea = $('.htslider-carousel-activation');
            var $sliderArea = carousel_elem;
            if ($sliderArea.length) {
                $sliderArea.each(function () {
                    var $this = $(this),
                        $singleSlideElem = $this.find('.slick-slide .elementor-widget-wrap .elementor-element');
                    function $slideElemAnimation() {
                        $singleSlideElem.each(function () {
                            var $this = $(this),
                                $thisSetting = $this.data('settings') ? $this.data('settings') : '',
                                $animationName = $thisSetting._animation,
                                $animationDelay = $thisSetting._animation_delay;
                            $this.removeClass('animated ' + $animationName).addClass('animated fadeOut');
                            if($this.closest('.slick-slide').hasClass('slick-current')) {
                                $this.removeClass('animated fadeOut').addClass('animated ' + $animationName).css({
                                    'animation-delay': $animationDelay+'s'
                                });
                            }
                        });
                    }
                    $slideElemAnimation();
                    $this.on('afterChange', function(slick, currentSlide){
                        $slideElemAnimation();
                    });
                    $this.on('beforeChange', function(slick, currentSlide){
                        $slideElemAnimation();
                    });
                    $this.on('init', function(slick){
                        $slideElemAnimation();
                    });
                });
            }
        }
    }
    
    // Run this code under Elementor.
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/htslider-postslider-addons.default', WidgetHtsliderCarouselHandler);
        elementorFrontend.hooks.addAction( 'frontend/element_ready/htsliderpro-addons.default', WidgetHtsliderCarouselHandler);

    });

})(jQuery);