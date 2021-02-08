import { mul, div, add, minus } from './operatorsFunc';
import { listOfOperators } from './constants';
import { isValidValue, isDivisibleByZero } from './validation'


export const parse = (str: string) => {
    const data = str.split(' ').filter(el => el !== '').map(el => {
        if (!isValidValue(el)) {
            return 'error'
        }
        if (!listOfOperators.includes(el)) {
            return Number(el);
        }
        return el;
    });

    if (data.find(el => el === 'error')) {
        return 'Ошибка, невалидные символы'
    }

    return prioritiesRes(data);
}

const prioritiesRes = (arr: (string | number)[]) => {
    while (arr.length !== 1) {
        arr.forEach(((el, index) => {
            if (el === '*' || el === '/') {
                if (el === '*') {
                    const result: number = mul(arr[index - 1] as number, arr[index + 1] as number);
                    arr.splice(index - 1, 3, result);
                }
                if (el === '/') {
                    if (!isDivisibleByZero(arr[index - 1])) {
                        return 'Ошибка, нельзя делить на 0'
                    }
                    const result: number = div(arr[index - 1] as number, arr[index + 1] as number);
                    arr.splice(index - 1, 3, result);
                }
            }
        }))

        arr.forEach(((el, index) => {
            if (el === '+' || el === '-') {
                if (el === '+') {
                    const result: number = add(arr[index - 1] as number, arr[index + 1] as number);
                    arr.splice(index - 1, 3, result);
                }
                if (el === '-') {
                    const result: number = minus(arr[index - 1] as number, arr[index + 1] as number);
                    arr.splice(index - 1, 3, result);
                }
            }
        }))
    }

    return arr[0]
}
