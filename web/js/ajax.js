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
