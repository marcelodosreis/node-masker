<h1 align="center">
  <br>
  <img src="https://i.imgur.com/GbdQ8tC.png" alt="Rocketseat and Gatsby" width="260">
</h1>

<h4 align="center">Node-masker is a javascript mask library made in <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> ⚡️🔥</h4>

<p align="center">
  <img src="https://coveralls.io/repos/github/marcelodosreis/node-masker/badge.svg?branch=main&t=hJ0bvK" />
  <img src="https://img.shields.io/npm/v/node-masker.svg" />
  <img src="https://img.shields.io/github/license/marcelodosreis/node-masker.svg" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" />
  <br />
  <img src="https://nodei.co/npm/node-masker.png">
  <br />
  <img src="https://media.giphy.com/media/AMlJ03rEglc3JtHeLI/giphy.gif">
</p>

<!-- <p align="center">
  <a href="#install">Install</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#need-help">Need help?</a> •
  <a href="#license">License</a>
</p> -->

## Suport
| Technology            |         Status            |
| :-------------------- | :-----------------------: |
| [Node](Node)          |      Done ✅              |
| [React](React)        |      Done ✅              |
| [Angular](Angular)    |Working in Progress ⚒️      |
| [Vue](Vue)            |Working in Progress ⚒️      |

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

### More Examples

``` javascript
import { mask } from 'node-masker'

// Converts value to masked phone
mask(1099911111, "(99) 9999-9999"); // -> (10) 9991-1111
// Converts value to masked date
mask(12122000, "99/99/9999"); // -> 12/12/2000
// Converts value to masked document
mask(99911111101, "999.999.999-99"); // -> 999.111.111-01
// Converts value to masked car plate
mask('ABC1234', "AAA-9999"); // -> ABC-1234
// Converts value to masked vehicle identification
mask('9BGRD08X04G117974', "SS.SS.SSSSS.S.S.SSSSSS"); // -> 9B.GR.D08X0.4.G.117974

// Pass in an optional placeholder option to represent remaining characters to be entered
mask('4', {pattern: "(999) 999-9999", placeholder: "x"}); // -> (4xx) xxx-xxxx
```

## Using React

```js
import React, { useState } from "react";
import { mask as masker, unMask } from "node-masker";
const InputMask = ({ mask, onChange, value, ...props }) => {
  const handleChange = ({ target }) => {
    const originalValue = unMask(target.value);
    onChange(originalValue);
  };
  return (
    <input {...props} onChange={handleChange} value={masker(value, mask)} />
  );
};
function InputWrapper() {
  const [value, setValue] = useState("");
  return (
    <InputMask
      type="text"
      name="doc"
      mask={["99/99/9999", "(999) 999-9999"]}
      placeholder="Birthday or Phone "
      onChange={setValue}
      value={value}
    />
  );
}
```


## License

MIT © [Marcelo dos Reis](https://marcelodosreis.com)
