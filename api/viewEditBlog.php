<?php

include "config.php";

if (isset($_GET["blogId"])) {
  $blogId = json_decode($_GET["blogId"]);
  $sql = "SELECT `category`, `title`, `content`, `intro` FROM `TBL_BLOGINFO`  WHERE blogId = '$blogId->blogId'";
  $result = $connection->query($sql);
  
  $blogData=array();
  while ($row = $result->fetch_assoc()) {
    array_push($blogData, $row);
  }

  $response = createResponse(200,"ok","ok",$blogData);
  echo json_encode($response);
}
  
if (isset($_POST['update'])) {
  $blogUpdate = json_decode($_POST['update']);
  $response = array();
  $blogData = $blogUpdate->update;
  $rowName = $blogUpdate->name;
  if($rowName == "content"){
    $sanitizedInput = htmlspecialchars($blogData);
    $formattedInput = nl2br($sanitizedInput);
    $content = $formattedInput;
    $sql= "UPDATE " . TBL_BLOGINFO . " SET $rowName = '$content' WHERE blogId = $blogUpdate->blogId";
    $updated = $connection->query($sql);
    if($updated){
    $response = createResponse(200,"ok","updated");
    }
  }else{
    $sql= "UPDATE " . TBL_BLOGINFO . " SET $rowName = '$blogData' WHERE blogId = $blogUpdate->blogId";
    $updated = $connection->query($sql);
    if($updated){
    $response = createResponse(200,"ok","updated");
    }
  }
  echo json_encode($response);
}



?>