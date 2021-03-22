<br />
<p align="center">
  <h2>🎭 Node-masker is a javascript mask library made in <a href="https://www.typescriptlang.org/">TypeScript</a></h2>
</p>

![Alt Text](https://media.giphy.com/media/AMlJ03rEglc3JtHeLI/giphy.gif)



<div>
  
<p>
  <a href="#using-react">Using React?</a>
</p>

[![Coverage Status](https://coveralls.io/repos/github/marcelodosreis/node-masker/badge.svg?branch=main&t=hJ0bvK)](https://coveralls.io/github/marcelodosreis/node-masker?branch=main)
</br>
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)



## Suport
<img src="https://user-images.githubusercontent.com/56274028/101970313-79744500-3c08-11eb-90e5-8c09fec2d6bb.png" alt="Javascript" width="40"> <img src=https://user-images.githubusercontent.com/49694866/101971573-0c18e200-3c11-11eb-8933-b2d9e7de6dae.png alt="Typescript" width="40"> 
<img src=https://user-images.githubusercontent.com/49694866/101971326-6d3fb600-3c0f-11eb-9d35-d34da546a40a.png alt="React" width="40"> 

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
    <Input {...props} onChange={handleChange} value={masker(value, mask)} />
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
