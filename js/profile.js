

function callId(){
  let userId = $("#accountNumber").html();
  updateProfileImage(userId);
}

function updateProfileImage(userId){
  let inputElement = $("#profileImageBnt")[0];
    if (inputElement.files.length>0){
      let file = inputElement.files[0];

      let formData = new FormData();
      formData.append("profileImage", file);
      formData.append("userId", userId);
      console.log(formData)
  $.ajax({
    url: "../../api/updateImage.php",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function(response) {
    },
    error: function(xhr, status, error){
      alert("error");
    } 
  });
  }else{
    console.warn("no image selected");
  }
}

$(document).ready(function(){
  let id = $("#accountNumber").html();
    let userId={
      'userId':id
    }
  $.ajax({
    url: SHOWPROFILEIMAGE_API, 
    type: "GET", 
    data: "userId="+JSON.stringify(userId),
    success: function (response) {
      
      let parsedResponse=JSON.parse(response);
      
      let userData=(parsedResponse.data);
      
      let profileImage = "data:image/jpeg;base64," + userData[0].profilePic;
      
      $("#profileImage").attr("src", profileImage);
      
    },
    error: function (xhr, status, error) {
      
    },
  });

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
  
});


