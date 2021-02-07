import { mul, div, add, minus } from './operatorsFunc';
import { divisionByZero, validationCheck } from './validation';


describe('Тестирование скалярных выражений', () => {
  test('Сложение', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('Вычитание', () => {
    expect(minus(9, 7)).toBe(2);
  });

  test('Умножение', () => {
    expect(mul(4, 2)).toBe(8);
  });

  test('Деление', () => {
    expect(div(16, 4)).toBe(4);
  });
});


describe('Тестирование допустимых значений', () => {
  test('Деление на ноль', () => {
    expect(divisionByZero(0)).toBeFalsy();
    expect(divisionByZero(2)).toBeTruthy();
  });

  test('Если введенный символ это не цифра и не необходимый знак', () => {
    expect(validationCheck('ui')).toBeTruthy();
  });

});

