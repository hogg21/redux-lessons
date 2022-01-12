import './index.scss';
import store, { increment, decrement, reset } from './store.js';

const resultBtn = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action=increment]');
const decrementBtn = document.querySelector('[data-action=decrement]');
const resetBtn = document.querySelector('[data-action=reset]');

const onIncrement = () => {
    store.dispatch(increment())
}
const onDecrement = () => {
    store.dispatch(decrement())
}
const onReset = () => {
    store.dispatch(reset());
}

incrementBtn.addEventListener('click', onIncrement);
decrementBtn.addEventListener('click', onDecrement);
resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
    const state = store.getState();
    const strOne = state.history.map((el) => {return el === 1 ? '+1' : '-1'})
    const currentValue = state.history.reduce((acc, value) => acc += value, 0);
    const historyString = state.history.join(' ');
    resultBtn.textContent = state.history.length === 0 ? '' : `${strOne} = ${currentValue}`;
})