
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
      console.log(data)
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
      let pNum = data[0].phoneNumber;
      let profileImg = "data:image/jpeg;base64," + data[0].profilePic;
      
      for(let i=0; i<data.length; i++){
        let blogId = data[i].blogId;
        let title = data[i].title;
        let intro = data[i].intro;
        let userId = data[i].userId;
        let content = data[i].content;
        let blogImgBody = "data:image/jpeg;base64," + data[i].upload;
      
        $('.leftCon').append('<div class="blogContainer blogContainer'+i+'">'+
                            '<div class="title"><h4>'+ title +'</h4></div>'+
                            '<div class="intro">'+ intro +'</div>'+
                            '<img src="'+ blogImgBody +'" class="blogPicture blogPicture'+i+'">'+
                            '<div class="blogFooter blogFooter'+i+'">'+
                               '<div class="blogInfo blogInfo'+i+'">'+content+'</div>'+
                            '</div>'+
                          '</div>')
        
        
      }
      $('.greet').html("<div class='greetText'>Hi! I'm </div>" + "<div class='name'><h4>"+fName+"</h4></div><div class='botText'>welcome to my page</div>");
      $('.picCon').attr('src',profileImg);
    
      $('.bio').html("<div class='stick'><div class='love'><b>I LOVE</b></div><div class='cen'>"+hob+""+', '+""+""+fav+"</div>"+
                      "<div class='work'><b>working at:</b></div><div class='cen'>"+ work +"</div>"+
                      "<div class='study'><b>studied at:</b></div><div class='cen'>college: "+ col +"</div>"+
                      "<div class='cen'>high: "+ high +"</div><div class='cen'>elem: "+ elem +"</div><div class='bday'><b>my birthday</b></div>"+
                      "<div class='cen'>"+ bday +"</div><div class='live'><b>where do I live?</b></div><div class='cen'>"+add+""+', '+""+""+country+"</div>"+
                      "<div class='link'><b>contact me</b></div><div class='pNum'><i class='fa-solid fa-phone phone'></i>"+ pNum +"</div><div class='cen'><i class='fa-regular fa-envelope mlink'></i>"+ email +"</div><div><i class='fa-brands fa-facebook flink'></i></div><div class='since'>member since :"+cd+"</div></div>")
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