# Node-masker

<h1 align="center">
  <img src="https://i.imgur.com/GbdQ8tC.png" width="260" alt="Node-masker logo" />
</h1>

<p align="center">
  <strong>A flexible JavaScript masking library powered by TypeScript.</strong>
</p>

<p align="center">
  Build consistent input formatting for Node.js and React applications with configurable masks, multi-mask support, and placeholder options.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/node-masker">
    <img src="https://img.shields.io/npm/v/node-masker?style=for-the-badge&logo=npm&logoColor=white" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/node-masker">
    <img src="https://img.shields.io/npm/dm/node-masker?style=for-the-badge&logo=npm&logoColor=white" alt="npm downloads" />
  </a>
  <a href="https://coveralls.io/github/marcelodosreis/node-masker?branch=main">
    <img src="https://img.shields.io/coverallsCoverage/github/marcelodosreis/node-masker?branch=main&style=for-the-badge" alt="Test coverage" />
  </a>
  <a href="https://github.com/marcelodosreis/node-masker/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/marcelodosreis/node-masker?style=for-the-badge" alt="License" />
  </a>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-mask-patterns">Mask Patterns</a> •
  <a href="#-react-integration">React</a> •
  <a href="#-development">Development</a>
</p>

---

## Overview

**Node-masker** is a JavaScript library written in TypeScript that provides configurable input formatting through masks.

It helps developers standardize the presentation of values such as phone numbers, dates, personal identifiers, postal codes, and custom alphanumeric fields.

Designed for flexible integration, Node-masker supports Node.js and React workflows, multiple mask patterns, and placeholder-based formatting.

## ✨ Features

- **Configurable masks** — Format values using string patterns.
- **Multiple mask support** — Provide an array of patterns for different input lengths or formats.
- **Regular-expression patterns** — Describe more specific character requirements where supported by the API.
- **Placeholder support** — Represent unfilled positions in partially completed inputs.
- **React integration** — Use masking functions in controlled input components.
- **TypeScript foundation** — Built with TypeScript.
- **Reusable formatting logic** — Keep presentation rules consistent across supported application layers.

## 🛠️ Technology Stack

| Technology | Purpose |
| --- | --- |
| JavaScript | Application integration |
| TypeScript | Library implementation |
| Node.js | Server-side JavaScript runtime |
| React | User interface integration |
| npm | Package distribution |

## 🚀 Installation

### Prerequisites

- Node.js version supported by the installed package.
- npm or Yarn.
- Basic familiarity with JavaScript modules.

> Check the package metadata and release documentation for the exact minimum Node.js version.

### npm

```bash
npm install node-masker
```

### Yarn

```bash
yarn add node-masker
```

## ⚡ Quick Start

Import the `mask` function and provide a value and a pattern.

```javascript
import { mask } from "node-masker";

const value = "ABC1C83";
const pattern = "AAA - 9S99";

const formattedValue = mask(value, pattern);

console.log(formattedValue);
```

Expected output in the original project example:

```text
ABC - 1C83
```

> **Compatibility note:** Confirm the supported pattern characters in the version installed in your project. The example above preserves the original documented syntax.

## 📚 Usage Examples

### Date Formatting

```javascript
import { mask } from "node-masker";

const formattedDate = mask("12122000", "99/99/9999");

console.log(formattedDate);

// Expected: 12/12/2000
```

This example formats a value for display. It does not verify whether the date is valid.

### Phone Number Formatting

```javascript
import { mask } from "node-masker";

const formattedPhone = mask(1099911111, "(99) 9999-9999");

console.log(formattedPhone);

// Expected: (10) 9991-1111
```

For phone numbers, prefer strings when preserving leading zeros is important.

### Brazilian CPF

```javascript
import { mask } from "node-masker";

const cpf = mask("99911111101", "999.999.999-99");

console.log(cpf);

// Expected: 999.111.111-01
```

### Brazilian CNPJ

```javascript
import { mask } from "node-masker";

const cnpj = mask("12345678000106", "99.999.999/9999-99");

console.log(cnpj);

// Expected: 12.345.678/0001-06
```

These examples demonstrate formatting only. CPF and CNPJ validation must be implemented separately.

### Vehicle Registration Plate

```javascript
import { mask } from "node-masker";

const plate = mask("ABC1234", "AAA-9999");

console.log(plate);

// Expected: ABC-1234
```

Confirm that the selected pattern syntax is supported by your installed release.

## 🎭 Multiple Masks

Multiple patterns are useful when an input can have different lengths or formats.

```javascript
import { mask } from "node-masker";

const masks = [
  "999.999.999-99",
  "99.999.999/9999-99",
];

const formattedCpf = mask("12345678901", masks);
const formattedCnpj = mask("12345678000106", masks);

console.log(formattedCpf);
// Expected: 123.456.789-01

console.log(formattedCnpj);
// Expected: 12.345.678/0001-06
```

The library's mask-selection rules determine which pattern is applied. Verify how the installed version handles partially entered values and ambiguous patterns.

## 🧩 Mask Patterns

The original documentation describes the following string-pattern characters:

