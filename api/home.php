<?php
include "config.php";


  $sql = "SELECT b.`blogId`, b.`upload`, b.`category`, b.`title`, b.`creation_date`, b.`intro`, u.`profilePic`, u.`userId`
          FROM `TBL_BLOGINFO` AS b
          JOIN `TBL_USERINFO` AS u
          ON b.`userId` = u.`userId`";
  $result = $connection->query($sql);
  $blogData=array();
  while ($row = $result->fetch_assoc()) {
    array_push($blogData, $row);
  }
  for($i=0; $i<count($blogData); $i++){
    $imageFile=$blogData[$i]['upload'];
    $imageData=base64_encode($imageFile);
    $blogData[$i]['upload']=$imageData;

    $profileImg=$blogData[$i]['profilePic'];
    $imgProfile=base64_encode($profileImg);
    $blogData[$i]['profilePic']=$imgProfile;
  }
 
  $response = createResponse(200,"ok","ok",$blogData);
  echo json_encode($response);
?>