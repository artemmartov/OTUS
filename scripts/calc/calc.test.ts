import { mul, div, add, minus } from './operatorsFunc';
import { isDivisibleByZero, isValidValue } from './validation';

describe('Тестирование скалярных выражений', () => {

  describe('Тестирование функции сложения', () => {
    test('При сложении 1 и 2 получаем 3', () => {
      expect(add(1, 2)).toBe(3);
    });
  });

  describe('Тестирование функции вычитания', () => {
    test('При вычитании 7 из 9 получаем 2', () => {
      expect(minus(9, 7)).toBe(2);
    });
  });

  describe('Тестирование функции умножения', () => {
    test('При умножении 4 на 2 получаем 8', () => {
      expect(mul(4, 2)).toBe(8);
    });
  });

  describe('Тестирование функции деления', () => {
    test('При делении 16 на 4 получаем 4', () => {
      expect(div(16, 4)).toBe(4);
    });
  });
});

describe('Функция, проверяющая возможность деления на 0', () => {
  test('Если число 0, то деление невозможно и получаем false', () => {
    expect(isDivisibleByZero(0)).toBeFalsy();
  });
});

describe('Функция, проверяющая элемент на допустимость', () => {
  test('Если введенный символ это не цифра и не необходимый знак, то получаем false', () => {
    expect(isValidValue('ui')).toBeFalsy();
  });
});

