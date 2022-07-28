<h1 align="center">
  <br>
  <img src="https://i.imgur.com/GbdQ8tC.png" width="260">

</h1>

<h4 align="center">Node-masker is a javascript mask library made in <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> ⚡️🔥</h4>
<h5 align="center">Multi-Mask operation and Compatibility with large scale applications using Node and React 👋 ⚛️</h5>

<p align="center">
  <img src="https://coveralls.io/repos/github/marcelodosreis/node-masker/badge.svg?branch=main" />
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


# Getting Started

Welcome to the Node Masker documentation!

If you are new to using Node Masker, we recommend that you start testing all our features.

If you have questions about anything related to the Node Masker feel free to ask our community in the GitHub discussions.

### System Requirements

- [Node.js 12.x or later](https://nodejs.org/en/)

### Setup

Now just install `Node Masker` and start using: D

```bash
npm install node-masker
# or
yarn add node-masker
```


# Usage

### Examples
```javascript
import { mask } from 'node-masker'

const value = 'ABC1C83'
const pattern = 'AAA - 9S99'

mask(value, pattern)
// ABC - 1C83
```

Pattern can be a pattern array, so remask choose one pattern based on pattern/value length match

```javascript
const patterns = ['999.999.999-99', '99.999.999/9999-99']

mask('12345678901', patterns) // gets firts pattern (999.999.999-99)
// 123.456.789-01

mask('12345678000106', patterns) // gets second pattern (99.999.999/9999-99)
// 12.345.678/0001-06
```

#### More Examples

```javascript
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

/* Pass in an optional placeholder option to represent remaining
characters to be entered */
mask('4', {pattern: "(999) 999-9999", placeholder: "x"}); // -> (4xx) xxx-xxxx
```

# Usage Mask Details

### `mask`

Mask format. Can be either a string or array of characters and regular expressions.<br /><br />

```javascript
mask('130499', "99/99/99")
```

Simple masks can be defined as strings. The following characters will define mask format:

| Character | Allowed input |
| :-------: | :-----------: |
|     9     |      0-9      |
|     a     |   a-z, A-Z    |
|    \*     | 0-9, a-z, A-Z |

Any format character can be escaped with a backslash.<br /><br />

More complex masks can be defined as an array of regular expressions and constant characters.

```jsx
// Canadian postal code mask
const firstLetter = /(?!.*[DFIOQU])[A-VXY]/i;
const letter = /(?!.*[DFIOQU])[A-Z]/i;
const digit = /[0-9]/;
const mask = [firstLetter, digit, letter, " ", digit, letter, digit];
```

# Using React

To use the Node Mask on an `input` element in React, you need an InputWrapper

```javascript
import React, { useState } from "react";
import { mask as masker, unMask } from "node-masker";

function App() {
  const [value, setValue] = useState("");
  const masks =  ["99/99/9999", "(999) 999-9999"]

  return (
    <input
      onChange={({ target }) => setValue(unMask(target.value))}
      value={masker(value, masks)}
    />
  );
}

export default App;
```
Finished example of how to use the powerful Node Masker


## License

MIT © [Marcelo dos Reis](https://marcelodosreis.com)
