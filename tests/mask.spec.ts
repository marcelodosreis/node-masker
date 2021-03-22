import { mask, unMask } from '../lib/mask';

test('Should mask correctly', () => {
  const result = mask('123', '9.9.9');
  expect(result).toEqual('1.2.3');
});

test('Should remove mask correctly', () => {
  const result = unMask(mask('123', '9.9.9'));
  expect(result).toEqual('123');
});

test('Should use first mask', () => {
  const result = mask('123', ['9.9.9', '99-99']);
  expect(result).toEqual('1.2.3');
});

test('Should use second mask', () => {
  const result = mask('1234', ['9.9.9', '99-99']);
  expect(result).toEqual('12-34');
});
