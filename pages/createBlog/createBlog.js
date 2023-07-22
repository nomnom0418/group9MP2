

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