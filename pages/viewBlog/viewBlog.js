


function viewBlog(id){
  let blogId={
    'blogId':id
  }
  $.ajax({
    url: VIEWBLOG_API,
    type: "GET",
    data: "blogId="+JSON.stringify(blogId),
    success: function (response) {
  
    let parsedResponse = JSON.parse(response);
    let blogData=(parsedResponse.data);
    
    let blogImg = "data:image/jpeg;base64," + blogData[0].upload;
    let blogTitle = blogData[0].title;
    let blogContent = blogData[0].content;
    let bodyElement = "<img class='blgImg' src= '"+ blogImg +"'></img>"+
                      "<div class='blogTextContainer'>"+
                        "<div class='blogTitle'><h4>'"+ blogTitle +"'</h4></div>"+
                        "<div class='blogContent'>'"+ blogContent +"'</div>"+
                      "</div>";

    $('.blogBody').html(bodyElement)
    $('.blgImg').css('height',window.innerHeight);
    }
  })
}



  $(window).ready(function(){
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get('id');
  viewBlog(blogId);
})



