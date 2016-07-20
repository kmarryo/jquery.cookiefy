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
});