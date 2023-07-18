function index(){
  $.ajax({
    "url":userLogIn_API,
    "type":"GET",
    "data":"Index",
    "success":function(response){
    console.log(response);
    let parseResponse=JSON.parse(response);
    },
    "error" : function(xhr,status,error){
      alert("error");
    }  
  })
}
function show(){
  let idRequest = {"id" : $("#id").val()};
  $.ajax({
    "url":userLogIn_API,
    "type":"Get",
    "data":"Show=" + JSON.stringify(idRequest),
    "success":function(response){
    console.log(response);
    let parseResponse=JSON.parse(response);
    },
    "error" : function(xhr,status,error){
      alert("error");
    }  
  })
}
function store(){
  let record = {"fName":$("#fName").val(),
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
    "url":userLogIn_API,
    "type":"POST",
    "data":"store=" + JSON.stringify(record),
    "success":function(response){
    console.log(response);
    let parseResponse=JSON.parse(response);
    },
    "error" : function(xhr,status,error){
      alert("error");
    }  
  })
}
  
function update(){
  let record = {"fName":$("#fName").val(),
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
  let id = $("#id").val();
  let updateRecordRrquest = {
    "id" : id,
    "record" : record
  }
  $.ajax({
    "url":userLogIn_API,
    "type":"POST",
    "data":"update=" + JSON.stringify(updateRecordRequest),
    "success":function(response){
    console.log(response);
    let parseResponse=JSON.parse(response);
    },
    "error" : function(xhr,status,error){
      alert("error");
    }  
  })
}

function destroy(){
  let idRequest = {"id" : $("#id").val()};
  $.ajax({
    "url":userLogIn_API,
    "type":"POST",
    "data":"destroy=" + JSON.stringify(idRequest),
    "success":function(response){
    console.log(response);
    let parseResponse=JSON.parse(response);
    },
    "error" : function(xhr,status,error){
      alert("error");
    }  
  })
}
  
