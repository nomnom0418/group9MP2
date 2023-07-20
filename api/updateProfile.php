<?php
session_start();
include "config.php";

if (isset($_POST['updatedUserData'])){

    $updateRequest = json_decode($_POST['updatedUserData']);
    $response = array();

    $userId = $_SESSION['logged-in-user'][0];
    
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
    $newPass = $updateRequest->pass;
    
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
        $_SESSION['logged-in-user'][12] = $newPass;

        $response = createResponse(200, "Success", "User information updated successfully");
    } else {
        $response = createResponse(500, "Error", "Failed to update user information");
    }
}

?>