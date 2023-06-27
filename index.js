window.addEventListener('DOMContentLoaded', function() {
  let myImage1 = document.getElementById('myImg1');
  let myImage2 = document.getElementById('myImg2');
  let myImage3 = document.getElementById('myImg3');
  function updateImageSrc() {
    if (window.matchMedia('(520px <= width <= 820px)').matches) {
      myImage1.src = 'blogImages/natureImage2.png'; // Change image for smaller screens
      myImage2.src = 'blogImages/foodImage2.png';
      myImage3.src = 'blogImages/techImage2.png';
    } 
    else{
      myImage1.src = 'blogImages/natureImage1.png';
      myImage2.src = 'blogImages/foodImage1.jpg';
      myImage3.src = 'blogImages/techImage1.png';
    }
  }

  // Call the function initially
  updateImageSrc();

  // Call the function whenever the window is resized
  window.addEventListener('resize', updateImageSrc);
});

//login form
const formButton = document.getElementById('formButton');
const myForm = document.getElementById('myForm');

// Add click event listener to the button
formButton.addEventListener('click', function() {
  if (myForm.style.display === 'none') {
    myForm.style.display = 'block';
  } else {
    myForm.style.display = 'none';
  }
});

//form funtionality
let myWarning = document.getElementById("head");
let children = myWarning.getElementsByClassName('myChildren');
let myPrompt;
function logIn(){
  let defaultUserName = "admin";
  let defaultPassword = "password";
  let myUserName = document.getElementById("userName").value;
  let myPassword = document.getElementById("password").value;


  if (myUserName == defaultUserName && myPassword == defaultPassword){
    remove();
    myPrompt = document.createElement("div");
    myPrompt.classList = "myChildren success";
    myPrompt.textContent = "Succesfully Login";
    myWarning.appendChild(myPrompt);
  }
  else if (myUserName == "" && myPassword == ""){
    remove();
    myPrompt = document.createElement("div");
    myPrompt.classList = "myChildren warning";
    myPrompt.textContent = "please input username and password";
    myWarning.appendChild(myPrompt);
  }
  else{
    remove();
    myPrompt = document.createElement("div");
    myPrompt.classList = "myChildren danger";
    myPrompt.textContent = "invalid username or password";
    myWarning.appendChild(myPrompt);
  }
  
}
function remove(){
  while (children.length > 0) {
    children[0].parentNode.removeChild(children[0]);
  }  
}
//register form
const regiterButton = document.getElementById('registerButton');
const registerForm = document.getElementById('registerForm');

// Add click event listener to the button
registerButton.addEventListener('click', function() {
  if (registerForm.style.display === 'none') {
    registerForm.style.display = 'block';
  } else {
    registerForm.style.display = 'none';
  }
});
