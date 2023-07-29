<?php
include "config.php";

if(isset($_GET['Index'])){
  $blogCount = $_GET['Index'];
  $sql = "SELECT b.`blogId`, b.`upload`, b.`category`, b.`title`, b.`created_date`, b.`intro`, u.`profilePic`, u.`userId`
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
  $data=array();
  for($i = $blogCount; $i < $blogCount +4; $i++){
    array_push($data, $blogData[$i]);
  }

  $response = createResponse(200,"ok","ok",$data);
  echo json_encode($response);
}

if(isset($_GET['categories'])){
  $cat = $_GET['categories'];
  $sql = "SELECT b.`blogId`, b.`upload`, b.`title`, b.`created_date`, b.`intro`, u.`profilePic`
          FROM `TBL_BLOGINFO` AS b
          JOIN `TBL_USERINFO` AS u
          ON b.`userId` = u.`userId`
          WHERE b.`category` = '$cat'";
  
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
  // $data=array();
  // for($i = $blogCount; $i < $blogCount +4; $i++){
  //   array_push($data, $blogData[$i]);
  // }

  $response = createResponse(200,"ok","ok",$blogData);
  echo json_encode($response);
}
?>