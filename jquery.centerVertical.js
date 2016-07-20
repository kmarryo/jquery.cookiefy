(function ($) {
    $.fn.centerVertical = function (options) {
        
        var me = $(this);
        
        var settings = $.extend({
            navBarTop: false, // Selector oder Pixel
            navBarBottom: false, // Selector oder Pixel
            offset: false, // Selector, Pixel oder Prozentangaben z.b. "#home", 40, "20%"
            breakLimit: false, // Pixel oder Bootstrap/Foundation Klassen z.b. 640, "sm", "small"
            createResizeEvent: true,
            resizeEventTimeoutIntervall: 100,
        }, options);
        
        settings.outer = $.extend({
            selector: false,
            setToWindowHeight: true,
            offset: false, // Pixel oder Prozentangaben z.b. 40, "20%"
            breakLimit: false, // Pixel oder Bootstrap/Foundation Klassen z.b. 640, "sm", "small"
        }, settings.outer);
        
        settings.outer.menuAnchor = $.extend({
            anchorSelector: "#news",
            anchorOffset: 65,
        }, settings.outer.menuAnchor);
        
        if (settings.createResizeEvent) {
            $(window).bind("resize", function () {
                setTimeout(function () {
                    me.centerVertical({
                        navBarTop: settings.navBarTop,
                        navBarBottom: settings.navBarBottom,
                        offset: settings.offset,
                        breakLimit: settings.breakLimit,
                        createResizeEvent: false,
                        resizeEventTimeoutIntervall: false,
                        outer: {
                            selector: settings.outer.selector,
                            setToWindowHeight: settings.outer.setToWindowHeight,
                            offset: settings.outer.offset,
                            breakLimit: settings.outer.breakLimit,
                            menuAnchor: {
                                anchorSelector: settings.outer.menuAnchor.anchorSelector,
                                anchorOffset: settings.outer.menuAnchor.anchorOffset,
                            },
                        },
                    });
                }, settings.resizeEventTimeoutIntervall);
            });
        }
        
        var _cvClass = "CenterVertical";
        var _cvAnchorClass = "centerVertical-Anchor";
        
        if (me.parent().hasClass(_cvClass)) {
            me.unwrap();
        }
        
        var _windowHeight = $(window).height();
        var _contentHeight = me.height();
        var _outerHeight;
        
        
        if (
            cv.isWindowBigEnough(settings.outer.breakLimit)   //wenn das Fenster breit genug ist
            && settings.outer.selector                          //und wenn der outer.selector gesetzt ist
            && $(settings.outer.selector).length > 0            //und wenn das object mit dem outer.selector auch vorhanden ist
        ) {
            
            var _navBarTopHeight = 0;
            var _navBarBottomHeight = 0;
            
            if (settings.outer.setToWindowHeight) {
                
                var _windowOffset = 0;
                var _windowOffsetPercent = false;
                
                if (settings.navBarTop) {
                    if ($.isNumeric(settings.navBarTop)) {
                        _navBarTopHeight = parseInt(settings.navBarTop);
                    } else {
                        if ($(settings.navBarTop).length > 0) {
                            _navBarTopHeight = $(settings.navBarTop).height();
                        }
                    }
                }
                
                if (settings.navBarBottom) {
                    if ($.isNumeric(settings.navBarBottom)) {
                        _navBarBottomHeight = parseInt(settings.navBarBottom);
                    } else {
                        if ($(settings.navBarBottom).length > 0) {
                            _navBarBottomHeight = $(settings.navBarBottom).height();
                        }
                    }
                }
                
                if (settings.outer.offset) {
                    if ($.type(settings.outer.offset) === "string") {
                        if (settings.outer.offset.match(/%/)) {
                            
                            _windowOffset = parseInt(settings.outer.offset.replace("%", ""));
                            _windowOffsetPercent = true;
                        } else {
                            try {
                                if ($(settings.outer.offset).length > 0) {
                                    _windowOffset = $(settings.outer.offset).height();
                                }
                            } catch (e) {
                            }
                        }
                    }
                    
                    if ((!_windowOffset) && $.isNumeric(settings.outer.offset)) {
                        _windowOffset = parseInt(settings.outer.offset);
                    }
                }
                
                _outerHeight = parseInt(_windowHeight - _navBarTopHeight - _navBarBottomHeight);
                
                if (_windowOffsetPercent) {
                    _windowOffset = parseInt(_outerHeight / 100 * _windowOffset);
                }
                
                _outerHeight -= _windowOffset;
                
                $(settings.outer.selector).css("min-height", _outerHeight + "px");
            }
            
            if (settings.outer.menuAnchor.anchorSelector && ($.type(settings.outer.menuAnchor.anchorSelector) === "string")) {
                
                if (!$(settings.outer.menuAnchor.anchorSelector).length > 0) {
                    
                    var _anchorSelector = false;
                    var _anchorOffset = false;
                    
                    if ($.type(settings.outer.menuAnchor.anchorSelector) === "string" && settings.outer.menuAnchor.anchorSelector.match(/#/)) {
                        _anchorSelector = settings.outer.menuAnchor.anchorSelector.substring(1, settings.outer.menuAnchor.anchorSelector.length);
                    } else {
                        _anchorSelector = settings.outer.menuAnchor.anchorSelector;
                    }
                    
                    if (_anchorSelector) {
                        if (settings.outer.menuAnchor.anchorOffset) {
                            if ($.type(settings.outer.menuAnchor.anchorOffset) === "string") {
                                try {
                                    if ($(settings.outer.menuAnchor.anchorOffset).length > 0) {
                                        _anchorOffset = $(settings.outer.menuAnchor.anchorOffset).height();
                                    }
                                } catch (e) {
                                }
                            }
                            
                            if ((!_anchorOffset) && $.isNumeric(settings.outer.menuAnchor.anchorOffset)) {
                                _anchorOffset = parseInt(settings.outer.menuAnchor.anchorOffset);
                            }
                        }
                        
                        var _anchor = $("<div/>", {
                            id: _anchorSelector,
                            class: _cvAnchorClass,
                        });
                        
                        if (_anchorOffset) {
                            _anchor.css("visibility", "visible", "important");
                            _anchor.css("position", "relative");
                            _anchor.css("top", -_anchorOffset);
                        }
                        
                        $(settings.outer.selector).before(_anchor);
                    }
                }
            }
        } else {
            $(settings.outer.selector).css("min-height", "0");
        }
        
        if (cv.isWindowBigEnough(settings.breakLimit)) {
            
            _outerHeight = $(settings.outer.selector).height();
            
            var _offsetPercent = false;
            var _offset;
            
            if (settings.offset) {
                if ($.type(settings.offset) === "string") {
                    if (settings.offset.match(/%/)) {
                        
                        _offset = parseInt(settings.offset.replace("%", ""));
                        _offsetPercent = true;
                    } else {
                        try {
                            if ($(settings.offset).length > 0) {
                                _offset = $(settings.offset).height();
                            }
                        } catch (e) {
                        }
                    }
                }
                
                if ((!_offset) && $.isNumeric(settings.offset)) {
                    _offset = parseInt(settings.offset);
                }
            }
            
            var _abstand = parseInt((_outerHeight - _contentHeight) / 2);
            
            if (_offsetPercent) {
                _offset = parseInt(_abstand / 100 * _offset);
            }
            
            if (_offset) {
                _abstand -= parseInt(_offset);
            }
            
            me.wrap($("<div/>", {
                class: _cvClass,
            }).css("padding-top", _abstand));
        }
        
    };
    
    
}(jQuery));

var cv = {
    isWindowBigEnough: function (breakLimit) {
        var _windowWidth = $(window).width();
        
        // Mache nix, wenn Breaklimit definiert ist, und die aktuelle Bildschirmbreite kleiner gleich dem breaklimit ist
        var _breakLimit;
        if (breakLimit) {
            if ($.isNumeric(breakLimit)) {
                _breakLimit = parseInt(breakLimit);
            } else {
                switch (breakLimit) {
                    // bootstrap classes
                    case "xs":
                        _breakLimit = 767;
                        break;
                    
                    case "sm":
                        _breakLimit = 991;
                        break;
                    
                    case "md":
                        _breakLimit = 1199;
                        break;
                    
                    // foundation classes
                    case "small":
                        _breakLimit = 640;
                        break;
                    
                    case "medium":
                        _breakLimit = 1024;
                        break;
                    
                    case "large":
                        _breakLimit = 1440;
                        break;
                }
            }
        }
        
        if (_breakLimit && _windowWidth <= _breakLimit) {
            return false
        }
        return true;
    }
};