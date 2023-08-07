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
      if($("#editImg")[0] != null && iteration==5){
        updateBlog(ival,data5);
      }

      ival++;
      iteration++;
    setTimeout(function(){
      updateIteration(iteration, maxIterations,data1, data2, data3, data4, data5, ival);
    }, 2000); 
  }
}



function updateBlog(arrVal, dbRowName) {
  let blogId = $('#blogId').html();
  let updates = [$("#editCategory").val(), $("#editTitle").val(), $("#editIntro").val(), $("#editContent").val(), $("#editImg")[0].files[0]];

  // Loop through updates array based on the value of arrVal
  if (arrVal < 4) {
    let newVal = {
      name: dbRowName,
      update: updates[arrVal],
      blogId: blogId
    };

    $.ajax({
      url: VIEWEDITBLOG_API,
      type: "POST",
      data: "update=" + JSON.stringify(newVal),
      success: function(response) {
        console.log(response);
      },
      error: function(xhr, status, error) {
        console.error(error);
      },
    });
  } else if (arrVal == 4) {
    let file = updates[4];
    if (file) {
      let formData = new FormData();
      formData.append("editImg", file);
      formData.append("rowName", dbRowName);
      formData.append("blogId", blogId);

      $.ajax({
        url: "../../api/forEditImg.php",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function(response) {
          console.log(response);
        },
        error: function(xhr, status, error) {
          console.error(error);
        },
      });
    } else {
      console.error("No image file selected.");
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
  