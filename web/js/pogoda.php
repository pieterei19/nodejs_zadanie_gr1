<?php
// Ustaw nagłówek odpowiedzi na typ JSON
header('Content-Type: application/json');

// Pobierz dane z bazy danych MySQL
$host = 'imiki.pl';
$user = 'zsti1';
$password = 'EciePecie666!';
$dbname = 'zsti1';
$connection = mysqli_connect($host, $user, $password, $dbname);
$query = "SELECT * FROM dane";
$result = mysqli_query($connection, $query);

// Przygotuj dane w formacie JSON
$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = array(
        'data' => $row['timestamp_local'],
        'dane' => $row['danee']
    );
}
$json = json_encode($data);

// Zwróć dane w formacie JSON
echo $json;
?>
