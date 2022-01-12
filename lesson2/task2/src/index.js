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
    const state = store.getState().history.map((el) => {
        return el === 1 ? "+1" : "-1";
      });
      const itog = store.getState().history.reduce((acc, el) => acc + el, 0);
      resultElem.textContent =
        state.length === 0 ? "" : `${state.join("")} = ${itog}`;
})