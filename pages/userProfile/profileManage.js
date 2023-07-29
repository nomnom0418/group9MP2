$(document).ready(function() {
  
    $.ajax({
    "url":USERPROFILE_API,
    "type":"POST",
    "data": { getLoggedUser: true },
    "success":function(response){
    let parseResponse=JSON.parse(response);
    let userData=parseResponse;
    let userD=userData.data;
    let userName=userD[0].userName;
    let fName=userD[0].fName;
    let lName=userD[0].lName;
    let address=userD[0].address;
    let birthday=userD[0].birthday;
    let city=userD[0].city;
    let country=userD[0].country;
    let creation_date=userD[0].creation_date;
    let email=userD[0].email;
    let phoneNumber=userD[0].phoneNumber;
    let province=userD[0].province;
    let zip=userD[0].zip;
    
    if(userData.status==200){
      $('#userName').html("User Name: " + userName);
      $('#fName').html("Name: " + fName +" "+ lName);
      $('#phoneNumber').html("Phone Number: " + phoneNumber);
      $('#birthday').html("Birthday: " + birthday);
      $('#address').html("Address: " + address +", "+ city +", "+ province +", "+ country + "(" + zip + ")");
      $('#email').html("email: " + email);
      $('#cDate').html("creation date: " + creation_date);
      $('#password').html("Change your Password?");
    }

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

function addDelayedIteration(iteration, maxIterations, data1, data2, data3, data4, data5, itval) {
  if (iteration <= maxIterations){
      if(iteration==1){
        updateProfile(itval,data1);
      }
      if(iteration==2){
        updateProfile(itval,data2);
      }
      if(iteration==3){
        updateProfile(itval,data3);
      }
      if(iteration==4){
        updateProfile(itval,data4);
      }
      if(iteration==5){
        updateProfile(itval,data5);
      }
      itval++;
      iteration++;
    setTimeout(function(){
      addDelayedIteration(iteration, maxIterations,data1, data2, data3, data4, data5, itval);
    }, 1000); 
  }
}
function delayedIteration(iteration, maxIterations, data1, data2, itval) {
  if (iteration <= maxIterations){
      if(iteration==1){
        updateProfile(itval,data1);
      }
      if(iteration==2){
        updateProfile(itval,data2);
      }
      itval++;
      iteration++;
    setTimeout(function(){
      delayedIteration(iteration, maxIterations,data1, data2,itval);
    }, 1000); 
  }
}


function updateProfile(val,name){
  let value = [$("#newUserName").val(),$("#newfName").val(),$("#newlName").val(),$("#newPhoneNumber").val(),$("#newBirthday").val(),$("#newAddress").val(),$("#newCountry").val(),$("#newProvince").val(),$("#newCities").val(),$("#newZip").val(),$("#newEmail").val()]
    
  for(let i=0; i < value.length; i++){
      if(i==val){
        let dataValue=value[i];
      
        let updatedUserData = {
        key:name,
        value:dataValue
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
  }}
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
  

  function bioDelayedIteration(iteration, maxIterations, data1, data2, data3, data4, data5, data6, data7, data8, ival) {
    if (iteration <= maxIterations){
        if($("#elementary").val() != "" && iteration==1){
          sendBio(ival,data1);
        }
        if($("#highSchool").val() != "" && iteration==2){
         
          sendBio(ival,data2);
        }
        if($("#college").val() != "" && iteration==3){
         
          sendBio(ival,data3);
        }
        if($("#work").val() != "" && iteration==4){
         
          sendBio(ival,data4);
        }
        if($("#favorites").val() != "" && iteration==5){
          sendBio(ival,data5);
        }
        if($("#hobbies").val() != "" && iteration==6){
          sendBio(ival,data6);
        }
        if($("#sports").val() != "" && iteration==7){
          sendBio(ival,data7);
        }
        if($("#status").val() != "" && iteration==8){
          sendBio(ival,data8);
        }
        ival++;
        iteration++;
      setTimeout(function(){
        bioDelayedIteration(iteration, maxIterations,data1, data2, data3, data4, data5, data6, data7, data8, ival);
      }, 500); 
    }
  }

  
  function sendBio(arrVal,dbRowName){
    let value = [$("#elementary").val(),$("#highSchool").val(),$("#college").val(),$("#work").val(),$("#favorites").val(),$("#hobbies").val(),$("#sports").val(),$("#status").val(),];
    
    for(let i=0; i<=value.length; i++){
      if(arrVal==i){
      let newVal = {
        name:dbRowName,
        userBio:value[i]
      };
    
    
      $.ajax({
        url: SENDBIO_API,
        type: "POST",
        data: "bio="+JSON.stringify(newVal),
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
  
    }
  }
  