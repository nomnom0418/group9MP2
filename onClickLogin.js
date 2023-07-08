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
     $("#myAlert").html("<h1>"+ parseResponse.description+ "</h1>")
    },
    "error" : function(xhr,status,error){
      alert("error");
    }
  })
}