<?php

include "config.php";
$response=array();
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["editImg"]) && isset($_POST["blogId"]) &&
 isset($_POST["rowName"])) {

    $file = $_FILES["editImg"];
    $blogId = $_POST["blogId"];
    $rowName = $_POST["rowName"];
    
    $uploadOk = 1;
    
    $check = getimagesize($file["tmp_name"]);
    if ($check === false) {
        $response["error"] = "File is not an image.";
        $uploadOk = 0;
    }

    if ($file["size"] > 5000000) {
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
    
        $sql= "UPDATE `TBL_BLOGINFO` SET `$rowName` = ? WHERE `blogId` = ?";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param("si", $imageData, $blogId);
          $response = createResponse(200,"ok","updated");
  
          if ($stmt->execute()) {
            $response=createResponse(200, "success", "successfully created");
      
            
        } else {
            $response = createResponse(300, "error", "Error while saving");
        }

        $stmt->close();
    }
  $response["error"] = "Invalid request or missing 'profileImage' or 'Id' field in the request.";
}

echo json_encode($response);
?>