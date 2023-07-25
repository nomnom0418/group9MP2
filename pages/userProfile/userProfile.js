$(document).ready(function(){
    $.ajax({
    "url":USERBLOGS_API,
    "type":"GET",
    "data":"Index",
    "success":function(response){
    let parsedResponse=JSON.parse(response);
    let blogData = (parsedResponse.data);
        
    $('.coverPhoto').attr('src', "data:image/jpeg;base64," + blogData[0].upload);
    let picChild="";
    for(let i=0; i<blogData.length; i++){
      let blogId = blogData[i].blogId;
      let title = blogData[i].title;
      let intro = blogData[i].intro;
      let userId = blogData[i].userId;
      let imageSrc = "data:image/jpeg;base64," + blogData[i].upload;
    
      picChild +='<div class="blogContainer blogContainer' + i + '">' + 
                                  '<a href="../viewBlog/viewBlog.php?id=' + blogId + '">' + 
                                    '<div class="blogPicture blogPicture' + i + '">'+
                                      '<img id="'+ blogId +'" class="images" src="' + imageSrc + '">'+
                                    '</div>'+
                                  '</a>' + 
                                  '<div class="blogFooter blogFooter' + i + '">'+
                                    '<img src="" class="creatorPic creatorPic' + i + '">'+
                                    '<div>'+
                                      '<div class="blogTitle blogTitle' + i + '">'+ title +'</div>'+
                                      '<div class="intro">'+ intro +'</div>'+
                                    '</div>'+
                                    '<div class="closeOpen closeOpen' + i + '">'+
                                      '<div class="dot1"></div>'+
                                      '<div class="dot2"></div>'+
                                      '<div class="dot3"></div>'+
                                      '<div class="editDelete editDelete' + i + '">'+
                                        '<div class="edit edit' + i + '">edit</div>'+
                                        '<button onclick="deleteBlog('+ blogId +')" type="button" class="delete delete' + i + '">delete</button>'+
                                      '</div>'+
                                    '</div>'+
                                  '</div>'+
                                '</div>';

   
     }
     $('.parentDiv').html(picChild);

     let closeOpenArr = [];
     let editDeleteArr = [];
     for (let i = 0; i < blogData.length; i++) {
      closeOpenArr.push($(".closeOpen"+i));
      editDeleteArr.push($(".editDelete"+i));
    }
    for (let i = 0; i < closeOpenArr.length; i++) {
      closeOpenArr[i].click(function() {
        editDeleteArr[i].slideToggle(200);
      });
    }
    },
    "error" : function(xhr,status,error){
    
    }  
  })



  $.ajax({
    "url":NEWUSERPROFILE_API,
    "type":"GET",
    "data":"Index",
    "success":function(response){
  
    let parsedResponse=JSON.parse(response);
    let userData=(parsedResponse.data);

    let userId = userData[0].userId;
    let userName = userData[0].userName;
    let fName = userData[0].fName;
    let lName = userData[0].lName;
    let adddress = userData[0].city;
    let email = userData[0].email;
    let creation = userData[0].creation_date;
    let profilePic = "data:image/jpeg;base64," + userData[0].profilePic;

    $('.pImage').attr('src', profilePic);
    $('.textInfo').html(userName);
    $('.emailInfo').html(email);
    $('.account').html(userId)
    $('.creatorPic').attr('src', profilePic);
    },
    "error" : function(xhr,status,error){
      alert("error");
    }  
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

  $('.fileInputLabel').click(function(){
    $('.labelDiv').css('display','none');
    $('.labelOk').css('display','block');
  })
  $('.okLabel').click(function(){
    $('.labelOk').css('display','none');
    $('.labelDiv').css('display','block');
  })
})




function updateProfileImage(){
  let inputElement = $("#profileImageBnt")[0];
    if (inputElement.files.length>0){
      let file = inputElement.files[0];
      let formData = new FormData();
      formData.append("profileImage", file);
      formData.append("userId", 1);
      console.log(formData)
  $.ajax({
    url: UPDATEPROFILEIMAGE_API,
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function(response) {
      parseResponse=JSON.parse(response);

      if (parseResponse.status == 200){
        alertElement(parseResponse.description)
        $(".deleteAlert").css("color","green");
      }
      if (parseResponse.status == 401){
        alertElement(parseResponse.description)
        $(".deleteAlert").css("color","red");
      }
      if (parseResponse.status == 406){
        alertElement(parseResponse.description)
        $(".deleteAlert").css("color","red");
      }
      if (parseResponse.status == 400){
        alertElement(parseResponse.description)
        $(".deleteAlert").css("color","red");
      }
    },
    error: function(xhr, status, error){
      alert("error");
    } 
  });
  }else{
    console.warn("no image selected");
  }
}





function deleteBlog(blogId){
  let confirmResult = confirm("are you sure you want to delete this blog?");
  if (confirmResult){
    let deleteBlogId = {
      "blogId":blogId
    }
    $.ajax({
      url: DELETEBLOG_API,
      type: "GET",
      data: "deleteBlog="+JSON.stringify(deleteBlogId),
      success: function(response) {
    
        console.log(response);
        let parseResponse=JSON.parse(response);
        if (parseResponse.status == 200){
          alertElement(parseResponse.description)
          $(".deleteAlert").css("color","red");
        }
        else{
          alertElement(parseResponse.description)
          element.css("color","red");
        }
        },
        "error" : function(xhr,status,error){
          alert("error");
        }  
      })
  }else{
    console.log("its not deleted");

  }
}

function alertElement(message) {
  var element = $(".deleteAlert");
    element.css("display","block");  
   
    element.html(message);
  setTimeout(function () {
    element.fadeOut();
  }, 3000);
}

