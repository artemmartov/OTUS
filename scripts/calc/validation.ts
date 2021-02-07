import { listOfOperators } from './constants';


export const divisionByZero = (num: number | string) => {
    if (num === 0) {
        return false;
    }
    return true;
}

export const validationCheck = (value: string) => {
    if (!listOfOperators.includes(value) && isNaN(Number(value))) {
        return true;
    }
    return false;
}
