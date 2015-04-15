meta-markdown-loader
===============

markdown loader for webpack with meta data support


## Usage 

```javascript
var html = require("html!meta-markdown!./README.md");
```

## Recommended Configuration

Best served with html-loader. 

```javascript
{
    module: {
        loaders: {
            { test: /\.md$/, loader: "html!meta-markdown" },
        ]
    }
}
```
