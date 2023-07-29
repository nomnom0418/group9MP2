<?php
session_start();
include "config.php";
$userId = $_SESSION['logged-in-user']['userId'];
if (isset($_POST['getLoggedUser'])) { 
  $sql = "SELECT `userName`, `fName`, `lName`, `phoneNumber`, `birthday`, `gender`, `address`, `city`, `province`, `zip`, `country`, `email`, `pass`, `creation_date`
  FROM `TBL_USERINFO`
  WHERE `userId` = $userId";
$result = $connection->query($sql);
$userData = array();
while ($row = $result->fetch_assoc()){
  array_push($userData, $row);
}

$response = createResponse(200,"ok", "retreived bio data",$userData);
echo json_encode($response);
}