import Mask from './lib/toPattern';
console.log(
  `\n Result: ${Mask(
    '+1 (888) 888-8',
    '+1 (999) 999-9999',
  )}\n Expect: +1 (888) 888-8`,
);

export default Mask;
