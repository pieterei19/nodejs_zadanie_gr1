<?php
$servername = "localhost";
$username = "nazwa_uzytkownika";
$password = "haslo";
$dbname = "zsti1";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
  die("Nieudane połączenie: " . mysqli_connect_error());
}

$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  // Wyświetlenie wyników w tabeli HTML
  echo "<table>";
  while($row = mysqli_fetch_assoc($result)) {
    echo "<tr><td>" . $row["id"]. "</td><td>" . $row["name"]. "</td></tr>";
  }
  echo "</table>";
} else {
  echo "Brak wyników.";
}

mysqli_close($conn);
?>
