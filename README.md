# PostCSS Px To Prem [![Build Status][ci-img]][ci]

[PostCSS] plugin that introduces new "prem" & "pem" units to convert pixel units to rem/em (e.g. "24prem" —> "1.5rem").

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/samvk/postcss-px-to-prem.svg
[ci]:      https://travis-ci.org/samvk/postcss-px-to-prem

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-px-to-prem') ])
```

See [PostCSS] docs for examples for your environment.
