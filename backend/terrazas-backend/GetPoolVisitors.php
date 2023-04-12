<?php
include 'DbConnect.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$objDb = new DbConnect;
$conn = $objDb->connect();
$sql = "SELECT * FROM poolvisitors";
if (!empty($_GET)) {
    //print_r($_GET['visitorpoolid']);
    $sql .= " WHERE visitorpoolid = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $_GET['visitorpoolid']);
    $stmt->execute();
    $response = $stmt->fetch(PDO::FETCH_ASSOC);
} else {
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $response = $stmt->fetchAll(PDO::FETCH_ASSOC);
}

echo json_encode($response);
?>