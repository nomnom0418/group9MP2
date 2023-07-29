
$(document).ready(function() {
  $('#myNavBar').load('head.html');
  let blogParentPost=$('.blogsParent');
  let picChild="";    
  let postedBlog=0;
  let working =false;

    $.ajax({
      "url":HOME_API,
      "type":"GET",
      "data":"Index="+postedBlog,
      "success":function(response){
      let parsedResponse=JSON.parse(response);
      let blogData=(parsedResponse.data);
    
      for(let i=0; i<blogData.length; i++){
        let blogId = blogData[i].blogId;
        let title = blogData[i].title;
        let intro = blogData[i].intro;
        let userId = blogData[i].userId;
        let blogImgBody = "data:image/jpeg;base64," + blogData[i].upload;
        let profileImgBody = "data:image/jpeg;base64," + blogData[i].profilePic;

        picChild = picChild+ '<div class="blogContainer blogContainer'+i+'">'+
                                  '<a href="../viewBlog/viewBlog.php?id=' + blogId + '">' + 
                                '<img src="'+ blogImgBody +'" class="blogPicture blogPicture'+i+'">'+
                                  '</a>' +   
                                '<div class="blogFooter blogFooter'+i+'">'+
                                  '<a href="../viewUser/viewUsers.php?id=' + userId + '">' + 
                                    '<img src="'+ profileImgBody +'" class="creatorPic creatorPic'+i+'">'+
                                  '</a>'+
                                   '<div class="blogInfo blogInfo'+i+'">'+
                                      '<div class="title"><h4>'+ title +'</h4></div>'+
                                      '<div class="intro">'+ intro +'</div>'+
                                   '</div>'+
                                '</div>'+
                              '</div>';
        
      }
        
        blogParentPost.html(picChild);
        postedBlog += 4;
       
      adjustContainerHeights(postedBlog)   
      
    },
      "error" : function(xhr,status,error){
        alert("error");
      }  
    })


    function adjustContainerHeights(postedBlog) {
      let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
      if (screenWidth >= 1214) {
        let blogsContainerHeight = (postedBlog / 2) * 550;
        $('.blogsContainer').css({
          'height': blogsContainerHeight + "px"
        });
  
        let parentBlogsHeight = blogsContainerHeight - 4;
        $('.blogsParent').css({
          'height': parentBlogsHeight + "px"
        });
  
        let bodyHeight = blogsContainerHeight + 550;
        $('.mainContainer').css({
          'height': bodyHeight + "px"
        });
      } else if (screenWidth <= 1213) {
        let blogsContainerHeight = postedBlog * 550;
        $('.blogsContainer').css({
          'height': blogsContainerHeight + "px"
        });
  
        let parentBlogsHeight = blogsContainerHeight - 4;
        $('.blogsParent').css({
          'height': parentBlogsHeight + "px"
        });
  
        let bodyHeight = blogsContainerHeight + 550;
        $('.mainContainer').css({
          'height': bodyHeight + "px"
        });
      }
    }



  function fetchAppend(){
    if(working==false && reachedBootom){
        working =true;
        $.ajax({
          "url":HOME_API,
          "type":"GET",
          "processData":false,
          "contentType":"application/json",
          "data":"Index="+postedBlog,
          "success":function(response){
            let parsedResponse=JSON.parse(response);
            let blogData=(parsedResponse.data);
            
      
          
            for(let i=0; i<blogData.length; i++){
              let blogId = blogData[i].blogId;
              let title = blogData[i].title;
              let intro = blogData[i].intro;
              let userId = blogData[i].userId;
              let blogImgBody = "data:image/jpeg;base64," + blogData[i].upload;
              let profileImgBody = "data:image/jpeg;base64," + blogData[i].profilePic;
      
              picChild += '<div class="blogContainer blogContainer'+i+'">'+
                            '<a href="../viewBlog/viewBlog.php?id=' + blogId + '">' + 
                              '<img src="'+ blogImgBody +'" class="blogPicture blogPicture'+i+'">'+
                            '</a>'+
                            '<div class="blogFooter blogFooter'+i+'">'+
                              '<a href="../viewUser/viewUsers.php?id=' + userId + '">' + 
                                '<img src="'+ profileImgBody +'" class="creatorPic creatorPic'+i+'">'+
                              '</a>'+
                              '<div class="blogInfo blogInfo'+i+'">'+
                                '<div class="title"><h4>'+ title +'</h4></div>'+
                                '<div class="intro">'+ intro +'</div>'+
                              '</div>'+
                            '</div>'+
                          '</div>';
              
            }
            blogParentPost.html()+blogParentPost.html(picChild);
            postedBlog += 4;
            
            adjustContainerHeights(postedBlog);
            

            setTimeout(function(){
              working=false;
   
            },100)
            
          }
          
        })
      }
    }

    let reachedBootom = false;
  $(window).scroll(function(){
    if($(this).scrollTop()+1 >= $('.blogsParent').height() - $(window).height()){
      reachedBootom = true;
      fetchAppend();
      // setTimeout(function(){
      //   reachedBootom =false;
      // },100)
    }   
    else{
      reachedBootom = false;
    }
  })

});


