//IMPORTO EXPRESS
const express = require('express');
//CHIAMO LA FUNZIONE EXPRESS E NE RESTITUISCO IL VALORE IN UNA VARIABILE APP
const app = express();
//DEFINISCO LA PORTA 3000
const port = 3000;

//DEFINISCO LA ROTTA ENTRY POINT DELLA NOSTRA APPLICAZIONE
app.get('/', (req, res) => {
  console.log('Server del mio blog')
});

//DICHIARO ALLA NOSTRA APPLICAZIONE DI RESTARE IN ASCOLTO SULLA PORTA DEFINITA IN ALTO
app.listen(port, () => {
  console.log(`Server del mio blog`)
})