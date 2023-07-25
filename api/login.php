<?php
session_start();
include "config.php";

if (isset($_POST['userLog'])) { 

    $loginRequest = json_decode($_POST['userLog']);
    $response = array();

    $sql = "SELECT * FROM " . TBL_USERINFO . " WHERE email = '" . $loginRequest->email . "'";
    $results = $connection->query($sql);

    $users = array();
    
    while ($row = $results->fetch_assoc()) {
        array_push($users, $row);
    
    }
    $response = createResponse(401, "error","accountdoesnt exist");
    foreach($users as $user){
      if ($loginRequest->email === $user['email'] && $loginRequest->password === $user['pass']) {
        $response = createResponse(200, "Succesful", "Successful");
        $_SESSION['logged-in-user']=array(
         'userId'=> $user['userId'],
        );
      } else {
        $response = createResponse(406, "Error", "Wrong Password please try again");
      }
    }
    echo json_encode($response);
}