| Character | Description |
| --- | --- |
| `9` | Numeric character (`0–9`) |
| `a` | Alphabetic character (`a–z`, `A–Z`) |
| `*` | Alphanumeric character |

Example:

```javascript
import { mask } from "node-masker";

console.log(mask("130499", "99/99/99"));
```

Literal separators, escaping rules, and other pattern characters should be checked against the actual implementation.

### Regular-Expression Masks

Regular expressions can describe more restrictive character requirements.

The following example defines a pattern for a Canadian postal code:

```javascript
const firstLetter = /(?!.*[DFIOQU])[A-VXY]/i;
const letter = /(?!.*[DFIOQU])[A-Z]/i;
const digit = /[0-9]/;

const postalCodeMask = [
  firstLetter,
  digit,
  letter,
  " ",
  digit,
  letter,
  digit,
];
```

This array defines the intended sequence of character constraints. Pass it to the masking function only according to the API supported by your installed version.

## 🔠 Placeholder Support

Placeholders can represent positions that have not yet been filled.

```javascript
import { mask } from "node-masker";

const formattedValue = mask("4", {
  pattern: "(999) 999-9999",
  placeholder: "x",
});

console.log(formattedValue);

// Expected: (4xx) xxx-xxxx
```

Verify the placeholder option and its behavior against the package version in use.

## ⚛️ React Integration

Node-masker can be integrated into React components to format controlled input values.

```jsx
import { useState } from "react";
import { mask as masker, unMask } from "node-masker";

export default function PhoneInput() {
  const [value, setValue] = useState("");

  const phoneMask = "(999) 999-9999";

  function handleChange(event) {
    setValue(unMask(event.target.value));
  }

  return (
    <div>
      <label htmlFor="phone">Phone number</label>

      <input
        id="phone"
        name="phone"
        type="tel"
        inputMode="numeric"
        autoComplete="tel"
        value={masker(value, phoneMask)}
        onChange={handleChange}
        placeholder="(123) 456-7890"
      />
    </div>
  );
}
```

### Integration Notes

- Confirm that `unMask` is exported by your installed package version.
- Keep the component state consistent with the masking and unmasking behavior.
- Use an appropriate input type and accessibility label.
- Validate the underlying value independently of its visual formatting.
- Test cursor position and editing behavior when entering or deleting characters.

The component illustrates the integration approach; test it with the exact version of Node-masker used by your application.

## 🧪 Testing and Quality

Reliable masking behavior should be verified with automated tests.

Consider testing the following scenarios:

| Scenario | Expected verification |
| --- | --- |
| Standard input | Formatting follows the selected pattern |
| Empty input | Behavior matches the documented API |
| Partial input | Incomplete values are handled consistently |
| Multiple masks | The intended pattern is selected |
| Invalid characters | Behavior matches the implementation's rules |
| Placeholder | Unfilled positions are represented correctly |
| Unmasking | Formatted values are processed as expected |
| Regression | Existing behavior remains unchanged after updates |

Run the project's documented test commands and CI checks before publishing a release.

> Test commands depend on the scripts defined in the repository's `package.json`.

## 🔐 Validation and Security

Masking is not validation.

A formatted value may still be invalid, incomplete, or unsuitable for the intended business operation.

For production applications:

- Validate values on the appropriate application layer.
- Apply domain-specific validation to dates, phone numbers, CPF, CNPJ, and other identifiers.
- Avoid treating formatted values as proof of identity.
- Apply appropriate privacy and data-protection practices when handling personal information.

## 🧑‍💻 Development

Contributions that improve correctness, documentation, compatibility, and maintainability are welcome.

### Contribution Workflow

1. Fork the repository.
2. Create a feature branch.
3. Implement the change.
4. Add or update automated tests.
5. Run the available tests and quality checks.
6. Review the changes for backward compatibility.
7. Open a pull request with a clear explanation.

### Reporting Issues

When opening an issue, include:

- A concise description of the problem.
- A minimal reproducible example.
- Expected and actual behavior.
- Node.js and Node-masker versions.
- Relevant error messages or test results.

Please avoid including real personal identifiers or other sensitive data in issue reports.

## 🗺️ Roadmap

Potential areas for future improvement include:

- Expanded documentation for pattern syntax.
- Additional automated regression tests.
- Clearer documentation for multi-mask selection.
- Improved examples for controlled React inputs.
- Compatibility testing across supported Node.js versions.
- More explicit documentation of placeholder and unmasking behavior.

This list represents possible improvement areas, not a statement that these features are currently planned or implemented.

## 📦 Package and Repository

- **npm:** [node-masker](https://www.npmjs.com/package/node-masker)
- **GitHub:** [marcelodosreis/node-masker](https://github.com/marcelodosreis/node-masker)
- **License:** [MIT](https://github.com/marcelodosreis/node-masker/blob/main/LICENSE)
- **Issues:** [Report a bug or request an improvement](https://github.com/marcelodosreis/node-masker/issues)

## 📄 License

Node-masker is distributed under the MIT License.

Copyright © [Marcelo dos Reis](https://github.com/marcelodosreis).

See the repository's `LICENSE` file for the complete terms.
