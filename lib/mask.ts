/* eslint-disable no-confusing-arrow */
import toPattern from './toPattern';

/**
 * function function unMask(
 * @param {string} value
 * @returns {string}
 */
function unMask(value: string) {
  return value.replace(/\W/g, '');
}

/**
 * function function masker(
 * @param {string} value
 * @param {string} patterns
 * @param {any} options
 * @returns {string}
 */
function masker(value: string, pattern: string, options: any) {
  return toPattern(value, { pattern, ...options });
}

/**
 * function function multimasker(
 * @param {string} value
 * @param {string[]} patterns
 * @param {any} options
 * @returns {string}
 */
function multimasker(value: string, patterns: string[], options: any) {
  return masker(
    value,
    patterns.reduce(
      // eslint-disable-next-line prettier/prettier
      (memo: string, pattern: string) => (value.length <= unMask(memo).length ? memo : pattern),
      patterns[0],
    ),
    options,
  );
}

/**
 * function function typeof(
 * @param {string} value
 * @param {string | string[]} patterns
 * @param {any} options
 * @returns {string}
 */
function mask(value: string, pattern: string | string[], options?: any) {
  return typeof pattern === 'string' ? masker(value, pattern || '', options) : multimasker(value, pattern, options);
}

export { mask, unMask };
