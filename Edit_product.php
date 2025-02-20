<?php
include("dbconnect.php");

$query = "UPDATE products_table SET product_name = '".$_GET['pname']."' WHERE product_id = '".$_GET['id']."'";
$statement = $connection->prepare($query);
$res = $statement->execute();

if ($res) {
    echo json_encode(["res" => "success"]);
} else {
    echo json_encode(["res" => "error", "msg" => "Failed to update"]);
}
?>
