


<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");//http://localhost:3000
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $email = $request->email;
    $password = $request->password;
    
    $sql = "SELECT * FROM `user` WHERE password = '$password' AND email= '$email'";
    $result = mysqli_query($db,$sql);
    if(mysqli_num_rows($result)==1){
        $data=array();
        while($row =mysqli_fetch_assoc($result)){
            $data[] = $row;}
    }
    else{
         echo "unsuccessful";
    }
    echo json_encode($data) ;     
}
?> 