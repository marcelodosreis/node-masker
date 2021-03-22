import 'jest';
import toPattern from '../lib/toPattern';

describe('VanillaMasker.toPattern', () => {
  it('returns "(61)" pattern when input is 61', () => {
    expect(toPattern(61, '(99)')).toEqual('(61)');
  });

  it('returns "(61) 91234-5678" pattern when input is 61912345678', () => {
    expect(toPattern(61912345678, '(99) 99999-9999')).toEqual(
      '(61) 91234-5678',
    );
  });

  it('returns "(10) 9991-1111" pattern when input is 1099911111', () => {
    expect(toPattern(1099911111, '(99) 9999-9999')).toEqual('(10) 9991-1111');
  });

  it('returns "(10) 11" pattern when input is 1011', () => {
    expect(toPattern('1011', '(99) 9999-9999')).toEqual('(10) 11');
  });

  it('returns "+10 11 4444-44" pattern when input is 1011444444', () => {
    expect(toPattern('1011444444', '+99 99 9999-99')).toEqual('+10 11 4444-44');
  });

  it('returns "+1 (888) 888-8888" pattern when input is 8888888888', () => {
    expect(toPattern('8888888888', '+1 (999) 999-9999')).toEqual(
      '+1 (888) 888-8888',
    );
  });

  it('returns "+1 (888) 888-8" pattern when input is 8888888', () => {
    expect(toPattern('8888888', '+1 (999) 999-9999')).toEqual('+1 (888) 888-8');
  });
});
