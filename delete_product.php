<?php
include("dbconnect.php");

$query = "DELETE FROM products_table WHERE product_id = '".$_GET['id']."'";
$statement = $connection->prepare($query);
$res = $statement->execute();

if ($res) {
    echo json_encode(["res" => "success"]);
} else {
    echo json_encode(["res" => "error", "msg" => "Failed to delete"]);
}
?>
