/**
 * jquery.cookiefy - Lightweight jQuery plugin to the EU cookie laws
 * @version v0.1.0 (2016-07-14 17:32:13)
 * @documentation https://github.com/kmarryo/jquery.cookiefy#readme
 * @author Mario Lemke
 */
//Set a Cookie
function set_cookie(c_name, value, exdays) {
    if (typeof (exdays) == 'undefined') {
        exdays = '360';
    }
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);

    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
};
//Get a Cookie
function get_cookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
    return false;
};
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
                        background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhEMDlCQjc1NDhERTExRTZBMjFGRDg4QTdCRjRGQkI5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhEMDlCQjc2NDhERTExRTZBMjFGRDg4QTdCRjRGQkI5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEQwOUJCNzM0OERFMTFFNkEyMUZEODhBN0JGNEZCQjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEQwOUJCNzQ0OERFMTFFNkEyMUZEODhBN0JGNEZCQjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5INC8kAAACN0lEQVR42rSXvUscQRjGdfxCtNN0CqtgYeSM0bP28KOQeEqKxCZi418gpFKiYCmpU6ioCOJXYYISxcIP8ANUkISYKqdwiSZocyCBFFGfgXfhZZnxZnbOgd9x+97uPLPvPjsPlx2LxbJo9IBdkMh6vPEWNILXAh9VYAxMg3lQ80iibeAdeAVGpPA46APZIAq2QEOGRbvACiim40EpPAP+sZNKwQKIZEj0BXUyn9U2/TuWK7plP1SCVfDUUbSVRAtY7QS8EXSwTubi4uXU9qhDe+Xii1htH0g3XwhWnAXd4IbVnoBFUGsp2qFo76F0M0jJAxG4YAk0g5+s5tHKqy3cO6dob5zPKxQXHpIhzlmtDGwbuN13L2/vHrX3Dz9RaCb4Qu/blaLtEQv3HtHjSwVPFg+s/ohWmmS1Co3b2zTujQcem5GwHKd0J4mA23fAc3anuvb+1k0sDMzyldx4zWolYBL0g6mH3OsiLMexou3PwHva6Xh7O8GvdBMKi3fzG2gHB4rf7sDHdO0NK+yLTyjq/8Fouva6CLeAIUU9F3ywiVQbYbk5fKbNRDUiNpFqKuxvDnmstgFegh9hItVEWBdtvWCZOpG0jVRh0F5dtF0yw8mOnNlEqnCJtsAmo9vba22EjaJNsck0mUaqcIk2xfhuGqnCJdpcIlW4RJtLpPrC8TDR5hCp9VJ42MK9tkMXqROC3rXCMNFmGan8cdXleJ73CV/+kuvWaRu8zvBfGGm0NQoR6aGBewEGAG5JmYODvoEQAAAAAElFTkSuQmCC) no-repeat",
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