<?php
session_start();
include "config.php";
$userId = $_SESSION['logged-in-user']['userId'];
if (isset($_GET['getbio'])){
    $sql = "SELECT *
            FROM `TBL_BIO`
            WHERE `userId` = $userId";
    $result = $connection->query($sql);
    $bioData = array();
    while ($row = $result->fetch_assoc()){
        array_push($bioData, $row);
    }
    $response = createResponse(200,"ok", "retreived bio data",$bioData);
    echo json_encode($response);
}
