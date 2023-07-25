<?php
include "config.php";
session_start();
$response = array();


if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["profileImage"])) {

    $file = $_FILES["profileImage"];
    $userId = $_SESSION['logged-in-user']['userId'];
    
    $uploadOk = 1;

    $check = getimagesize($file["tmp_name"]);
    if ($check === false) {
        $error["error"] = "File is not an image.";
        $response=createResponse(401,'invalid',$error["error"]);
        $uploadOk = 0;
    }
    if ($file["size"] > 500000) {
        $error["error"] = "Sorry, your file is too large.";
        $response=createResponse(406,'not acceptable',$error["error"]);
        $uploadOk = 0;
    }
    $imageFileType = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));

    if ($imageFileType !== "jpg" && $imageFileType !== "png" && $imageFileType !== "jpeg" && $imageFileType !== "gif") {
        $error["error"] = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $response=createResponse(406,'not acceptable',$error["error"]);
        $uploadOk = 0;
    }


    if ($uploadOk) {
        $imageData = file_get_contents($file["tmp_name"]);

        $sql = "UPDATE `TBL_USERINFO` SET `profilePic` = ? WHERE `userId` = ?";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param("si", $imageData, $userId);

        if ($stmt->execute()) {
            $response=createResponse(200,'success','update success');
            
        } else {
            $response=createResponse(400,'error','update error');
            
        }

        $stmt->close();
    }
} else {
    $response["error"] = "Invalid request or missing 'profileImage' or 'userId' field in the request.";
}

echo json_encode($response);

?>

