export type ScalarOperationType = (first: any, second: any) => any;


export const mul: ScalarOperationType = (first, second) => first * second;

export const div: ScalarOperationType = (first, second) => first / second;

export const add: ScalarOperationType = (first, second) => first + second;

export const minus: ScalarOperationType = (first, second) => first - second;
