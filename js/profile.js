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
    $("#accountNumber").text("Account No:  " + userData.data[0]);
    $("#userName").text(userData.data[1]);
    $("#emailInfo").text(userData.data[12]);
    
    $("#UserName").text("Username: " + userData.data[1]);
    $("#fName").text("Name: " + userData.data[2] +" "+ userData.data[3]);
    $("#phoneNumber").text("Phone Number: " + userData.data[4]);
    $("#birthday").text("Birth Date: " + userData.data[5]); 
    
    $("#address").text("Address: " + userData.data[7])+", "+ (userData.data[10]) +", "+ (userData.data[9]) +", "+ (userData.data[8]) +", zip code :"+(userData.data[11]) ;
    
    $("#email").text("Email: " + userData.data[12]);
    $("#password").text("Password: " + userData.data[13]);
    $("#cDate").text("creation date: " + userData.data[14]);
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
  "pass":$("#newPass").val()
  };

$.ajax({
  url: "../../api/updateProfile.php",
  type: "POST",
  data: "updatedUserData=" +JSON.stringify(updatedUserData),
  success: function(response) {

    console.log(response); 
    var parsedResponse = JSON.parse(response);
    if (parsedResponse.status === 200) {
    
        console.log(parsedResponse.message);
     } else {
    
        console.error(parsedResponse.message);
     }
  },
  error: function(xhr, status, error) {
    alert("error");
  }
});
}