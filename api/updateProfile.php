<?php
session_start();
include "config.php";
$userId = $_SESSION['logged-in-user']['userId'];


if (isset($_POST['updatedUserData'])){
    $updateRequest = json_decode($_POST['updatedUserData']);
    $response = array();
    $sql = "UPDATE " . TBL_USERINFO . " SET $updateRequest->key = '$updateRequest->value' WHERE userId = $userId";
    $isUpdated = $connection->query($sql);
    if($isUpdated){
        $response = createResponse(200, "Success", "User information updated successfully");
    } else {
        $response = createResponse(500, "Error", "Failed to update user information");
    }
    echo json_encode($response);
}


if (isset($_POST['bio'])){
    $userBio = json_decode($_POST['bio']);
    $sql = "SELECT * FROM " . TBL_BIO . " WHERE userId = '" . $userId . "'";
    $result = $connection->query($sql);
   
    $isExisted = false;
    while ($row = $result->fetch_assoc()) {
       $isExisted = true;
     }

    if($isExisted){
        $sql= "UPDATE " . TBL_BIO . " SET $userBio->name = '$userBio->userBio' WHERE userId= $userId";
        $isUpdated = $connection->query($sql);
        if($isUpdated){

        $response=createResponse(200,"ok","your bio is updated");
        }
    }

    if(!$isExisted){
        $sql="INSERT INTO `TBL_BIO`(`elem`, `high`, `college`, `work`, `fav`, `hob`, `sport`, `status`, `userId`)
        VALUES ('{$userBio->elem}','{$userBio->high}','{$userBio->college}','{$userBio->work}','{$userBio->fav}','{$userBio->hob}','{$userBio->sport}','{$userBio->status}',$userId)";
        $isInserted = $connection->query($sql);
        if($isInserted){
            $response=createResponse(200,"success","your bio is uploaded");
        }
        else{
            $response=createResponse(400,"error","system error");
        }
        
    }
    echo json_encode($response);
}



?>