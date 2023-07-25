function getProfile(){
  $.ajax({
    "url":USERPROFILE_API,
    "type":"POST",
    "data": { getLoggedUser: true },
    "success":function(response){
    
    let parseResponse=JSON.parse(response);
  
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
  url: UPDATEPROFILE_API,
  type: "POST",
  data: "updatedUserData="+JSON.stringify(updatedUserData),
  success: function(response) {
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
    url: UPDATEPASSWORD_API,
    type: "POST",
    data: "userUpdate="+JSON.stringify(userUpdate),
    success: function(response) {
    
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


