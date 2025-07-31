//IMPORTO EXPRESS
const express = require('express');
//CHIAMO LA FUNZIONE EXPRESS E NE RESTITUISCO IL VALORE IN UNA VARIABILE APP
const app = express();
//DEFINISCO LA PORTA 3000
const port = 3000;

//INSERIMENTO DEL MIDDLEWARE PER I FILE STATICI
app.use(express.static('public'));

//DEFINISCO LA ROTTA ENTRY POINT DELLA NOSTRA APPLICAZIONE
app.get('/', (req, res) => {
  res.send('Server del mio blog')
});

//DICHIARO ALLA NOSTRA APPLICAZIONE DI RESTARE IN ASCOLTO SULLA PORTA DEFINITA IN ALTO
app.listen(port, () => {
  console.log(`Server del mio blog sulla porta ${port}`);
})

//DEFINISCO LA ROTTA PER OTTENERE LA BACHECA 
app.get('/bacheca', (req, res) => {
  const bacheca = [
    {
     titolo: "Jaws: Lo Squalo che ha cambiato il cinema",
     contenuto: "Un approfondimento sul film cult di Steven Spielberg che ha terrorizzato intere generazioni e  lanciato il concetto di blockbuster estivo.",
     immagine: "imgs/film/jaws.jpeg",
     tags: ["thriller", "classico", "animali", "anni70"]
    }
  ];

  res.json(bacheca);

})