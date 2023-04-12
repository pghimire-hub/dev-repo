<?php
$servername = 'vxc4845.uta.cloud';
$username = 'vxc4845_root';
$password = '$lowFire55';
$database = 'vxc4845_terrazas';

// Create connection
$db = mysqli_connect($servername, $username, $password, $database);

// Check connection
if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}
?>