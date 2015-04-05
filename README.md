# typographic-apostrophes

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> [Make sure they’re curly and point downward][rtfm]

Micro module to help eliminate one of the [bad typewriter habits][habits].


## Install

```sh
npm install --save typographic-apostrophes
```


## Usage

Use typographic apostrophes in con­trac­tions and for pos­ses­sive case. This module don't cover posessive cases in plurals, because it’s hard to distinguish it from single closing quote.

```js
var apostrophes = require('typographic-apostrophes');

apostrophes(`I'm looking forward`);        // `I’m looking forward`
apostrophes(`Don't do it!`);               // `Don’t do it!`
apostrophes(`as in the eagle's feathers`); // `as in the eagle’s feathers`
apostrophes(`in one month's time`);        // `in one month’s time`
apostrophes(`'60s and '80s`);              // `’60s and ’80s`
apostrophes(`rock'n'roll`);                // `rock’n’roll`
apostrophes(`rock 'n' roll`);              // `rock ’n’ roll`
```


## License

MIT © [Vladimir Starkov](http://vstarkov.com/)

[rtfm]: practicaltypography.com/apostrophes.html
[habits]: http://practicaltypography.com/typewriter-habits.html

[npm-url]: https://npmjs.org/package/typographic-apostrophes
[npm-image]: http://img.shields.io/npm/v/typographic-apostrophes.svg

[travis-url]: https://travis-ci.org/matmuchrapna/typographic-apostrophes
[travis-image]: http://img.shields.io/travis/matmuchrapna/typographic-apostrophes.svg

[coveralls-url]: https://coveralls.io/r/matmuchrapna/typographic-apostrophes
[coveralls-image]: http://img.shields.io/coveralls/matmuchrapna/typographic-apostrophes.svg

[depstat-url]: https://david-dm.org/matmuchrapna/typographic-apostrophes
[depstat-image]: https://david-dm.org/matmuchrapna/typographic-apostrophes.svg

[depstat-dev-url]: https://david-dm.org/matmuchrapna/typographic-apostrophes
[depstat-dev-image]: https://david-dm.org/matmuchrapna/typographic-apostrophes/dev-status.svg