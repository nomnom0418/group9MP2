$(document).ready(function() {

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


  

  $('.updateUserName').click(function(){
    $('.unDisplay').slideToggle(200);
  })
  $('.updateName').click(function(){
    $('.displayNameUpdate').slideToggle(200);
  })
  $('.updatePhoneNumber').click(function(){
    $('.displayPhoneUpdate').slideToggle(200);
  })
  $('.updateBirthday').click(function(){
    $('.displayUpdateBirthday').slideToggle(200);
  })
  $('.updateAddress').click(function(){
    $('.displayAddressUpdate').slideToggle(200);
  })
  $('.updateEmail').click(function(){
    $('.displayEmailUpdate').slideToggle(200);
  })
  $('.updatePassword').click(function(){
    $('.displayPasswordUpdate').slideToggle(200);
  })
  $('.xmark').click(function(){
    $('.inputContainer').slideUp(200);
  })
  $('.okBtn').click(function(){
    $('.inputContainer').slideUp(200);
  })

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
     
     "givenOldPass":$("#oldPassword").val(),
     "givenPass":$("#newPass").val(),
     "givenConfirmNewPass":$("#confirmNewPass").val()
    };
    
    $.ajax({
      url: UPDATEPASSWORD_API,
      type: "POST",
      data: "userUpdate="+JSON.stringify(userUpdate),
      success: function(response) {
      
      let parsedResponse=JSON.parse(response);
      
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
  

  function sendBio(){
    let bio = {
      "elem":$("#elementary").val(),
      "high":$("#highSchool").val(),
      "college":$("#college").val(),
      "work":$("#work").val(),
      "fav":$("#favorites").val(),
      "hob":$("#hobbies").val(),
      "sport":$("#sports").val(),
      "status":$("#status").val(),
      };
    
    $.ajax({
      url: SENDBIO_API,
      type: "POST",
      data: "bio="+JSON.stringify(bio),
      success: function(response) {
        var parsedResponse=JSON.parse(response);
        if (parsedResponse.status === 200) {
          $('.bioResponse').css('color','yellowgreen');
          $('.bioResponse').html(parsedResponse.description);
         } else {
          $('.bioResponse').css('color','red');
          $('.bioResponse').html(parsedResponse.description);
         }
      },
      error: function(xhr, status, error) {
        alert("error");
      }
    });
    }
  