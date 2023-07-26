<?php
include "config.php";
$response = array();

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["upload"]) && isset($_POST["userId"]) &&
 isset($_POST["category"]) && isset($_POST["title"]) && isset($_POST["intro"]) && isset($_POST["content"])) {

    $file = $_FILES["upload"];
    $userId = $_POST["userId"];
    $category = $_POST["category"];
    $title = $_POST["title"];
    $intro = $_POST["intro"];
    $contents = $_POST["content"];

    $sanitizedInput = htmlspecialchars($contents);
    $formattedInput = nl2br($sanitizedInput);
    $content = $formattedInput;

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
    
        $sql = "INSERT INTO `tbl_bloginfo` (`category`, `title`, `content`, `upload`, `imgName`, `userId`, `intro`) 
            VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param("sssssis", $category, $title, $content, $imageData, $file["name"], $userId, $intro);


        if ($stmt->execute()) {
            $response=createResponse(200, "success", "successfully created");
      
            
        } else {
            $response = createResponse(300, "error", "Error while saving");
        }

        $stmt->close();
    }
} else {
    $response["error"] = "Invalid request or missing 'profileImage' or 'userId' field in the request.";
}

echo json_encode($response);

?>

