 <?php
// include "config.php";

// if (isset($_GET['index'])){
//   $sqlCommand = "SELECT * FROM " . TBL_USERINFO;
//   $results = $connection->query($sqlCommand);
//   print_r ($results);
//   $response = array();
//   $records = array();
  
//   while ($row = $results->fetch_assoc()){
//     array_push($records,$row);
//   }

//   $response = createResponse(200, "Successful", "Succesful",$records);
//   echo json_encode($response); -->
//}

// if (isset($_POST['getLoggedUser'])) { 

//   $loginRequest = json_decode($_POST['getLoggedUser']);
//   $response = array();

//   $sql = "SELECT * FROM " . TBL_USERINFO . " WHERE email = '" . $loginRequest->email . "'";
//   $results = $connection->query($sql);

//   $users = array();

//   while ($row = $results->fetch_assoc()) {
//       array_push($users, $row);
  
//   }
//   $response = createResponse(401, "error","accountdoesnt exist");
//   foreach($users as $user){
//     if ($loginRequest->email === $user['email']) {
//       $response = createResponse(200, "Succesful", "Successful");
//       $_SESSION['logged in user'] = array(
//         $loginRequest->userId,
//         $loginRequest->email,
//         $loginRequest->fName,
//         $loginRequest->lName,
//       );
//     } else {
//       $response = createResponse(406, "Error", "Wrong Password please try again");
//     }
//   }
//   echo json_encode($response);
// }