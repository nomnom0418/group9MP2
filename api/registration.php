<?php
include "config.php";

if (isset($_POST['registrationData'])) {
    $registerRequest = json_decode($_POST['registrationData']);
    $response = array();
    $data=$_POST['registrationData'];
    
    $sql = "SELECT * FROM " . TBL_USERINFO . " WHERE email = '" . $registerRequest->email . "'";
    $results = $connection->query($sql);
    
    $emails = array();

    while ($row = $results->fetch_assoc()) {
        array_push($emails, $row);
    }
    $requestedEmail=$registerRequest->email;
    
    function allreadyExist($emails,$rEmail){
    foreach($emails as $email){
        $dbEmail=$email['email'];
       if($dbEmail===$rEmail){
        return $dbEmail;
        }
      }
    }
    $existed= allreadyExist($emails,$requestedEmail);
    if($existed===$registerRequest->email){
    $response = createResponse(409, "Conflict", "email allready exist");
    }elseif ($registerRequest->pass != $registerRequest->confirmPassword) {
        $response = createResponse(409, "Error", "Password does not match");
    }else {
     //   $password = password_hash($registerRequest->pass, PASSWORD_DEFAULT);

        $sql = "INSERT INTO `tbl_userinfo`(`fName`, `lName`, `birthday`, `address`, `city`,`province`,`zip`,`country`,`email`,`pass`)
        VALUES ('{$registerRequest->fName}','{$registerRequest->lName}','{$registerRequest->birthday}','{$registerRequest->address}','{$registerRequest->city}','{$registerRequest->province}','{$registerRequest->zip}','{$registerRequest->country}','{$registerRequest->email}','{$registerRequest->pass}')";
        $isInserted = $connection->query($sql);

        if ($isInserted) {
            $response = createResponse(201, "Created", "Account Successfully Created");
        } else {
            $response = createResponse(300, "Error", "Error while saving user");
        }
    }
    echo json_encode($response);
}