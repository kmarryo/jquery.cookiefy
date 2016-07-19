# jquery.cookiefy
Lightweight jQuery plugin to the EU cookie laws

**Demo: https://kmarryo.github.io/jquery.cookiefy/**

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
Define your own text and styles for the eu-cookie warning.

| Name | Default | Sample | Description |
|---|---|---|---|
| `displayedHtml` | warning text* |  | You can insert your own cookie warning text, e.g. with<br> a link to your cookie policy site. |
| `backgroundColor` | `#bebebe` | `tomato` | Changes the background-color of the cookie-warning. |
| `color` | `#000` | `#fff` | Sets the color. |
| `fontFamily` | | `Helvetica` | Sets the font-family |
| `fontSize` |  | `1.25em` | Sets the font-size. |
| `borderTop` | `1px solid #000` | `2px dotted green` | Sets the border-top value. |
| `devMode` | `false`  |  | On `true` no cookie will be set and the warning shows up<br> every timeyou open the page.  |

*`We use cookies to ensure that we give you the best experience on our website. If you continue, you agree with <strong>our cookie policy</strong>.`

### Example
```JavaScript
$('body').cookiefy({
    backgroundColor: 'dimgray',
    color:'ghostwhite',
    fontFamily: 'Helvetica',
    fontSize: '1rem',
    borderTop: '1px solid #000'
});
```


# License
MIT