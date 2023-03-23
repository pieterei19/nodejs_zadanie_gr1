const axios = require('axios');
const mysql = require('mysql');

// Tworzenie połączenia z bazą danych
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'zsti1',
  password: 'EciePecie666!',
  database: 'zsti1'
});

// Pobieranie danych z pliku JSON
axios.get('index.js')
  .then(response => {
    // Parsowanie danych JSON
    const jsonData = response.data;

    // Wprowadzanie danych do bazy danych MySQL
    jsonData.forEach((item) => {
      connection.query('INSERT INTO dane SET ?', item, (err, res) => {
        if (err) throw err;
        console.log('Dane zostały dodane do bazy danych.');
      });
    });

    // Zamykanie połączenia z bazą danych
    connection.end();
  })
  .catch(error => {
    console.log(error);
  });
