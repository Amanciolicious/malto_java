<?php 
$servername = "localhost";
$username = "root";
$password = "";
$database = "tae";

try {
    $connection = new PDO("mysql:host=$servername;dbname=$database",$username,$password);
    $connection->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
} catch (\Throwable $th){
die(json_encode(['error' => "Database connection failed".$th->getMessage()]));
}

?>