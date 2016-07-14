// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ($, window, document, undefined) {
    "use strict";

    // Create the defaults once
    var pluginName = 'cookiefy',
        defaults = {
            color: '#000',
            fontFamily: 'Arial',
            devMode: false
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


            var cssPrefixer = 'cookiefy_';
            // Style cookie div
            var footerElement = $('<div />', {
                css: {
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
                    fontFamily: settings.fontFamily,
                    fontSize: settings.fontSize,
                    borderTop: settings.borderTop,
                    boxShadow: '0px 1px 4px 1px rgba(64,64,64,1)'
                },
            });

            var createOverlay = function () {
                var cookieText = 'Diese Seite verwendet sowohl eigene als auch Cookies von Dritten, um Ihnen den bestmöglichen Service zu gewährleisten. Wenn Sie auf unseren Seiten surfen, stimmen Sie der Nutzung von Cookies zu.';
                var textElement = $('<div/>', {
                    html: cookieText,
                    id: 'cookie-text',
                    css: {
                        paddingLeft: '15%',
                        paddingRight: '15%'
                    }
                });

                var closeButton = $('<div/>', {
                    id: cssPrefixer + "close",
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
                }).on('click', function() {
                    hideOverlay();
                });


                footerElement.append(textElement);
                footerElement.append(closeButton);

                $(me).append(footerElement);

            };
            var showOverlay = function () {
                footerElement.fadeIn(500);

            };
            var hideOverlay = function () {
                footerElement.fadeOut(500, function() {
                    $(this).remove();
                });
            };

            var createCookie = function () {
                set_cookie(cssPrefixer, true);
            };

            var readCookie = function () {
                return get_cookie(cssPrefixer);
            };


            if(settings.devMode || !readCookie()) {
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