// createChild(6);
//this is for creating children in the body
// function createChild(createdPost){
//   let blogParentPost=$('.parentDiv');
//   let picChild="";
//   for(let i=1; i<=createdPost; i++){
//   picChild = picChild+ '<div class="blogContainer blogContainer'+i+'"><div class="blogPicture blogPicture'+i+'"></div><div class="blogFooter blogFooter'+i+'"><div class="creatorPic creatorPic'+i+'"></div><div class="blogInfo blogInfo'+i+'"></div> <div class="closeOpen closeOpen'+i+'"><div class="dot1"></div><div class="dot2"></div><div class="dot3"></div></div> </div><div class="editDelete editDelete'+i+'"><div class="edit edit'+i+'">edit</div><div class="delete delete'+i+'">delete</div></div></div>';
//   blogParentPost.html(picChild);
//   }
//   let closeOpenArr = [];
//   let editDeleteArr= [];
//   for(let i=1; i<=createdPost; i++){
//     closeOpenArr.push($(".closeOpen"+i+""));
//     editDeleteArr.push($(".editDelete"+i+""));
//   }
//   for(let i=0; i<closeOpenArr.length; i++){
//     closeOpenArr[i].click(function(){
//       editDeleteArr[i].slideToggle(400);
//     })
// }

 
// }

$(document).ready(function() {
  let userId = $("#accountNumber").html();
  userPostedBlogData(userId);

  function userPostedBlogData(id) {
    $.ajax({
      type: "GET",
      url: "../../api/userPostedBlogImage.php",
      data: { userId: id },
      dataType: "json",
      success: function(response) {
      console.log(response);
      let blogNum = response.length;

        if (blogNum > 0) {
          let blogParentPost = $('.parentDiv');
          let picChild = "";

          for (let i = 0; i < blogNum; i++) {
            let entry = response[i];

            let blogId = entry.blogId;
            let imageSrc = "data:image/jpeg;base64," + entry.imageData;
            let category = entry.category;
            let title = entry.title;
            let content = entry.content;
            let creation_date = entry.creation_date;
            let intro = entry.intro;
            let profilePic = "data:image/jpeg;base64," + entry.profilePic;

            picChild = picChild + '<div class="blogContainer blogContainer' + i + '"><div class="blogPicture blogPicture' + i + '"><img class="images" src="' + imageSrc + '"></div><div class="blogFooter blogFooter' + i + '"><img src="'+ profilePic +'" class="creatorPic creatorPic' + i + '"><div><div class="blogTitle blogTitle' + i + '">'+ title +'</div><div class="intro">'+ intro +'</div></div> <div class="closeOpen closeOpen' + i + '"><div class="dot1"></div><div class="dot2"></div><div class="dot3"></div><div class="editDelete editDelete' + i + '"><div class="edit edit' + i + '">edit</div><div class="delete delete' + i + '">delete</div></div></div> </div></div>';
            blogParentPost.html(picChild);
          }

          let closeOpenArr = [];
          let editDeleteArr = [];
          for (let i = 0; i <= blogNum; i++) {
            closeOpenArr.push($(".closeOpen" + i + ""));
            editDeleteArr.push($(".editDelete" + i + ""));
          }
          for (let i = 0; i <= closeOpenArr.length; i++) {
            closeOpenArr[i].click(function() {
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