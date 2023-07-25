<?php
session_start();
include "config.php";

$userId = $_SESSION['logged-in-user']['userId'];

$sql = "SELECT *
        FROM `TBL_USERINFO`
        WHERE `userId` = $userId";
  $result = $connection->query($sql);
  $blogData=array();
  while ($row = $result->fetch_assoc()) {
    array_push($blogData, $row);
  }
  $profileImg=$blogData[0]['profilePic'];
  $imgProfile=base64_encode($profileImg);
  $blogData[0]['profilePic']=$imgProfile;
 
  $response = createResponse(200,"ok","ok",$blogData);
  echo json_encode($response);
?>
