<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");//http://localhost:3000
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
     
    $usertype = $request->usertype;
    $dateofbirth = $request->dateofbirth;
    $name = $request->name;
    $address = $request->address;
    $email = $request->email;
    $password = $request->password;
    $zip = $request->zip;
    $sql = "INSERT INTO user (usertype, dateofbirth,name,address,email,password,zip) VALUES ('$usertype','$dateofbirth','$name','$address','$email','$password','$zip')";
    if(mysqli_query($db,$sql)){
        http_response_code(201);
    }
    else{
         http_response_code(422); 
    }
         
}
?> 
