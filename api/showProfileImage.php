<?php
include "config.php";

if (isset($_GET["userId"])) {
  $userId = $_GET["userId"];

  $sql = "SELECT `profilePic` FROM `TBL_USERINFO` WHERE `userId` = ?";
  $stmt = $connection->prepare($sql);
  $stmt->bind_param("i", $userId);
  $stmt->execute();
  $stmt->store_result();

  if ($stmt->num_rows > 0) {
    $stmt->bind_result($imageData);
    $stmt->fetch();

    if ($imageData) {
      $base64Image = base64_encode($imageData);
      echo json_encode(array("imageData" => $base64Image));
    } else {
      echo json_encode(array("imageData" => ""));
    }
  } else {
    echo json_encode(array("imageData" => ""));
  }

  $stmt->close();
  $connection->close();
}
?>