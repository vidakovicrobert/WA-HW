class Proizvod {
    constructor(id, naziv, cijena, velicine) {
        this.id = id;
        this.naziv = naziv;
        this.cijena = cijena;
        this.velicine = velicine;
    }
}
class Proizvod {
    constructor(id, naziv, cijena, velicine, opis, slike) {
        this.id = id;
        this.naziv = naziv;
        this.cijena = cijena;
        this.velicine = velicine;
        this.opis = opis;
        this.slike = slike;
    }
}

const proizvodi = [
    new Proizvod(1, 'Obična crna majica', 80, ['XS', 'S', 'M', 'L']), // dodajte opis i polje poveznica na slike
    new Proizvod(2, "Levi's 501 traperice", 110, ['S', 'M', 'L']),
    new Proizvod(3, 'Zimska kapa', 40, 'onesize'),
    new Proizvod(4, 'Čarape Adidas', 20, ['34-36', '37-39', '40-42']),
    new Proizvod(5, 'Tenisice Nike', 200, ['38', '39', '40', '41', '42', '43', '44', '45'])
];

export { Proizvod, proizvodi };