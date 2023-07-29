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
    $sql= "UPDATE " . TBL_BLOGINFO . " SET $blogUpdate->name = '$content' WHERE blogId = $blogUpdate->blogId";
    $updated = $connection->query($sql);
    if($updated){
    $response = createResponse(200,"ok","updated");
  }
  }elseif($rowName == "upload"){
    $uploadOk = 1;
    $check = getimagesize($file["tmp_name"]);
    if ($check === false) {
        $response["error"] = "File is not an image.";
        $uploadOk = 0;
    }
    if ($file["size"] > 5000000) {
        $response["error"] = "Sorry, your file is too large.";
        $uploadOk = 0;
    }
    $imageFileType = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));
    if ($imageFileType !== "jpg" && $imageFileType !== "png" && $imageFileType !== "jpeg" && $imageFileType !== "gif") {
        $response["error"] = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }
    if ($uploadOk) {
        $imageData = file_get_contents($file["tmp_name"]);
        $sql= "UPDATE " . TBL_BLOGINFO . " SET $blogUpdate->name = '$blogData' WHERE blogId = $blogUpdate->blogId";
        $updated = $connection->query($sql);
        if($updated){
        $response = createResponse(200,"ok","updated");
        }
      }   
      
  }elseif($rowName == "title"){
    $sql= "UPDATE " . TBL_BLOGINFO . " SET $rowName = '$blogData' WHERE blogId = $blogUpdate->blogId";
    $updated = $connection->query($sql);
    if($updated){
    $response = createResponse(200,"ok","updated");
    }
  }elseif($rowName == "intro"){
    $sql= "UPDATE " . TBL_BLOGINFO . " SET $rowName = '$blogData' WHERE blogId = $blogUpdate->blogId";
    $updated = $connection->query($sql);
    if($updated){
    $response = createResponse(200,"ok","updated");
    }
  }
  echo json_encode($response);
  
}

?>