<?php

$defUserName='user';
$defPassword='pass';

if(isset($_POST['userLog'])){
  $loginRequest = json_decode($_POST['userLog']);
  $response = array();
  if($defUserName===$loginRequest->userName){
    $response["status"]="200";
    $response["description"]="You are Login";
    $response["title"]="login success";
  }else{
    $response["status"]="401";
    $response["description"]="Login failed";
    $response["title"]="not found";
  }
  echo json_encode($response);
}
