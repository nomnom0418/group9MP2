<?php
include "config.php";

if (isset($_GET["userId"])) {
  $userId = json_decode($_GET["userId"]);
  $sql = "SELECT *
          FROM `TBL_USERINFO` AS a
          JOIN `TBL_BLOGINFO` AS b ON a.`userId` = b.`userId`
          JOIN `TBL_BIO` AS c ON a.`userId` = b.`userId`
          WHERE a.userId = $userId->userId";
  
  $result = $connection->query($sql);
  $usersData=array();
  while ($row = $result->fetch_assoc()) {
    array_push($usersData, $row);
  }
  for($i=0; $i<count($usersData); $i++){
    $imageFile=$usersData[$i]['upload'];
    $imageData=base64_encode($imageFile);
    $usersData[$i]['upload']=$imageData;
    $imageFile=$usersData[$i]['profilePic'];
    $imageData=base64_encode($imageFile);
    $usersData[$i]['profilePic']=$imageData;
  }
  
  
  $response = createResponse(200,"ok","success",$usersData);
  echo json_encode($response);
}
  
?>