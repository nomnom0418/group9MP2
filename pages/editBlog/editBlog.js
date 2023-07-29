$(window).ready(function(){
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get('id');
  $('#blogId').html(blogId);
  viewEditBlog(blogId);
})

function viewEditBlog(id){
  let blogId={
    'blogId':id
  }
  
  $.ajax({
    "url":VIEWEDITBLOG_API,
    "type":"GET",
    "data":"blogId="+JSON.stringify(blogId),
    "success":function(response){
      let editBlog = JSON.parse(response);
      console.log(editBlog)
       $('#editCategory').val(editBlog.data[0].category);
      $('#editTitle').val(editBlog.data[0].title);
      $('#editIntro').text(editBlog.data[0].intro);
      $('#editContent').html(editBlog.data[0].content);
      
    }
  })
}




function updateIteration(iteration, maxIterations, data1, data2, data3, data4, data5, ival) {
  if (iteration <= maxIterations){

    if($("#editCategory").val() != "" && iteration==1){
        updateBlog(ival,data1);
      }
      if($("#editTitle").val() != "" && iteration==2){
       
        updateBlog(ival,data2);
      }
      if($("#editIntro").val() != "" && iteration==3){
       
        updateBlog(ival,data3);
      }
      if($("#editContent").val() != "" && iteration==4){
       
        updateBlog(ival,data4);
      }
      if($("#editImage").val() != "" && iteration==5){
        updateBlog(ival,data5);
      }

      ival++;
      iteration++;
    setTimeout(function(){
      updateIteration(iteration, maxIterations,data1, data2, data3, data4, data5, ival);
    }, 2000); 
  }
}



function updateBlog(arrVal,dbRowName){
  let blogId=$('#blogId').html()
  let updates = [$("#editCategory").val(),$("#editTitle").val(),$("#editIntro").val(),$("#editContent").val(),$("#editImg").val()];
 
  for(let i=0; i<=updates.length; i++){
    if(arrVal==i){
   
      let newVal = {
      name:dbRowName,
      update:updates[i],
      blogId:blogId
    };
  
      $.ajax({
        url: VIEWEDITBLOG_API, 
        type: "POST", 
        data: "update="+JSON.stringify(newVal),
        success: function (response){
          console.log(response);
          
          // let parsedResponse=JSON.parse(response);
          // if (parsedResponse.status === 200) {
          //   alert(parsedResponse.description);
          //   $('#category').val("");
          //   $('#title').val("");
          //   $('#intro').val("");
          //   $('#content').val("");

          // } else {
          //   alert(parsedResponse.description)
          // }
        },
        error: function (xhr, status, error) {
        
        },
      });
    }
  }
}
  
  $(document).ready(function(){
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
  
  })
  