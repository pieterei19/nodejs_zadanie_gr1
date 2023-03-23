const axios = require('axios');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

// Utwórz połączenie z bazą danych MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Nawiąż połączenie z bazą danych
connection.connect((error) => {
  if (error) throw error;
  console.log('Połączono z bazą danych MySQL');
});

// Pobierz dane z serwera imiki.pl/cf przy użyciu biblioteki axios
axios.get('http://imiki.pl/cf/')
  .then((response) => {
    const data = response.data.data;
    // Przetwórz dane i zapisz je do bazy danych MySQL
    data.forEach((item) => {
      const timestamp_local = item.timestamp_local;
      const temperature = item.state.temperature;
      const query = `INSERT INTO dane (timestamp_local, temperature) VALUES ('${timestamp_local}', ${temperature})`;
      connection.query(query, (error, results, fields) => {
        if (error) throw error;
        console.log(`Zapisano dane: ${timestamp_local}, ${temperature}`);
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });
/////////////////////////////////////////////////////
// Utwórz obiekt XMLHttpRequest
let xhttp = new XMLHttpRequest();

// Wyślij zapytanie do serwera
xhttp.open("GET", "pogoda.php", true);
xhttp.send();

// Kiedy serwer zwróci odpowiedź
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Pobierz dane z serwera
    let data = JSON.parse(this.responseText);
    
    // Wyświetl dane na stronie
    let output = "";
    for (let i = 0; i < data.length; i++) {
      output += "Data: " + data[i].data + ", Temperatura: " + data[i].temperatura + "<br>";
    }
    document.getElementById("wynik").innerHTML = output;
  }
};
