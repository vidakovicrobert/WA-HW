import { state } from './shared-state.js';

export function addNumberRoute(req, res) {
    const randomNumber = Math.floor(Math.random() * 101);
    state.numbers.push(randomNumber);
    res.send(`Added number: ${randomNumber}`);
}