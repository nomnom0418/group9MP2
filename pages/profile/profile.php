<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Raleway:ital,wght@0,100;0,200;0,400;1,200&family=Roboto:wght@100;300;400;500&display=swap" rel="stylesheet">

  
  <link rel="stylesheet" href="sidebar.css">
  <link rel="stylesheet" href="profileBody.css">
  <link rel="stylesheet" href="post.css">
  <title>Document</title>
</head>
<body>
  <div class="division">
    <div class="indexNine">
      <?php
      include_once'sidebar.html';
      ?>
    </div>
    <div class="bodyDivision">
      <div class="indexx">
        <?php
        include_once'profileBody.html';
        ?>
      </div>
      <div class="indexx">
      <?php
        include_once'post.html';
        ?>
      </div>
    </div>
  </div>
  <div class="sideSide">
  <?php
   include_once'sideText.html';
  ?>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.0/dist/jquery.min.js"></script>
  <script src="../../js/routes.js"></script>
  <script src="../viewBlog/viewBlog.js"></script>
  <script src="../../js/onClickLogin.js"></script>
  <script src="../../js/profile.js"></script>
  <script src="profileManage.js"></script>
  <script src="post.js"></script>
  
  <script>
    getProfile();
  </script>
  
  
</body>
</html>