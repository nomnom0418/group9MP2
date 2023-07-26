<?php
session_start();
include "config.php";

// Check if the user is logged in
if (isset($_SESSION['logged-in-user']['userId'])) {

    // Unset individual session variables
    unset($_SESSION['logged-in-user']['userId']);
    // ... unset other session variables as needed ...

    // Destroy the session
    session_destroy();

    // Provide feedback to the user and redirect to the login page
    header('Location: ../index.html?logout=success');
    exit();
} else {
    // Redirect to the login page in case the user is not logged in
    header('Location: ../index.html');
    exit();
}
?>