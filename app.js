$(function () {
    $('body').cookiefy({
        devMode: true, // On true no cookie will be set and the warning shows up every time you open the page.
        displayedHtml: 'We use cookies to ensure that we give you the best experience on our website. If you continue, you agree with our <a href="#"> cookie policy</a>.',
        backgroundColor: '#5bc0de',
        color:'#fff',
        fontFamily: 'Trebuchet MS',
        fontSize: '14px',
        borderTop: '1px solid #404040',
        closeButtonUrl: 'close-white.png'
    });
    
    
    $("#inner").centerVertical({
        navBarTop : false, // Selector oder Pixel-Anzahl z.b. "#navbar-top", 120 oder false
        navBarBottom : false, // Selector oder Pixel-Anzahl z.b. "navbar-bottom", 65 oder false
        offset : false, // Abstand relativ von der Mitte // Selector, Pixel-Anzahl oder Prozentangaben z.b. "#home", 40, "20%" oder false
        breakLimit : false, // Pixel-Anzahl oder Bootstrap/Foundation Klassen z.b. 640, "sm", "small" oder false
        createResizeEvent : true,
        outer : {
            selector : "#home", // false oder Selector
            setToWindowHeight : true,
            offset : false, // Selector, Pixel-Anzahl oder Prozentangaben z.b. "#home", 40, "20%" oder false
            breakLimit : false, // Pixel-Anzahl oder Bootstrap/Foundation Klassen z.b. 640, "sm", "small" oder false
            menuAnchor : {
                anchorSelector : false, // Ein String erzeugt ein neues DIV mit dieser ID z.b. "#news, "news" oder false
                anchorOffset : false, // Selector oder Pixel-Anzahl zb. "#navbar-top", 65 oder false
            },
        },
    });
    
    $().centerVertical({
        navBarTop : "#navbar", // Selector oder Pixel-Anzahl z.b. "#navbar-top", 120 oder false
        navBarBottom : false, // Selector oder Pixel-Anzahl z.b. "navbar-bottom", 65 oder false
        offset : false, // Abstand relativ von der Mitte // Selector, Pixel-Anzahl oder Prozentangaben z.b. "#home", 40, "20%" oder false
        breakLimit : false, // Pixel-Anzahl oder Bootstrap/Foundation Klassen z.b. 640, "sm", "small" oder false
        createResizeEvent : true,
        outer : {
            selector : "#information-outer", // false oder Selector
            setToWindowHeight : false,
            offset : false, // Selector, Pixel-Anzahl oder Prozentangaben z.b. "#home", 40, "20%" oder false
            breakLimit : false, // Pixel-Anzahl oder Bootstrap/Foundation Klassen z.b. 640, "sm", "small" oder false
            menuAnchor : {
                anchorSelector : "information", // Ein String erzeugt ein neues DIV mit dieser ID z.b. "#news, "news" oder false
                anchorOffset : 90, // Selector oder Pixel-Anzahl zb. "#navbar-top", 65 oder false
            },
        },
    });
    
    $().centerVertical({
        navBarTop : "#navbar", // Selector oder Pixel-Anzahl z.b. "#navbar-top", 120 oder false
        navBarBottom : false, // Selector oder Pixel-Anzahl z.b. "navbar-bottom", 65 oder false
        offset : false, // Abstand relativ von der Mitte // Selector, Pixel-Anzahl oder Prozentangaben z.b. "#home", 40, "20%" oder false
        breakLimit : false, // Pixel-Anzahl oder Bootstrap/Foundation Klassen z.b. 640, "sm", "small" oder false
        createResizeEvent : true,
        outer : {
            selector : "#installation-outer", // false oder Selector
            setToWindowHeight : false,
            offset : false, // Selector, Pixel-Anzahl oder Prozentangaben z.b. "#home", 40, "20%" oder false
            breakLimit : false, // Pixel-Anzahl oder Bootstrap/Foundation Klassen z.b. 640, "sm", "small" oder false
            menuAnchor : {
                anchorSelector : "installation", // Ein String erzeugt ein neues DIV mit dieser ID z.b. "#news, "news" oder false
                anchorOffset : 90, // Selector oder Pixel-Anzahl zb. "#navbar-top", 65 oder false
            },
        },
    });
    
    $().centerVertical({
        navBarTop : "#navbar", // Selector oder Pixel-Anzahl z.b. "#navbar-top", 120 oder false
        navBarBottom : false, // Selector oder Pixel-Anzahl z.b. "navbar-bottom", 65 oder false
        offset : false, // Abstand relativ von der Mitte // Selector, Pixel-Anzahl oder Prozentangaben z.b. "#home", 40, "20%" oder false
        breakLimit : false, // Pixel-Anzahl oder Bootstrap/Foundation Klassen z.b. 640, "sm", "small" oder false
        createResizeEvent : true,
        outer : {
            selector : "#usage-outer", // false oder Selector
            setToWindowHeight : false,
            offset : false, // Selector, Pixel-Anzahl oder Prozentangaben z.b. "#home", 40, "20%" oder false
            breakLimit : false, // Pixel-Anzahl oder Bootstrap/Foundation Klassen z.b. 640, "sm", "small" oder false
            menuAnchor : {
                anchorSelector : "usage", // Ein String erzeugt ein neues DIV mit dieser ID z.b. "#news, "news" oder false
                anchorOffset : 90, // Selector oder Pixel-Anzahl zb. "#navbar-top", 65 oder false
            },
        },
    });
    
    
    $().centerVertical({
        navBarTop : "#navbar", // Selector oder Pixel-Anzahl z.b. "#navbar-top", 120 oder false
        navBarBottom : false, // Selector oder Pixel-Anzahl z.b. "navbar-bottom", 65 oder false
        offset : false, // Abstand relativ von der Mitte // Selector, Pixel-Anzahl oder Prozentangaben z.b. "#home", 40, "20%" oder false
        breakLimit : false, // Pixel-Anzahl oder Bootstrap/Foundation Klassen z.b. 640, "sm", "small" oder false
        createResizeEvent : true,
        outer : {
            selector : "#example-outer", // false oder Selector
            setToWindowHeight : false,
            offset : false, // Selector, Pixel-Anzahl oder Prozentangaben z.b. "#home", 40, "20%" oder false
            breakLimit : false, // Pixel-Anzahl oder Bootstrap/Foundation Klassen z.b. 640, "sm", "small" oder false
            menuAnchor : {
                anchorSelector : "example", // Ein String erzeugt ein neues DIV mit dieser ID z.b. "#news, "news" oder false
                anchorOffset : 90, // Selector oder Pixel-Anzahl zb. "#navbar-top", 65 oder false
            },
        },
    });
});