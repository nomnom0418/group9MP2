<?php
session_start();
include "config.php";
if (isset($_POST['getLoggedUser'])) { 
  $response = createResponse(200, "successfull", "Successfully Login", $_SESSION['logged-in-user']);
  echo json_encode($response);
  
 }else {
    $response = createResponse('401', 'not found', 'Session data not found');
  echo json_encode($response);
}
