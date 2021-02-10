import { listOfOperators } from './constants';


export const isDivisibleByZero = (num: number | string) => {
    if (num === 0) {
        return false;
    }
    return true;
}

export const isValidValue = (value: string) => {
    if (!listOfOperators.includes(value) && isNaN(Number(value))) {
        return false;
    }
    return true;
}
