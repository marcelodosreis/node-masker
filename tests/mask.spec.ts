
import { applyMask } from '../src/mask';

describe('applyMask', () => {
  describe('máscaras completas', () => {
    it.each([
      {
        name: 'CPF',
        value: '12345678901',
        pattern: '999.999.999-99',
        expected: '123.456.789-01',
      },
      {
        name: 'telefone brasileiro',
        value: '11987654321',
        pattern: '(99) 99999-9999',
        expected: '(11) 98765-4321',
      },
      {
        name: 'CEP',
        value: '12345678',
        pattern: '99999-999',
        expected: '12345-678',
      },
      {
        name: 'data',
        value: '13102026',
        pattern: '99/99/9999',
        expected: '13/10/2026',
      },
    ])('$name: aplica a máscara corretamente', ({
      value,
      pattern,
      expected,
    }) => {
      expect(applyMask(value, pattern)).toBe(expected);
    });
  });

  describe('entradas vazias e parciais', () => {
    it('retorna uma string vazia para uma entrada vazia', () => {
      expect(applyMask('', '999.999')).toBe('');
    });

    it('formata uma entrada parcial sem adicionar sufixos', () => {
      expect(applyMask('123', '999-999')).toBe('123');
    });

    it('preserva os separadores alcançados durante a formatação', () => {
      expect(applyMask('1234', '99.999')).toBe('12.34');
    });

    it('aceita uma máscara sem separadores', () => {
      expect(applyMask('123', '999')).toBe('123');
    });

    it('não adiciona caracteres quando a máscara é vazia', () => {
      expect(applyMask('12345', '')).toBe('');
    });
  });

  describe('consumo dos caracteres da entrada', () => {
    it('consome um caractere por marcador 9', () => {
      expect(applyMask('123', '9-9-9')).toBe('1-2-3');
    });

    it('preserva os caracteres literais da máscara', () => {
      expect(applyMask('1234', '+99 (99)')).toBe('+12 (34)');
    });

    it('não consome caracteres da entrada nos separadores', () => {
      expect(applyMask('123456', '99.99-99')).toBe('12.34-56');
    });

    it('interrompe quando todos os caracteres de entrada são consumidos', () => {
      expect(applyMask('12', '99/99/9999')).toBe('12');
    });
  });

  describe('independência entre execuções', () => {
    it('produz o mesmo resultado em execuções repetidas', () => {
      const first = applyMask('12345678901', '999.999.999-99');
      const second = applyMask('12345678901', '999.999.999-99');

      expect(first).toBe(second);
      expect(first).toBe('123.456.789-01');
    });

    it('não altera o resultado de uma chamada anterior', () => {
      const first = applyMask('1234', '99-99');

      applyMask('987654', '999.999');

      expect(first).toBe('12-34');
      expect(applyMask('1234', '99-99')).toBe('12-34');
    });
  });
});
