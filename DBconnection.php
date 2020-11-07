<?php
// Create a database connection
$server = "ctgplw90pifdso61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
$dbusername = "pl5olm9uaqn9xhli";
$dbpassword = "o7mk03t99ecbrw8c";
$dbname = "j4hxbdarc69h9toz";

$conn = new mysqli($server, $dbusername, $dbpassword, $dbname);

if ($conn->error){
    echo $conn->error;
}else{
    echo "Connected";
}
?>