import { createStore } from 'redux';

const incrementActionCreator = 'COUNTER/INCREMENT';
const decrementActionCreator = 'COUNTER/DECREMENT';
const Increment = () => {
    return {
        type: incrementActionCreator
    }
}
const Decrement = () => {
    return {
        type: decrementActionCreator
    }
}
const counterReducer = (state = 0, action) => {
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
store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(Decrement());
console.log(store.getState());