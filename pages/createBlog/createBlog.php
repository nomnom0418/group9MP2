<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="../sideBar/sidebar.css">
  <link rel="stylesheet" href="createBlog.css">

  <title>Document</title>
</head>
<body>
  <div class="division">
    <div>
      <?php
        include_once "../sideBar/sidebar.html";
      ?>
    </div>
    <div>
      <?php
        include_once "createBlogBody.html";
      ?>
    </div>
  </div>
  <?php
  include_once "../sideBar/sideText.html";
  ?>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.0/dist/jquery.min.js"></script>
  <script src="../../js/routes.js"></script>
  <script src="../userProfile/userProfile.js"></script>

  <script src="createBlog.js"></script>
  <script>
    getProfile();
  </script>
</body>

</html>