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

if(isset($_POST["registrationData"])){
  $userInfo = json_decode($_POST["registrationData"]);
  $response = array();
  if($userInfo->firstName==null || $userInfo->lastName==null || $userInfo->birthday==null){
    $response["status"]="408";
    $response["description"]="please fill up all the information";
    $response["title"]="request timeout";
   }elseif($userInfo->address==null || $userInfo->city==null || $userInfo->provinceSelect==null){
    $response["status"]="408";
    $response["description"]="please fill up all the information";
    $response["title"]="request timeout";
   }elseif($userInfo->zip==null || $userInfo->countrySelect==null || $userInfo->email==null){
    $response["status"]="408";
    $response["description"]="please fill up all the information";
    $response["title"]="request timeout";
   }elseif($userInfo->newPassword ==null || $userInfo->confirmPassword==null){
      $response["status"]="408";
      $response["description"]="please enter your password";
      $response["title"]="request timeout";
    }
   elseif($userInfo->newPassword !==null && $userInfo->confirmPassword !==null && $userInfo->newPassword === $userInfo->confirmPassword){
    $response["status"]="200";
    $response["description"]="You are now registered";
    $response["title"]="registration success";
  }else{
    $response["status"]="406";
    $response["description"]="password do not match";
    $response["title"]="not acceptable";
  }
  echo json_encode($response);
}