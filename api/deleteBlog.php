<?php
include "config.php";

if (isset($_GET['deleteBlog'])) { 

    $deleteRequest = json_decode($_GET['deleteBlog']);
    $response = array();

    $sql = "DELETE FROM `TBL_BLOGINFO` WHERE `blogId` = $deleteRequest->blogId";
    $result = $connection->query($sql);

    if($result){
      $response = createResponse(200, "success","successfully deleted");
    }else{
      $response = createResponse(401, "error","error while deleting");
    }
    echo json_encode($response);
}
