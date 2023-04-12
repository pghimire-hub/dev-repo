<?php
include 'DbConnect.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$objDb = new DbConnect;
$conn = $objDb->connect();
//print_r($_GET);
$sql = "UPDATE `poolvisitors` SET `visitorpoolid`=:visitorpoolid,`visitorid`=:visitorid,`visitorpool`=:visitorpool,`expiry_date`=:expiry_date WHERE visitorpoolid=:visitorpoolid";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':visitorpoolid', $_GET['visitorpoolid']);
$stmt->bindParam(':visitorid', $_GET['visitorid']);
$stmt->bindParam(':visitorpool', $_GET['visitorpool']);
$stmt->bindParam(':expiry_date', $_GET['expiry_date']);
if ($stmt->execute()) {
    $response = ['status' => 1, 'message' => 'Record updated successfully.'];
} else {
    $response = ['status' => 0, 'message' => 'Failed to update record.'];
}
return $response;
?>