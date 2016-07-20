# jquery.cookiefy
[![npm version](https://badge.fury.io/js/jquery.cookiefy.svg)](https://badge.fury.io/js/jquery.cookiefy)
[![Bower version](https://badge.fury.io/bo/jquery.cookiefy.svg)](https://badge.fury.io/bo/jquery.cookiefy)

Lightweight jQuery plugin to the EU cookie laws

**Demo: [kmarryo.github.io/jquery.cookiefy](https://kmarryo.github.io/jquery.cookiefy/)**

## Installation

1. Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:
    1. via bower: `bower install --save jquery.cookiefy`
    2. via npm: `npm install --save jquery.cookiefy`
    3. via CDN ([jsDelivr](http://www.jsdelivr.com/projects/jquery.cookiefy))
    4. via [downloaded files](https://github.com/kmarryo/jquery.cookiefy/zipball/master)

2. Include jquery.cookiefy in your HTML.
    1. When using bower
    ```html
    <script src="bower_components/jquery.cookiefy/dist/jquery.cookiefy.min.js"></script>
    ```
    2. When using npm
    ```html
    <script src="node_modules/jquery.cookiefy/dist/jquery.cookiefy.min.js"></script>
    ```
    3. When using CDN
    ```html
    <script src="//cdn.jsdelivr.net/jquery.cookiefy/1.0/jquery.cookiefy.min.js"></script>
    ```
    4. When using downloaded files
    ```html
    <script src="YOUR_PATH/jquery.cookiefy.min.js"></script>
    ```

## Usage

```JavaScript
$('body').cookiefy();
```

### Optional Parameters
Define your own text and styles for the eu-cookie warning.

| Name | Default | Sample | Description |
|---|---|---|---|
| **`displayedHtml`** | warning text* |  | You can insert your own cookie warning<br>text, e.g.with a link to your cookie policy site. |
| **`closeButtonUrl`** |   | `close-btn.png` | Change the close button. Valid parameters:<br>relative/absolute image url or base64 string  |
| **`backgroundColor`** | `#bebebe` | `tomato` | Changes the background-color of the<br>cookie-warning. |
| **`color`** | `#000` | `#fff` | Sets the color. |
| **`fontFamily`** | | `Helvetica` | Sets the font-family |
| **`fontSize`** |  | `1.25em` | Sets the font-size. |
| **`borderTop`** | `1px solid #000` | `2px dotted green` | Sets the border-top value. |
| **`cssPrefix`** | `cookiefy_` | `my-own-page_` | Set the css id prefix for all created DOM<br>elements and for the cookie name |
| **`devMode`** | `false`  | `true` | On `true` no cookie will be set and the warning<br>shows up every time you open the page.  |

*`We use cookies to ensure that we give you the best experience on our website. If you continue, you agree with <strong>our cookie policy</strong>.`

### Example
```JavaScript
$('body').cookiefy({
    backgroundColor: 'dimgray',
    color: 'ghostwhite',
    fontFamily: 'Helvetica',
    fontSize: '1rem',
    borderTop: '1px solid #000',
    closeButtonUrl: 'https://cdn3.iconfinder.com/data/icons/interface/100/close_button_1-512.png'
});
```

### Customize via CSS
You can style this three css ids:
- `#cookiefy_bar` (complete cookie message div)
- `#cookiefy_cookie-text`
- `#cookiefy_close` (close button)

# License
MIT