let userLogIn_API = "loginAPI.php";

function logIn(){
  let loginRequest ={
    "userName":$("#userName").val(),
    "password":$("#password").val()
  }
  $.ajax({
    "url":userLogIn_API,
    "type":"POST",
    "data":"userLog="+JSON.stringify(loginRequest),
    "success":function(response){
     let parseResponse=JSON.parse(response);
     $("#myAlert").html(parseResponse.description)
    
     let addCss=$("#myAlert");
     if(parseResponse.status==200){
      addCss.css("color","yellowgreen");
      addCss.addClass("myAlert");
      window.location.href="home/home1.php";
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
  })
}

function createAccount(){
  let getInformation ={
    "firstName":$("#firstName").val(),
    "lastName":$("#lastName").val(),
    "birthday":$("#birthday").val(),
    "address":$("#address").val(),
    "city":$("#city").val(),
    "provinceSelect":$("#provinceSelect").val(),
    "zip":$("#zip").val(),
    "countrySelect":$("#countrySelect").val(),
    "email":$("#email").val(),
    "newPassword":$("#newPassword").val(),
    "confirmPassword":$("#confirmPassword").val()
  }
  $.ajax({
    "url":userLogIn_API,
    "type":"POST",
    "data":"registrationData="+JSON.stringify(getInformation),
    "success":function(response){
      console.log(response);
     let parseResponse=JSON.parse(response);
     $("#registerFormAlert").html(parseResponse.description);
     let rAlert=$("#registerFormAlert");
    
     if(parseResponse.status==406){
      rAlert.css("color","red");
      rAlert.addClass("myAlert")
     }if(parseResponse.status==408){
      rAlert.css("color","orange");
      rAlert.addClass("myAlert")
     }
     else{
      rAlert.css("color","yellowgreen");
      rAlert.addClass("myAlert")
     }
    },
    "error" : function(xhr,status,error){
      alert("error");
    }
  })

}
