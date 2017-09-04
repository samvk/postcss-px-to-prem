# PostCSS Px To Prem [![Build Status][ci-img]][ci]

[PostCSS] plugin that introduces new "prem" & "pem" units to convert pixel units to rem/em (e.g. "24prem" —> "1.5rem").

There is no dark magic being done here, it is simply allowing you to write `em`s and `rem`s as pixel values with a baseline (default: 16), which most of us are more familiar with — and doesn't require you to round to the thousandths place. 24pe

I created this for two simple reasons:

1. We all

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/samvk/postcss-px-to-prem.svg
[ci]:      https://travis-ci.org/samvk/postcss-px-to-prem


## Example

Input:

```css
.foo {
    padding: 16prem;
    margin: 24pem;
}
```

Output:

```css
/* assuming a 16px baseline */
.foo {
    padding: 1rem;
    margin: 1.5em;
}
```

**_Note: This plugin is _**

## Usage

```js
postcss([ require('postcss-px-to-prem') ])
```

See [PostCSS] docs for examples for your environment.
