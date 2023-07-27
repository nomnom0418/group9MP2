
function viewUsers(id){
  let userId={
    'userId':id
  }
  $.ajax({
    "url":VIEWUSERS_API,
    "type":"GET",
    "data":"userId="+JSON.stringify(userId),
    "success":function(response){
      
      let parseResponse=JSON.parse(response);
      let data = parseResponse.data;
      
      let add = data[0].city;
      let bday = data[0].birthday;
      let col = data[0].college;
      let country = data[0].country;
      let cd = data[0].creation_date;
      let elem = data[0].elem;
      let email = data[0].email;
      let fName = data[0].fName;
      let fav = data[0].fav;
      let high = data[0].high;
      let hob = data[0].hob;
      let lName = data[0].lName;
      let userName = data[0].userName;
      let work = data[0].work;
      let profileImg = "data:image/jpeg;base64," + data[0].profilePic;
      
      for(let i=0; i<data.length; i++){
        let blogId = data[i].blogId;
        let title = data[i].title;
        let intro = data[i].intro;
        let userId = data[i].userId;
        let blogImgBody = "data:image/jpeg;base64," + data[i].upload;
      }
      $('.greet').html("<div class='greetText'>Hi! I'm </div>" + "<div class='name'><h4>"+fName+"</h4></div><div class='botText'>welcome to my page</div>");
      $('.picCon').attr('src',profileImg);
    },
    "error" : function(xhr,status,error){
      alert("error");
    }  
  })
}
$(window).ready(function(){
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('id');
  viewUsers(userId);
})