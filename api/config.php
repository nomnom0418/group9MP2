<?php
include "env.php";
include "models.php";
include "function.php";
$connection = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
if($connection->connect_errno){
  echo "<h3>cannot connect </h3>";
  return;
}