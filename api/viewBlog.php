<?php
include "config.php";

if (isset($_GET["blogId"])) {
  $blogId = json_decode($_GET["blogId"]);
  $sql = "SELECT * FROM `TBL_BLOGINFO`  WHERE blogId = '$blogId->blogId'";
  $result = $connection->query($sql);
  $blogData=array();
  while ($row = $result->fetch_assoc()) {
    array_push($blogData, $row);
  }
  $imageFile=$blogData[0]['upload'];
  $imageData=base64_encode($imageFile);
  $blogData[0]['upload']=$imageData;

  $response = createResponse(200,"ok","ok",$blogData);
  echo json_encode($response);
}
  
?>