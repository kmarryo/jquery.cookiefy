# jquery.cookiefy
Lightweight jQuery plugin to the EU cookie laws

:warning: **work in process**

## Installation

1. Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:
    1. via bower: `bower install --save jquery.cookiefy`
    2. via npm: `npm install --save jquery.cookiefy`
    3. via [downloaded files](https://github.com/kmarryo/jquery.cookiefy/zipball/master)

2. Include jquery.cookiefy in your HTML.
    1. When using bower
    ```html
    <script src="bower_components/jquery.cookiefy/dist/jquery.cookiefy.min.js"></script>
    ```
    2. When using npm
    ```html
    <script src="node_modules/jquery.cookiefy/dist/jquery.cookiefy.min.js"></script>
    ```

    3. When using downloaded files
    ```html
    <script src="YOUR_PATH/jquery.cookiefy.min.js"></script>
    ```

## Usage

```JavaScript
$('body').cookiefy();
```

### Parameters
Define your own text and styles for the eu-cookie hint in the app.js. Set dev mode to false for going live.
* `devMode` (true/false)
* `backgroundColor`
* `color`
* `fontFamily`
* `fontSize`
* `borderTop`

### Example
```JavaScript
$('body').cookiefy({
    backgroundColor: '#ffffcc',
    color:'#404040',
    fontFamily: 'Trebuchet MS',
    fontSize: '13px',
    borderTop: '1px solid #404040'
});
```


# License
MIT