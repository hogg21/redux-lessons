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
const initialState = {
    value: 0
}
export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case incrementActionCreator:
            return state.value + 1;
        case decrementActionCreator:
            return state.value - 1;
        default:
            return state.value;
    }
}
const store = createStore(counterReducer);
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
console.log(store.getState());