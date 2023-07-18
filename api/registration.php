<?php
include "config.php";

if (isset($_POST['registrationData'])){
    $registerRequest = json_decode($_POST['registrationData']);
    $response = array();
    $data=$_POST['registrationData'];

    // $sql = "SELECT * FROM " . TBL_USERINFO;
    // $results = $connection->query($sql);
    
    // $emails = array();

    // while ($row = $results->fetch_assoc()) {
    //   array_push($emails, $row);
    // }

    $hasNullValue = 0;
    foreach ($registerRequest as $key => $value) {
      if (empty($value)) {
        $hasNullValue = 1;
      }else{
        $hasNullValue = 0;
      }
    }
    
    
    $requestedEmail=$registerRequest->email;


    if($hasNullValue){
      $responses = createResponse(406, "Not acceptable", "please fill up all fields");
    }
    // elseif($existed===$registerRequest->email){
    //   $responses = createResponse(409, "Conflict", "email allready exist");
    // }
    
    elseif ($registerRequest->pass != $registerRequest->confirmPassword){
      $responses = createResponse(409, "Error", "Password does not match");
    }else {
     //   $password = password_hash($registerRequest->pass, PASSWORD_DEFAULT);


     $sql = "SELECT * FROM " . TBL_USERINFO . " WHERE email = '$requestedEmail'";
     $results = $connection->query($sql);
     
     $isExisted = false;
     while ($row = $results->fetch_assoc()) {
       $isExisted = true;
     }
 
     if($isExisted){
        $responses = createResponse(409, "Conflict", "email allready exist");
      } else {
        $sql = "INSERT INTO `tbl_userinfo`(`fName`, `lName`, `birthday`, `address`, `city`,`province`,`zip`,`country`,`email`,`pass`)
        VALUES ('{$registerRequest->fName}','{$registerRequest->lName}','{$registerRequest->birthday}','{$registerRequest->address}','{$registerRequest->city}','{$registerRequest->province}','{$registerRequest->zip}','{$registerRequest->country}','{$registerRequest->email}','{$registerRequest->pass}')";
        $isInserted = $connection->query($sql);
  
        if ($isInserted) {
          
          $responses = createResponse(201, "Created", "Account Successfully Created");
          } else {
          $responses = createResponse(300, "Error", "Error while saving user");
          }
      }

    }
    echo json_encode($responses);
}