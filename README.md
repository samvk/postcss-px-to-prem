# PostCSS Px To Prem

[PostCSS]: https://github.com/postcss/postcss

[PostCSS] plugin that introduces new "prem" & "pem" units to convert pixel units to rem/em (e.g. "24prem" —> "1.5rem").

## Synopsis

I created this for two simple reasons:

1. Everyone on my team knows what `28px` roughly looks like. Not so much `1.75rem`.
2. It's how we measure things for the screens. More often than not I simply determine what I need in pixels, then convert it to `rem`.

#### Developer Notes

Value still need to be adjusted based on font-size relatives, just like rems and ems. There is no dark magic being done here, it is simply allowing you to write rems and ems as pixel values off a baseline (default: 16), which most of us are more familiar with. No more rounding `rem`s to the thousandths place.

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

## Usage

```js
'postcss-px-to-prem': {
    baseline: 16, // default
}
```

See [PostCSS] docs for examples for your environment.
