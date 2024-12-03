import express from "express";


const app = express();
app.use(express.json());

const port = 3000;

app.get('/robert/vidakovic', (req, res) => {
    const response = {
        ime: "robert",
        prezime: "vidakovic",
        jmbag: "12345678"
    };
    res.status(200).json(response);
});

const poruke = [
    { id: 1, posiljatelj: 'Ana', sadrzaj: 'Pozdrav!' },
    { id: 2, posiljatelj: 'Ivan', sadrzaj: 'Bok!' },
    { id: 3, posiljatelj: 'Mate', sadrzaj: 'Ćao!' },
    { id: 4, posiljatelj: 'Jana', sadrzaj: 'Hello!' },
    { id: 5, posiljatelj: 'Maja', sadrzaj: 'Hi!' }
];

app.get('/poruke', (req, res) => {
    res.status(200).json(poruke);
});

app.get('/poruke/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const poruka = poruke.find(p => p.id === id);

    if (!poruka) {
        res.status(404).json({
            error: "Poruka nije pronađena", proslijedeniId: id
        });
    } else {
        res.status(200).json(poruka);
    }
});


app.listen(port, () => {
    console.log("wa-mid-A poslužitelj sluša na portu 3000");
});