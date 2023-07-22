
$(document).ready(function(){

    let blogId= {
      "blogId":16
    };
  $.ajax({
    url: VIEWBLOG_API,
    type: "GET",
    data: "blogId="+JSON.stringify(blogId),
    success: function (response) {
    var parsedResponse = JSON.parse(response);
    let blogData=(parsedResponse.data);
    console.log(blogData);
    let blogImg = "data:image/jpeg;base64," + blogData[0].upload;
    
     let bodyElement = "<div class='thisBody'></div><img src= '"+ blogImg +"'>";

    $('.blogBody').html(bodyElement)
    
      
    }
  })
})