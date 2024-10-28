import express from 'express';
import moment from 'moment';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const info = `
        Biraj između /datum ili /progrnoza
    `;
    res.send(info);
});

app.get('/datum', (req, res) => {
    const currentDateTime = moment().format('DD.MM.YYYY HH:mm');
    res.send(currentDateTime);
});

app.get('/prognoza', (req, res) => {
    const weatherConditions = ['sunčano', 'kišovito', 'oblačno'];
    const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    res.send(`Danas će biti ${randomWeather}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Slušam na portu ${port}!`);
});