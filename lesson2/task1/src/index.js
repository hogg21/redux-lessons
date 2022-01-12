import { createStore } from 'redux';

const incrementActionCreator = 'COUNTER/INCREMENT';
const decrementActionCreator = 'COUNTER/DECREMENT';
export const increment = () => {
    return {
        type: incrementActionCreator
    }
}
export const decrement = () => {
    return {
        type: decrementActionCreator
    }
}
export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case incrementActionCreator:
            return state + 1;
        case decrementActionCreator:
            return state - 1;
        default:
            return state;
    }
}
const store = createStore(counterReducer);
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
console.log(store.getState());