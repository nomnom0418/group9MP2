<?php
session_start();
include "config.php";

$userId = $_SESSION['logged-in-user']['userId'];

$sql = "SELECT *
        FROM `TBL_BLOGINFO`
        WHERE `userId` = $userId";
  $result = $connection->query($sql);
  $blogDatas=array();
  while ($row = $result->fetch_assoc()) {
    array_push($blogDatas, $row);

  }
  for($i=0; $i<count($blogDatas); $i++){
    $imageFile=$blogDatas[$i]['upload'];
    $imageData=base64_encode($imageFile);
    $blogDatas[$i]['upload']=$imageData;
  }
 
  $response = createResponse(200,"ok","ok",$blogDatas);
  echo json_encode($response);
?>
