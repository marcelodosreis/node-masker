<h1 align="center">
  Node Masker 🎭
</h1>

[![Coverage Status](https://coveralls.io/repos/github/marcelodosreis/node-masker/badge.svg?branch=main&t=hJ0bvK)](https://coveralls.io/github/marcelodosreis/node-masker?branch=main)
</br>
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)

## Install

```
yarn add node-masker
```

## Usage

```js
import { mask } from 'node-masker'

const value = 'ABC1C83'
const pattern = 'AAA - 9S99'

mask(value, pattern)
// ABC - 1C83
```

Pattern can be a pattern array, so remask choose one pattern based on pattern/value length match

```js
const patterns = ['999.999.999-99', '99.999.999/9999-99']

mask('12345678901', patterns) // gets firts pattern (999.999.999-99)
// 123.456.789-01

mask('12345678000106', patterns) // gets second pattern (99.999.999/9999-99)
// 12.345.678/0001-06
```

## License

MIT © [Marcelo dos Reis](https://marcelodosreis.com)
