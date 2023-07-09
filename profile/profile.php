<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="sidebar.css">
  <link rel="stylesheet" href="profileBody.css">
  <link rel="stylesheet" href="post/post.css">
  <title>Document</title>
</head>
<body>
  <div class="division">
    <div>
      <?php
      include_once'sidebar.html';
      ?>
    </div>
    <div>
      <div>
        <?php
        include_once'profileBody.html';
        ?>
      </div>
      <div>
      <?php
        include_once'post/post.html';
        ?>
      </div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.0/dist/jquery.min.js"></script>
  <script src="profileBody.js"></script>
  <script src="post/post.js"></script>
</body>
</html>