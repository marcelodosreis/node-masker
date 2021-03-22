const DIGIT = '9';

function toPattern(value: number | string, pattern: string): string {
  let charCounter = 0;
  const patternSplitted: string[] = pattern.split('');
  const valueSplitted: string[] = String(value).split('');

  const teste = patternSplitted.map(
    (character: string, index: number, array: string[]) => {
      if (character.match(/[0-9a-zA-Z]/) && character === DIGIT) {
        return valueSplitted[charCounter++];
      }
      if (!valueSplitted[charCounter] && charCounter !== valueSplitted.length) {
        return '';
      }
      return character;
    },
  );

  return teste.join('');
}

export default toPattern;
