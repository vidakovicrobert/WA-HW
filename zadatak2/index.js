import express from 'express';
import { addNumberRoute } from './add-route.js';
import { getNumbersRoute } from './get-route.js';


const app = express();
const port = 3000;

app.get('/dodaj', addNumberRoute);
app.get('/dohvati', getNumbersRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});