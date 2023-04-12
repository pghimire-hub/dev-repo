<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
include 'GetPoolTimings.php';
include 'InsertPoolTimings.php';
include 'UpdatePoolTiming.php';
include 'DeletePool.php';
include 'InsertPoolResident.php';
include 'GetPoolResidents.php';
include 'UpdatePoolResident.php';


$objDb = new DbConnect;
$conn = $objDb->connect();

$pool = file_get_contents('php://input');

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];
$path = explode('/', $uri);
//print_r($path);
switch ($method) {
    case "GET":
        if ($path[2] == 'pool') {
            $GetPool = new GetPoolTimings;
            $pool = $GetPool->getPoolTimings($conn, $path);
            echo json_encode($pool);
        } else if ($path[2] == 'poolresident') {
            $GetPoolResidents = new GetPoolResidents;
            $pool = $GetPoolResidents->getPoolResidents($conn, $path);
            echo json_encode($pool);
        }
        break;
    case "POST":
        if ($path[2] == 'pool' && $path[3] == 'submit') {
            $pool = json_decode(file_get_contents('php://input'));
            $InsertPool = new InsertPoolTimings;
            $response = $InsertPool->insertPoolTimings($conn, $pool);
            echo json_encode($response);
        } else if ($path[2] == 'pool' && $path[3] == 'residentsubmit') {
            $pool = json_decode(file_get_contents('php://input'));
            $InsertPoolResident = new InsertPoolResident;
            $response = $InsertPoolResident->insertPoolResident($conn, $pool);
            echo json_encode($response);
        }
        break;
    case "PUT":
        if ($path[2] == 'pool') {
            $pool = json_decode(file_get_contents('php://input'));
            $UpdatePool = new UpdatePoolTiming;
            $response = $UpdatePool->updatePoolTimings($conn, $pool);
            echo json_encode($response);
        } else if ($path[2] == 'poolresident') {
            $pool = json_decode(file_get_contents('php://input'));
            $UpdatePool = new UpdatePoolResident;
            $response = $UpdatePool->updatePoolResident($conn, $pool);
            echo json_encode($response);
        }
        break;
    case "DELETE":
        if ($path[2] == 'pool') {
            $pool = json_decode(file_get_contents('php://input'));
            $DeletePool = new DeletePool;
            $response = $DeletePool->deletePool($conn, $path);
            echo json_encode($response);
        }
        break;
}