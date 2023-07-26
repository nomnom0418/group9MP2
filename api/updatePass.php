<?php
include "config.php";
session_start();
$userId = $_SESSION['logged-in-user']['userId'];
if (isset($_POST['userUpdate'])) { 

    $givenInfo = json_decode($_POST['userUpdate']);
    $response = array();
  
    $sql = "SELECT * FROM " . TBL_USERINFO . " WHERE userId = '" . $userId . "'";
    $results = $connection->query($sql);
    
    $oldInfos = array();

    while($row = $results->fetch_assoc()){
      array_push($oldInfos, $row);
    }
    
    $oldPass=$oldInfos[0]["pass"];
    
    $passLength=strlen($givenInfo->givenPass);
    
    if( $passLength < 6){
      $response = createResponse(411, "length required","password length min of 6 char");
    }
    elseif($givenInfo->givenOldPass !== $oldPass){
      $response = createResponse(401, "unauthorize","invalid password");  
    }
    elseif($givenInfo->givenPass !== $givenInfo->givenConfirmNewPass){
      $response = createResponse(406, "mot acceptable","new password does not match");
    }
    elseif($givenInfo->givenOldPass===$oldPass && $givenInfo->givenPass === $givenInfo->givenConfirmNewPass){
      $sql = "UPDATE  `TBL_USERINFO`  SET `pass` = '$givenInfo->givenPass' WHERE `userId` = '$userId'";
      $isInserted = $connection->query($sql);
      if($isInserted){
        $response = createResponse(200, "SUCCESS","password updated");
      }
    }else{
      $response = createResponse(408, "Error", "Error while saving password");
    }
    
  echo json_encode($response);
}
