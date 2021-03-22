import 'jest';
import toPattern from '../lib/toPattern';

describe('VanillaMasker.toPattern', () => {
  it('Should return "(61)" pattern when input is 61', () => {
    expect(toPattern(61, '(99)')).toEqual('(61)');
  });

  it('Should return "(61) 91234-5678" pattern when input is 61912345678', () => {
    expect(toPattern(61912345678, '(99) 99999-9999')).toEqual(
      '(61) 91234-5678',
    );
  });

  it('Should return "(10) 9991-1111" pattern when input is 1099911111', () => {
    expect(toPattern(1099911111, '(99) 9999-9999')).toEqual('(10) 9991-1111');
  });

  it('Should return "(10) 11" pattern when input is 1011', () => {
    expect(toPattern('1011', '(99) 9999-9999')).toEqual('(10) 11');
  });

  it('Should return "+10 11 4444-44" pattern when input is 1011444444', () => {
    expect(toPattern('1011444444', '+99 99 9999-99')).toEqual('+10 11 4444-44');
  });

  it('Should return "+1 (888) 888-8888" pattern when input is 8888888888', () => {
    expect(toPattern('8888888888', '+1 (999) 999-9999')).toEqual(
      '+1 (888) 888-8888',
    );
  });

  it('Should return "+1 (888) 888-8" pattern when input is 8888888', () => {
    expect(toPattern('8888888', '+1 (999) 999-9999')).toEqual('+1 (888) 888-8');
  });

  it('Should return "+1 (888) 888-8" pattern when input is +1 (888) 888-8', () => {
    expect(toPattern('+1 (888) 888-8', '+1 (999) 999-9999')).toEqual(
      '+1 (888) 888-8',
    );
  });

  it('Should return "12/12/2000" pattern when input is 12122000', () => {
    expect(toPattern(12122000, '99/99/9999')).toEqual('12/12/2000');
  });

  it('Should return "10/11" pattern when input is 1011', () => {
    expect(toPattern('1011', '99/99/9999')).toEqual('10/11');
  });

  it('Should return "2000/12/12" pattern when input is 20001212', () => {
    expect(toPattern('20001212', '9999/99/99')).toEqual('2000/12/12');
  });

  it('Should return "999.111.111-01" pattern when input is 99911111101', () => {
    expect(toPattern(99911111101, '999.999.999-99')).toEqual('999.111.111-01');
  });

  it('Should return "101.1" pattern when input is 1011', () => {
    expect(toPattern('1011', '999.999.999-99')).toEqual('101.1');
  });

  it('Should return "ABC-1234" pattern when input is ABC1234', () => {
    expect(toPattern('ABC1234', 'AAA-1234')).toEqual('ABC-1234');
  });

  it('Should return incomplete result: "AB" when input is AB1 and pattern is AAA-99', () => {
    expect(toPattern('AB1', 'AAA-99')).toEqual('AB');
  });

  it('Should return "9B.GR.D08X0.4.G.117974" pattern when input is 9BGRD08X04G117974', () => {
    expect(toPattern('9BGRD08X04G117974', 'SS.SS.SSSSS.S.S.SSSSSS')).toEqual(
      '9B.GR.D08X0.4.G.117974',
    );
  });

  it('Should return "BB.G" pattern when input is 9BG', () => {
    expect(toPattern('BBG', 'SS.SS.SSSSS.S.S.SSSSSS')).toEqual('BB.G');
  });

  it('Should return "(4xx) xxx-xxxx" when input is 4 and placeholder is x', () => {
    expect(
      toPattern('4', { pattern: '(999) 999-9999', placeholder: 'x' }),
    ).toEqual('(4xx) xxx-xxxx');
  });

  it('Should return "(___) ___-_____" when input is empty and placeholder is _', () => {
    expect(
      toPattern('', { pattern: '(999) 999-9999', placeholder: '_' }),
    ).toEqual('(___) ___-____');
  });

  it('Should return "(111) 111-1111" when input is 1111111111 and placeholder is _', () => {
    expect(
      toPattern('1111111111', {
        pattern: '(999) 999-9999',
        placeholder: '_',
      }),
    ).toEqual('(111) 111-1111');
  });

  it('Should return "(aaa) _____" when input is aaa999aaaa and placeholder is _', () => {
    expect(
      toPattern('aaa999aaaa', {
        pattern: '(AAA) AAAAA',
        placeholder: '_',
      }),
    ).toEqual('(aaa) _____');
  });
});
