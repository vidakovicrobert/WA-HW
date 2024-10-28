import { state } from './shared-state.js';

export function getNumbersRoute(req, res) {
    const numbersString = state.numbers.join(' ');
    res.send(numbersString || 'List is empty');
}