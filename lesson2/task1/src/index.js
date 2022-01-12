import { createStore } from 'redux';

export const incrementActionCreator = 'COUNTER/INCREMENT';
export const decrementActionCreator = 'COUNTER/DECREMENT';
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
export const store = createStore(counterReducer);
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// console.log(store.getState());