

$(document).ready(function() {
  let userId = $("#accountNumber").html();
  userPostedBlogData(userId);

  function userPostedBlogData(id) {
    $.ajax({
      type: "GET",
      url: BLOGDATA_API,
      data: { userId: id },
      dataType: "json",
      success: function(response) {
      let blogNum = response.data.length;
      $('.coverPhoto').attr('src', "data:image/jpeg;base64," + response.data[0].imageData);
        if (blogNum > 0) {
          let blogParentPost = $('.parentDiv');
          let picChild = "";
          
          for (let i = 0; i <= blogNum; i++) {
            let entry = response.data[i];

            let blogId = entry.blogId;
            let imageSrc = "data:image/jpeg;base64," + entry.imageData;
            let category = entry.category;
            let title = entry.title;
            let content = entry.content;
            let creation_date = entry.creation_date;
            let intro = entry.intro;
            let profilePic = "data:image/jpeg;base64," + entry.profilePic;
            
            
            picChild = picChild +     '<div class="blogContainer blogContainer' + i + '">' + 
                                        '<a href="../viewBlog/viewBlog.php?id=' + blogId + '">' + 
                                          '<div class="blogPicture blogPicture' + i + '">'+
                                            '<img id="'+ blogId +'" class="images" src="' + imageSrc + '">'+
                                          '</div>'+
                                        '</a>' + 
                                        '<div class="blogFooter blogFooter' + i + '">'+
                                          '<img src="'+ profilePic +'" class="creatorPic creatorPic' + i + '">'+
                                          '<div>'+
                                            '<div class="blogTitle blogTitle' + i + '">'+ title +'</div>'+
                                            '<div class="intro">'+ intro +'</div>'+
                                          '</div>'+
                                          '<div class="closeOpen closeOpen' + i + '">'+
                                            '<div class="dot1"></div>'+
                                            '<div class="dot2"></div>'+
                                            '<div class="dot3"></div>'+
                                            '<a href="../editBlog/editBlog.php?id=' + blogId + '">' +
                                              '<div class="editDelete editDelete' + i + '">'+
                                                '<div class="edit edit' + i + '">edit</div>'+
                                                '<button onclick="deleteBlog('+ blogId +')" type="button" class="delete delete' + i + '">delete</button>'+
                                              '</div>'+
                                            '</a>'
                                            '</div>'+
                                          '</div>'+
                                        '</div>'+
                                  
            blogParentPost.html(picChild);
        
           
          }

          let closeOpenArr = [];
          let editDeleteArr = [];
          for (let i = 0; i <= blogNum; i++) {
            closeOpenArr.push($(".closeOpen" + i + ""));
            editDeleteArr.push($(".editDelete" + i + ""));
          }
          for (let i = 0; i <= closeOpenArr.length; i++) {
            closeOpenArr[i].on('click',function() {
              editDeleteArr[i].slideToggle(400);
            });
          }
          
          
          
          // $("#profileImage").attr("src", imageSrc);
          // $("#categoryElement").text("Category: " + category);
          // $("#titleElement").text("Title: " + title);
          // $("#contentElement").text("Content: " + content);
        } else {
    
          $("#profileImage").attr("src", "path_to_default_image.jpg");
        }
      },
      error: function(xhr, status, error) {
    
        $("#profileImage").attr("src", "path_to_default_image.jpg");
      },
    });
  } 
}); 

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

