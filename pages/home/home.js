$(document).ready(function() {
  $('#myNavBar').load('head.html');


    $.ajax({
      "url":HOME_API,
      "type":"GET",
      "data":"Index",
      "success":function(response){
      let parsedResponse=JSON.parse(response);
      let blogData=(parsedResponse.data);
      
      let blogParentPost=$('.blogsParent');
      let picChild="";
    
      for(let i=0; i<blogData.length; i++){
        let blogId = blogData[i].blogId;
        let title = blogData[i].title;
        let intro = blogData[i].intro;
        let userId = blogData[i].userId;
        let blogImgBody = "data:image/jpeg;base64," + blogData[i].upload;
        let profileImgBody = "data:image/jpeg;base64," + blogData[i].profilePic;

        picChild = picChild+ '<div class="blogContainer blogContainer'+i+'">'+
                                '<img src="'+ blogImgBody +'" class="blogPicture blogPicture'+i+'">'+
                                '<div class="blogFooter blogFooter'+i+'">'+
                                   '<img src="'+ profileImgBody +'" class="creatorPic creatorPic'+i+'">'+
                                   '<div class="blogInfo blogInfo'+i+'">'+
                                      '<div class="title">'+ title +'</div>'+
                                      '<div class="intro">'+ intro +'</div>'+
                                   '</div>'+
                                '</div>'+
                              '</div>';
        
        }
        
        blogParentPost.html(picChild);

        let blogsContainerHeight=0;
        let parentBlogsHeight =0;
        let bodyHeight =0;
        let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        
        if (screenWidth >= 1214){
          blogsContainerHeight = ((blogData.length/2)*450);
         $('.blogsContainer').css({
           'height': blogsContainerHeight +"px"
         });
         parentBlogsHeight = blogsContainerHeight-4;
         $('.blogsParent').css({
           'height': parentBlogsHeight +"px"
         });
         bodyHeight = blogsContainerHeight +400;
         $('.mainContainer').css({
           'height': bodyHeight +"px"
         });
        }
        else if (screenWidth <= 1213){
          blogsContainerHeight = ((blogData.length)*450);
         $('.blogsContainer').css({
           'height': blogsContainerHeight +"px"
         });
         parentBlogsHeight = blogsContainerHeight-4;
         $('.blogsParent').css({
           'height': parentBlogsHeight +"px"
         });
         bodyHeight = blogsContainerHeight +400;
         $('.mainContainer').css({
           'height': bodyHeight +"px"
         });
        }
      },
      "error" : function(xhr,status,error){
        alert("error");
      }  
    })

});