import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

import proizvodiRouter from './routes/proizvodi.js';
app.use('/proizvodi', proizvodiRouter);

import narudzbeRouter from './routes/narudzbe.js';
app.use('/narudzbe', narudzbeRouter);


app.listen(PORT, error => {
    if (error) {
        console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
    } else {
        console.log(`Server dela na http://localhost:${PORT}`);
    }
});