function categories(categories){
  $(window).off('scroll');
    let cat= categories
    let blogParentPost=$('.blogsParent'); 
     let picChild="";
  $.ajax({
    "url":HOME_API,
    "type":"GET",
    "data":"categories="+cat,
    "success":function(response){
      let parsedResponse=JSON.parse(response);
      let blogData=(parsedResponse.data);
     
      let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (screenWidth >= 1214) {
        let blogsContainerHeight = (blogData.length / 2) * 550;
        $('.blogsContainer').css({
          'height': blogsContainerHeight + "px"
        });
  
        let parentBlogsHeight = blogsContainerHeight - 4;
        $('.blogsParent').css({
          'height': parentBlogsHeight + "px"
        });
  
        let bodyHeight = blogsContainerHeight + 550;
        $('.mainContainer').css({
          'height': bodyHeight + "px"
        });
      } else if (screenWidth <= 1213) {
        let blogsContainerHeight = blogData.length * 550;
        $('.blogsContainer').css({
          'height': blogsContainerHeight + "px"
        });
  
        let parentBlogsHeight = blogsContainerHeight - 4;
        $('.blogsParent').css({
          'height': parentBlogsHeight + "px"
        });
  
        let bodyHeight = blogsContainerHeight + 550;
        $('.mainContainer').css({
          'height': bodyHeight + "px"
        });
      }


      for(let i=0; i<blogData.length; i++){
        let blogId = blogData[i].blogId;
        let title = blogData[i].title;
        let intro = blogData[i].intro;
        let userId = blogData[i].userId;
        let blogImgBody = "data:image/jpeg;base64," + blogData[i].upload;
        let profileImgBody = "data:image/jpeg;base64," + blogData[i].profilePic;

        picChild = picChild+ '<div class="blogContainer blogContainer'+i+'">'+
                                '<a href="../viewBlog/viewBlog.php?id=' + blogId + '">' + 
                              '<img src="'+ blogImgBody +'" class="blogPicture blogPicture'+i+'">'+
                                '</a>' +   
                              '<div class="blogFooter blogFooter'+i+'">'+
                                '<a href="../viewUser/viewUsers.php?id=' + userId + '">' + 
                                  '<img src="'+ profileImgBody +'" class="creatorPic creatorPic'+i+'">'+
                                '</a>'+
                                 '<div class="blogInfo blogInfo'+i+'">'+
                                    '<div class="title"><h4>'+ title +'</h4></div>'+
                                    '<div class="intro">'+ intro +'</div>'+
                                 '</div>'+
                              '</div>'+
                            '</div>';
      
    }

      blogParentPost.html(picChild);
      // postedBlog += 4;
     
    // adjustContainerHeights(postedBlog)   
    
  },
    "error" : function(xhr,status,error){
      alert("error");
    }  
  })

}
function refresh(){
  location.reload();
}