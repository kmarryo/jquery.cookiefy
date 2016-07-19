// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ($, window, document, undefined) {
    "use strict";
    
    // Create the defaults once
    var pluginName = 'cookiefy',
        defaults = {
            devMode: false,
            backgroundColor: '#bebebe',
            color: '#000',
            fontFamily: undefined,
            fontSize: undefined,
            borderTop: '1px solid #000',
            displayedHtml: 'We use cookies to ensure that we give you the best experience on our website. If you continue, you agree with <strong>our cookie policy</strong>.',
            cssPrefix: pluginName + '_',
        };
    
    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend(defaults, options);
        
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }
    
    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        init: function () {
            var settings = this.settings;
            var me = this.element;
            
            var defaultCssObject = {
                width: "100%",
                display: "none",
                position: "fixed",
                bottom: 0,
                left: 0,
                opacity: 0.9,
                padding: '15px 0',
                textAlign: 'center',
                backgroundColor: settings.backgroundColor,
                color: settings.color,
                borderTop: settings.borderTop,
                boxShadow: '0px 1px 4px 1px rgba(64,64,64,1)'
            };
            
            if (typeof settings.fontFamily !== "undefined") {
                defaultCssObject.fontFamily = settings.fontFamily;
            }
            
            if (typeof settings.fontSize !== "undefined") {
                defaultCssObject.fontSize = settings.fontSize;
            }
            
            // Style cookie div
            var footerElement = $('<div />', {
                id: settings.cssPrefix + 'bar',
                css: defaultCssObject,
            });

            var createOverlay = function () {
                var textElement = $('<div/>', {
                    html: settings.displayedHtml,
                    id: settings.cssPrefix + 'cookie-text',
                    css: {
                        paddingLeft: '15%',
                        paddingRight: '15%'
                    }
                });
                
                var closeButton = $('<div/>', {
                    id: settings.cssPrefix + "close",
                    css: {
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        background: "url('images/close-grey-xs.png') no-repeat",
                        position: 'absolute',
                        top: '50%',
                        right: '25px',
                        width: '30px',
                        height: '30px',
                        transform: 'translateY(-50%)'
                    }
                }).on('click', function () {
                    hideOverlay();
                });
                
                
                footerElement.append(textElement);
                footerElement.append(closeButton);
                footerElement.find( "a" ).css( "text-decoration", "underline" );
                
                $(me).append(footerElement);
                
            };
            var showOverlay = function () {
                footerElement.fadeIn(500);
                
            };
            var hideOverlay = function () {
                footerElement.fadeOut(500, function () {
                    $(this).remove();
                });
            };
            
            var createCookie = function () {
                set_cookie(settings.cssPrefix + "cookie", true);
            };
            
            var readCookie = function () {
                return get_cookie(settings.cssPrefix + "cookie");
            };
            
            
            if (settings.devMode || !readCookie()) {
                createCookie();
                createOverlay();
                showOverlay();
            }
        },
    });
    
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" +
                    pluginName, new Plugin(this, options));
            }
        });
    };
    
})(jQuery, window, document);