

function uploadBlog(){
  let sessionId=parseInt($("#accountNumber").html());

  var formData = new FormData();
  
  formData.append("userId", sessionId);
  formData.append("category", $('#category').val());
  formData.append("title", $('#title').val());
  formData.append("intro", $('#intro').val());
  formData.append("content", $('#content').val());
  formData.append("upload", $('#uploadImg')[0].files[0]);
  
  $.ajax({
    url: "../../api/blog.php", 
    type: "POST", 
    data: formData,
    contentType: false,
    processData: false,
    success: function (response) {
      console.log(response);
      
      let parsedResponse=JSON.parse(response);
      if (parsedResponse.status === 200) {
       alertElement(parsedResponse.description);
        $(".myAlertElement").css("color","green")
        $('#category').val("");
        $('#title').val("");
        $('#intro').val("");
        $('#content').val("");

       } else {
        let msg="blog Is empty"
        alertElement(msg);
        $(".myAlertElement").css("color","red")
       }
    },
    error: function (xhr, status, error) {
    
     },
  });
  }

  function alertElement(message) {
    var element = $(".myAlertElement");
      element.css("display","block");  
      element.css("color","green");
      element.html(message);
    setTimeout(function () {
      element.fadeOut();
    }, 3000);
  }
  $(document).ready(function(){
    $('.sideBarHome').hover(function(){
      $('.sideHome').css('visibility','visible');
    }, function() {
      $('.sideHome').css('visibility','hidden');
    })
    $('.yourInfo').hover(function(){
      $('.sideProfile').css('visibility','visible');
    }, function() {
      $('.sideProfile').css('visibility','hidden');
    })
    $('.manageYourAccount').hover(function(){
      $('.sideManage').css('visibility','visible');
    }, function() {
      $('.sideManage').css('visibility','hidden');
    })
    $('.createBlog').hover(function(){
      $('.sideCreate').css('visibility','visible');
    }, function() {
      $('.sideCreate').css('visibility','hidden');
    })
    $('.logout').hover(function(){
      $('.sideLogout').css('visibility','visible');
    }, function() {
      $('.sideLogout').css('visibility','hidden');
    })
  
  })