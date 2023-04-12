<?php
include 'DbConnect.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$objDb = new DbConnect;
$conn = $objDb->connect();

$visitorpoolid = file_get_contents('php://input');
$sql = "DELETE FROM `poolvisitors` WHERE visitorpoolid = :poolid";
$response = ['status' => 0, 'message' => 'Record deletion unsuccessful.'];
$stmt = $conn->prepare($sql);
$stmt->bindParam(':poolid', $visitorpoolid);
if ($stmt->execute()) {
    $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
} else {
    $response = ['status' => 0, 'message' => 'Record deletion unsuccessful.'];
}
echo json_encode($response);

?>