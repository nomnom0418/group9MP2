function update(){
  let record = {"fName":$("#fName").val(),
                "lName":$("#lName").val(),
                "phoneNumber":$("#phoneNumber").val(),
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
  let id = $("#id").val;
  let updateRecord = {
    "id" : id,
    "record" : record
  }
  $.ajax({
    "url":USERUPDATE_API,
    "type":"POST",
    "data":"updateUser=" + JSON.stringify(record),
    "success":function(response){
    console.log(response);
    let parseResponse=JSON.parse(response);
    },
    "error" : function(xhr,status,error){
      alert("error");
    }  
  })
}
