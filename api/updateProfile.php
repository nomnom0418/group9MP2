<?php
session_start();
include "config.php";
$userId = $_SESSION['logged-in-user']['userId'];
if (isset($_POST['updatedUserData'])){

    $updateRequest = json_decode($_POST['updatedUserData']);
    $response = array();
    
    $newUserName = $updateRequest->userName;
    $newFirstName = $updateRequest->fName;
    $newLastName = $updateRequest->lName;
    $newPhoneNumber = $updateRequest->phoneNumber;
    $newBirthday = $updateRequest->birthday;
    $newAddress = $updateRequest->address;
    $newCountry = $updateRequest->country;
    $newProvince = $updateRequest->province;
    $newCity = $updateRequest->city;
    $newZip = $updateRequest->zip;
    $newEmail = $updateRequest->email;

    
    $sql = "UPDATE " . TBL_USERINFO . " SET userName = '$newUserName', fName = '$newFirstName', lName = '$newLastName', phoneNumber = '$newPhoneNumber',
          birthday = '$newBirthday', address = '$newAddress', country = '$newCountry', province = '$newProvince', city = '$newCity',
          zip = '$newZip', email = '$newEmail' WHERE userId = $userId";

    if ($connection->query($sql) === true) {
        $_SESSION['logged-in-user'][1] = $newUserName;
        $_SESSION['logged-in-user'][2] = $newFirstName;
        $_SESSION['logged-in-user'][3] = $newLastName;
        $_SESSION['logged-in-user'][4] = $newPhoneNumber;
        $_SESSION['logged-in-user'][5] = $newBirthday;
        $_SESSION['logged-in-user'][6] = $newAddress;
        $_SESSION['logged-in-user'][7] = $newCountry;
        $_SESSION['logged-in-user'][8] = $newProvince;
        $_SESSION['logged-in-user'][9] = $newCity;
        $_SESSION['logged-in-user'][10] = $newZip;
        $_SESSION['logged-in-user'][11] = $newEmail;
        
    

        $response = createResponse(200, "Success", "User information updated successfully");
    } else {
        $response = createResponse(500, "Error", "Failed to update user information");
    }
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
        $sql="UPDATE `tbl_bio` SET `elem`='$userBio->elem',`high`='$userBio->high',`college`='$userBio->college',`work`='$userBio->work',`fav`='$userBio->fav',`hob`='$userBio->hob',`sport`='$userBio->sport',`status`='$userBio->status' WHERE `userId`=$userId";
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