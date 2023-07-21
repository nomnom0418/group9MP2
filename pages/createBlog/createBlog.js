

function uploadBlog(){
  let sessionId=parseInt($("#accountNumber").html());

  var formData = new FormData();
  
  formData.append("userId", sessionId);
  formData.append("category", $('#category').val());
  formData.append("title", $('#title').val());
  formData.append("intro", $('#intro').val());
  formData.append("content", $('#content').val());
  formData.append("upload", $('#uploadImg')[0].files[0]);
  console.log($('#uploadImg')[0].files[0]);
  $.ajax({
    url: "../../api/blog.php", 
    type: "POST", 
    data: formData,
    contentType: false,
    processData: false,
    success: function (response) {
      console.log(response);
      
    },
    error: function (xhr, status, error) {
    
     },
  });
  }