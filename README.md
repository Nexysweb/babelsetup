# Babel typescript setup



[![Travis build](https://travis-ci.com/Nexysweb/babelsetup.svg?branch=master)](https://travis-ci.com/Nexysweb/babelsetup)


## Usage

* `yarn add --dev @nexys/babelsetup`
* create `babel.config.js` with

```
const B = require('@nexys/babelsetup');

module.exports = B.BabelConfig;
```

the above can be extended with some extra custom configuration
