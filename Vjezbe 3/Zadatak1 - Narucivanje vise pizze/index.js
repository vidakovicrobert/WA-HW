const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let narudzbe = [];

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

const pizze = [
    { id: 1, naziv: 'Margerita', cijena: 7.00 },
    { id: 2, naziv: 'Capriciosa', cijena: 9.00 },
    { id: 3, naziv: 'Slavonska', cijena: 6.00 },
    { id: 4, naziv: 'Fungi', cijena: 10.00 },
];

app.get("/pizze", (req, res) => {
    res.json(pizze);
});

app.get('/pizze/:id', (req, res) => {
    const id_pizza = req.params.id;
    if (isNaN(id_pizza)) {
        res.json({ message: 'Proslijedili ste parametar id koji nije broj!' });
        return;
    }
    const pizza = pizze.find(pizza => pizza.id == id_pizza);
    if (pizza) {
        res.json(pizza);
    } else {
        res.json({ message: 'Pizza s traženim ID-em ne postoji.' });
    }
});

app.post('/naruci', (req, res) => {
    console.log('Primljen zahtjev:', req.body);

    const narudzbaArray = req.body;

    if (!Array.isArray(narudzbaArray)) {
        return res.status(400).json({
            message: 'Narudžba mora biti poslana kao polje objekata!'
        });
    }

    for (const narudzba of narudzbaArray) {
        if (!narudzba.pizza || !narudzba.velicina || !narudzba.kolicina) {
            return res.status(400).json({
                message: 'Svaka narudžba mora sadržavati pizza, velicina i kolicina!'
            });
        }
    }

    const nepostojecePizze = narudzbaArray
        .map(n => n.pizza)
        .filter(pizzaNaziv => !pizze.some(p => p.naziv.toLowerCase() === pizzaNaziv.toLowerCase()));

    if (nepostojecePizze.length > 0) {
        return res.status(400).json({
            message: `Sljedeće pizze ne postoje u jelovniku: ${nepostojecePizze.join(', ')}`
        });
    }

    narudzbe.push({
        id: narudzbe.length + 1,
        vrijeme: new Date(),
        stavke: narudzbaArray
    });

    const narucenePizze = narudzbaArray
        .map(n => `${n.pizza} (${n.velicina}) x${n.kolicina}`)
        .join(', ');

    res.status(201).json({
        message: `Uspješno zaprimljena narudžba za: ${narucenePizze}`
    });
});

app.get('/narudzbe', (req, res) => {
    res.json(narudzbe);
});

app.use((req, res) => {
    res.status(404).json({ message: 'Tražena ruta ne postoji' });
});

app.listen(PORT, (error) => {
    if (error) {
        console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
    } else {
        console.log(`Server je pokrenut na http://localhost:${PORT}`);
    }
});