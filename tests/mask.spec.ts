type MaskPattern = string | string[];

const MASK_CHAR = '9';

function applyMask(unmasked: string, pattern: string): string {
  const output: string[] = [];
  let valueIndex = 0;

  for (let i = 0; i < pattern.length; i++) {
    if (valueIndex >= unmasked.length) break;

    const patternChar = pattern[i];
    if (patternChar === MASK_CHAR) {
      output.push(unmasked[valueIndex]);
      valueIndex++;
    } else {
      output.push(patternChar);
    }
  }

  return output.join('');
}

function countPlaceholders(pattern: string): number {
  let count = 0;
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === MASK_CHAR) count++;
  }
  return count;
}

export function mask(value: string, pattern: MaskPattern): string {
  const unmasked = unMask(value);

  if (Array.isArray(pattern)) {
    for (const p of pattern) {
      if (unmasked.length <= countPlaceholders(p)) {
        return applyMask(unmasked, p);
      }
    }
    return applyMask(unmasked, pattern[pattern.length - 1]);
  }

  return applyMask(unmasked, pattern);
}

export function unMask(value: string): string {
  return value.replace(/\D/g, '');
}
