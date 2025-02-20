<?php
include("dbconnect.php");




    $query = "INSERT INTO products_table (product_name) VALUES ('".$_GET['pname']."')";
    $statement = $connection->prepare($query);
    $res = $statement->execute();

    if($res){
        echo json_encode(["res" => "success"]);
    }
    else {
        echo json_encode(["res" => "error", "msg" => "Failed to insert"]);
    }

?>