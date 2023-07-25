<?php
include "config.php";

if (isset($_GET["userId"])) {
  $userId = json_decode($_GET["userId"]);
  $sql = "SELECT * FROM `TBL_USERINFO` WHERE userId = '$userId->userId'";
  $result = $connection->query($sql);
  
  $userData=array();
  while($row = $result->fetch_assoc()){
    array_push($userData, $row);
  }
  $imageFile=$userData[0]['profilePic'];
  $imageData=base64_encode($imageFile);
  $userData[0]['profilePic']=$imageData;
  
  $response = createResponse(200,"ok","ok",$userData);
  echo json_encode($response);
  }
