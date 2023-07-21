<?php
include "config.php";
$response = array();


if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["profileImage"]) && isset($_POST["userId"])) {

    $file = $_FILES["profileImage"];
    $userId = $_POST["userId"];

    $uploadOk = 1;

    $check = getimagesize($file["tmp_name"]);
    if ($check === false) {
        $response["error"] = "File is not an image.";
        $uploadOk = 0;
    }


    if ($file["size"] > 500000) {
        $response["error"] = "Sorry, your file is too large.";
        $uploadOk = 0;
    }
    $imageFileType = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));

    if ($imageFileType !== "jpg" && $imageFileType !== "png" && $imageFileType !== "jpeg" && $imageFileType !== "gif") {
        $response["error"] = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }


    if ($uploadOk) {
        $imageData = file_get_contents($file["tmp_name"]);


        $sql = "UPDATE `TBL_USERINFO` SET `profilePic` = ? WHERE `userId` = ?";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param("bi", $imageData, $userId);

        if ($stmt->execute()) {
            $response["success"] = "Profile image updated successfully.";
            $response["userId"] = $userId;
            
        } else {
            $response["error"] = "Error updating profile image: " . $stmt->error;
        }

        $stmt->close();
    }
} else {
    $response["error"] = "Invalid request or missing 'profileImage' or 'userId' field in the request.";
}

// Return the response as JSON
echo json_encode($response);

?>

