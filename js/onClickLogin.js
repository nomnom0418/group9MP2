function logIn(){
  let loginRequest ={
    "email":$("#email").val(),
    "password":$("#password").val()
  }
  $.ajax({
    "url":userLogIn_API,
    "type":"POST",
    "data":"userLog="+JSON.stringify(loginRequest),
    "success":function(response){
    console.log(response);
    let parseResponse=JSON.parse(response);
    $("#myAlert").html(parseResponse.description);
    
    let addCss = $("#myAlert");
     if(parseResponse.status==200){
      addCss.css("color","yellowgreen");
      addCss.addClass("myAlert");
      window.location.href="pages/home/home1.php";
     }else if(parseResponse.status==406){
      addCss.css("color","red");
      addCss.addClass("myAlert")
     }else{
      addCss.css("color","orange");
      addCss.addClass("myAlert")
     }
     },
     "error" : function(xhr,status,error){
       alert("error");
     }
  });
 }
 
function createAccount(){
  let getInformation ={
    "fName":$("#fName").val(),
    "lName":$("#lName").val(),
    "birthday":$("#birthday").val(),
    "address":$("#address").val(),
    "city":$("#city").val(),
    "province":$("#province").val(),
    "zip":$("#zip").val(),
    "country":$("#country").val(),
    "email":$("#Email").val(),
    "pass":$("#pass").val(),
    "confirmPassword":$("#confirmPassword").val()
  }
  
  $.ajax({
    "url":userRegistration_API,
    "type":"POST",
    "data":"registrationData="+JSON.stringify(getInformation),
    "success":function(responses){
    console.log(responses);
    let parseResponse=JSON.parse(responses);
    $("#registerFormAlert").html(parseResponse.description);

    let rAlert=$("#registerFormAlert");
     if(parseResponse.status==406){
      rAlert.css("color","orange");
      rAlert.addClass("myAlert")
     }
     else if(parseResponse.status==409){
      rAlert.css("color","orange");
      rAlert.addClass("myAlert")
     }
     else if(parseResponse.status==201){
      rAlert.css("color","yellowgreen");
      rAlert.addClass("myAlert")
     }
     else{
      rAlert.css("color","red");
      rAlert.addClass("myAlert")
     }
    },
    "error" : function(xhr,status,error){
      alert("error");
    }
  })
}
function getProfile(){
  $.ajax({
    "url":GETLOGIN_API,
    "type":"POST",
    "data": { getLoggedUser: true },
    "success":function(response){
    console.log(response);
    let parseResponse=JSON.parse(response);
    console.log(parseResponse);
    let userData=parseResponse;
    $("#accountNumber").text("Account No:  " + userData.data[0]);
    $("#userName").text(userData.data[2]);
    $("#emailInfo").text(userData.data[1]);
    // $('.account').html(parseResponse.description);
    
    },
    "error" : function(xhr,status,error){
      alert("error");
    }
  });
}
