<?php
include "config.php";
$response = array();

// Check if the API request was sent using the correct method (POST) and if the file was uploaded
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["profileImage"]) && isset($_POST["userId"])) {
    // Access the file data using $_FILES
    $file = $_FILES["profileImage"];
    $userId = $_POST["userId"];

    $uploadOk = 1;
    // ... (rest of the image upload validation and processing as in the previous code)
    $check = getimagesize($file["tmp_name"]);
    if ($check === false) {
        $response["error"] = "File is not an image.";
        $uploadOk = 0;
    }

    // Check file size (optional: you can define your own file size limit)
    if ($file["size"] > 500000) {
        $response["error"] = "Sorry, your file is too large.";
        $uploadOk = 0;
    }
    $imageFileType = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));
    // Allow only certain file formats (optional: you can define your own list of allowed formats)
    if ($imageFileType !== "jpg" && $imageFileType !== "png" && $imageFileType !== "jpeg" && $imageFileType !== "gif") {
        $response["error"] = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }

    // If the upload is successful, read the image content and store it as a BLOB
    if ($uploadOk) {
        $imageData = file_get_contents($file["tmp_name"]);

        // Update the user's profile image as a BLOB in the database
        $sql = "UPDATE `TBL_USERINFO` SET `profilePic` = ? WHERE `userId` = ?";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param("si", $imageData, $userId);

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

