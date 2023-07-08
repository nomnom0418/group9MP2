<?php

$defUserName='user';
$defPassword='pass';

if(isset($_POST['userLog'])){
  $loginRequest = json_decode($_POST['userLog']);
  $response = array();
  if($defUserName===$loginRequest->userName && $defPassword===$loginRequest->password){
    $response["status"]="200";
    $response["description"]="You are Login";
    $response["title"]="login success";
  }elseif($loginRequest->userName==null && $loginRequest->password==null){
    $response["status"]="408";
    $response["description"]="please enter username and password";
    $response["title"]="request timeout";
  }elseif($defUserName != $loginRequest->userName || $loginRequest->password != $defPassword){
    $response["status"]="406";
    $response["description"]="invalid username or password";
    $response["title"]="not acceptable";
  }
  echo json_encode($response);
}
