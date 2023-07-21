<?php
include "config.php";

if (isset($_GET["userId"])) {
    $userId = $_GET["userId"];

    $sql = "SELECT b.`blogId`, b.`upload`, b.`category`, b.`title`, b.`content`, b.`creation_date`, b.`intro`, u.`profilePic`
            FROM `TBL_BLOGINFO` AS b
            JOIN `TBL_USERINFO` AS u ON b.`userId` = u.`userId`
            WHERE b.`userId` = ?";
    
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $stmt->bind_result($blogId, $imageData, $category, $title, $content, $creation_date, $intro, $profilePic);

    $responseData = array();

    while ($stmt->fetch()) {
        $entry = array(
            "blogId" => $blogId,
            "imageData" => base64_encode($imageData),
            "category" => $category,
            "title" => $title,
            "content" => $content,
            "creation_date" => $creation_date,
            "intro" => $intro,
            "profilePic" => base64_encode($profilePic) 
        );
        $responseData[] = $entry;
    }

    echo json_encode($responseData);

    $stmt->close();
    $connection->close();
}
?>