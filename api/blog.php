<?php
include "config.php";
$response = array();

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["upload"]) && isset($_POST["userId"]) && isset($_POST["category"]) && isset($_POST["title"]) && isset($_POST["intro"]) && isset($_POST["content"])) {

    $file = $_FILES["upload"];
    $userId = $_POST["userId"];
    $category = $_POST["category"];
    $title = $_POST["title"];
    $intro = $_POST["intro"];
    $content = $_POST["content"];

    $uploadOk = 1;
  
    $check = getimagesize($file["tmp_name"]);
    if ($check === false) {
        $response["error"] = "File is not an image.";
        $uploadOk = 0;
    }

    if ($file["size"] > 1000000) {
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

        
        $sql = "INSERT INTO `tbl_bloginfo`(`category`, `title`, `content`, `upload`, `imgName`, `userId`, `intro`) 
                VALUES ('[$category]','[$title]','[$content]','[$file]','[$imgData]','[$userId]','[$intro]')";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param("si", $imageData, $userId);

        if ($stmt->execute()) {
            $response["success"] = "successful.";
      
            
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

