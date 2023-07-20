function getProfile(){
  $.ajax({
    "url":USERPROFILE_API,
    "type":"POST",
    "data": { getLoggedUser: true },
    "success":function(response){
    console.log(response);
    let parseResponse=JSON.parse(response);
    console.log(parseResponse);
    let userData=parseResponse;
    $("#accountNumber").text(userData.data[0]);
    $("#userName").text(userData.data[1]);
    $("#emailInfo").text(userData.data[11]);
    
    $("#UserName").text("Username: " + userData.data[1]);
    $("#fName").text("Name: " + userData.data[2] +" "+ userData.data[3]);
    $("#phoneNumber").text("Phone Number: " + userData.data[4]);
    $("#birthday").text("Birth Date: " + userData.data[5]); 
    $("#address").text("Address: " + userData.data[6])+", "+ (userData.data[9]) +", "+ (userData.data[8]) +", "+ (userData.data[7]) +", zip code :"+(userData.data[10]) ;
    $("#email").text("Email: " + userData.data[11]);
    $("#password").text("Password: " + userData.data[12]);
    $("#cDate").text("creation date: " + userData.data[13]);

    $('#newUserName').val(userData.data[1]);
    $('#newfName').val(userData.data[2]);
    $('#newlName').val(userData.data[3]);
    $('#newPhoneNumber').val(userData.data[4]);
    $('#newBirthday').val(userData.data[5]);
    $('#newAddress').val(userData.data[6]);
    $('#newCountry').val(userData.data[9]);
    $('#newProvince').val(userData.data[8]);
    $('#newCity').val(userData.data[7]);
    $('#newZip').val(userData.data[10]);
    $('#newEmail').val(userData.data[11]);

    },
    "error" : function(xhr,status,error){
      alert("error");
    }
  });
}

function updateProfile(){
let updatedUserData = {
  "userName":$("#newUserName").val(),
  "fName":$("#newfName").val(),
  "lName":$("#newlName").val(),
  "phoneNumber":$("#newPhoneNumber").val(),
  "birthday":$("#newBirthday").val(),
  "address":$("#newAddress").val(),
  "country":$("#newCountry").val(),
  "province":$("#newProvince").val(),
  "city":$("#newCity").val(),
  "zip":$("#newZip").val(),
  "email":$("#newEmail").val(),
  };

$.ajax({
  url: "../../api/updateProfile.php",
  type: "POST",
  data: "updatedUserData="+JSON.stringify(updatedUserData),
  success: function(response) {

    console.log(response); 
    var parsedResponse=JSON.parse(response);
    if (parsedResponse.status === 200) {
      $('.displayMsg').css('color','yellowgreen');
      $('.displayMsg').html(parsedResponse.description);
     } else {
      $('.displayMsg').html(parsedResponse.description);
        console.error(parsedResponse.description);
     }
  },
  error: function(xhr, status, error) {
    alert("error");
  }
});
}

function updatePassword(){
  let userUpdate = {
   "userId":$("#accountNumber").text(),
   "givenOldPass":$("#oldPassword").val(),
   "givenPass":$("#newPass").val(),
   "givenConfirmNewPass":$("#confirmNewPass").val()
  };
  
  $.ajax({
    url: "../../api/updatePass.php",
    type: "POST",
    data: "userUpdate="+JSON.stringify(userUpdate),
    success: function(response) {
 
    console.log(response); 
    
    var parsedResponse=JSON.parse(response);
    
    if (parsedResponse.status === 200) {
      $('.displayMsg').css('color','yellowgreen');
      $('.displayMsg').html(parsedResponse.description);
     } else if (parsedResponse.status === 411){
      $('.displayMsg').css('color','orange');
      $('.displayMsg').html(parsedResponse.description);
     }else if (parsedResponse.status === 401){
      $('.displayMsg').css('color','orange');
      $('.displayMsg').html(parsedResponse.description);
     }else if (parsedResponse.status === 406){
      $('.displayMsg').css('color','orange');
      $('.displayMsg').html(parsedResponse.description);
     }else{
      $('.displayMsg').html(parsedResponse.description);
     }
    },
    error: function(xhr, status, error){
      alert("error");
    } 
  });
}

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
  $.ajax({
    url: "../../api/updateImage.php",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function(response) {
      console.log("image uploaded successfully");  
      
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
  let userId = $("#accountNumber").html();
  showProfileImage(userId);   
  
  function showProfileImage(id){
  $.ajax({
    type: "GET", 
    url: "../../api/showProfileImage.php", 
    data: { userId: id },
    dataType: "json",
    success: function (response) {
      console.log(id)
      if (response.imageData) {
      
        $("#profileImage").attr("src", "data:image/jpeg;base64," + response.imageData);
      } else {
        
        $("#profileImage").attr("src", "path_to_default_image.jpg");
      }
    },
    error: function (xhr, status, error) {
      
      
      $("#profileImage").attr("src", "path_to_default_image.jpg"); 
    },
  });
  }
})