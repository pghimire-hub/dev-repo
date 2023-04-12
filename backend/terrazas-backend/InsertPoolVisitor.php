<?php
include 'DbConnect.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$objDb = new DbConnect;
$conn = $objDb->connect();
$params = json_decode(file_get_contents('php://input'));
//print_r($params->{'visitorid'});
$sql = "INSERT INTO poolvisitors
        (visitorid, visitorpool, expiry_date)
        VALUES(:visitorid, :visitorpool, :expiry_date);
        ";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':visitorid', $params->{'visitorid'});
$stmt->bindParam(':visitorpool', $params->{'visitorpool'});
$stmt->bindParam(':expiry_date', $params->{'expiry_date'});

//echo json_encode($stmt);

if ($stmt->execute()) {
    $response = ['status' => 1, 'message' => 'Record created successfully'];
} else {
    $response = ['status' => 0, 'message' => 'Failed to create a record'];
}
return $response;
?>