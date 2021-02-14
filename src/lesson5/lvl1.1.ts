// Задание первого уровня 1
// В функцию приходит массив состояний заказа и фильтруется
// Нужно заменить FIXME на тип который вычисляется на освове OrderState





const orderStates = [
    "initial",
    "inWork",
    "buyingSupplies",
    "producing",
    "fullfilled",
] as const;

type OrderState = typeof orderStates[number];

type FilteredArray<T> = T extends (infer R) ? R : T;

type FIXME = FilteredArray<Array<OrderState>>;

export const getUserOrderStates = (orderStates: OrderState[]): FIXME => {
    const filteredStates = [] as FIXME;
    orderStates.forEach((element) => {
        if (element !== "buyingSupplies" && element !== "producing") {
            filteredStates.push(element);
        }
    });
    return filteredStates;
};

