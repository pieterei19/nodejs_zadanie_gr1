<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
   
</body>
</html>
<?php
$servername = "localhost";
$username = "zsti1";
$password = "EciePecie666!";
$dbname = "zsti1";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
  die("Nieudane połączenie: " . mysqli_connect_error());
}

$sql = "SELECT * FROM dane";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  echo "<table>";
  while($row = mysqli_fetch_assoc($result)) {
    echo "<tr><td>" . $row["temp1"]. "</td><td>" . $row["temp2"]. "</td><td>". $row["temp3"]. "</td><td>". $row["temp4"]. "</td><td>". $row["humidity"]. "</td><td>". $row["TimeStamp"]. "</td></tr>;
  }
  echo "</table>";
} else {
  echo "Brak wyników.";
}

mysqli_close($conn);
?>
