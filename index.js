formButton.addEventListener('click', function() {
  if (myForm.style.display === 'none') {
    myForm.style.display = 'block';
  } else {
    myForm.style.display = 'none';
  }
});
let closeLogin = document.getElementById("closeLogin");
closeLogin.addEventListener("click", function(){
  myForm.style.display = "none";
})

const registerButton = document.getElementById('registerButton');
const registerForm = document.getElementById('registerForm');
const closeForm = document.getElementById('closeForm');
// Add click event listener to the button
registerButton.addEventListener('click', function() {
  if (registerForm.style.display === 'none') {
    registerForm.style.display = 'block';
  } else {
    registerForm.style.display = 'none';
  }
});
closeForm.addEventListener('click', function() {
  registerForm.style.display = 'none';
})

//select box of country

const selectCountry = document.getElementById('countrySelect');
let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://restcountries.com/v3.1/all')
xhr.onload=function(){
  //if (xhr.status==200){
    let countries = JSON.parse(this.response)
      countries.forEach(country => {
      const option = document.createElement('option');
      option.value = country.name.common;
      option.text = country.name.common;
      selectCountry.appendChild(option);   
    });
  
 //}
}
xhr.send()
//countries.forEach(country => {
  //const option = document.createElement('option');
  //option.value = country.code;  
  //option.text = country.name;   
  //selectCountry.appendChild(option);   
//});
//select box of ph province
const phProvinces = [
  'Abra',
  'Agusan del Norte',
  'Agusan del Sur',
  'Aklan',
  'Albay',
  'Antique',
  'Apayao',
  'Aurora',
  'Basilan',
  'Bataan',
  'Batanes',
  'Batangas',
  'Benguet',
  'Biliran',
  'Bohol',
  'Bukidnon',
  'Bulacan',
  'Cagayan',
  'Camarines Norte',
  'Camarines Sur',
  'Camiguin',
  'Capiz',
  'Catanduanes',
  'Cavite',
  'Cebu',
  'Compostela Valley',
  'Cotabato',
  'Davao del Norte',
  'Davao del Sur',
  'Davao Occidental',
  'Davao Oriental',
  'Dinagat Islands',
  'Eastern Samar',
  'Guimaras',
  'Ifugao',
  'Ilocos Norte',
  'Ilocos Sur',
  'Iloilo',
  'Isabela',
  'Kalinga',
  'La Union',
  'Laguna',
  'Lanao del Norte',
  'Lanao del Sur',
  'Leyte',
  'Maguindanao',
  'Marinduque',
  'Masbate',
  'Misamis Occidental',
  'Misamis Oriental',
  'Mountain Province',
  'Negros Occidental',
  'Negros Oriental',
  'Northern Samar',
  'Nueva Ecija',
  'Nueva Vizcaya',
  'Occidental Mindoro',
  'Oriental Mindoro',
  'Palawan',
  'Pampanga',
  'Pangasinan',
  'Quezon',
  'Quirino',
  'Rizal',
  'Romblon',
  'Samar',
  'Sarangani',
  'Siquijor',
  'Sorsogon',
  'South Cotabato',
  'Southern Leyte',
  'Sultan Kudarat',
  'Sulu',
  'Surigao del Norte',
  'Surigao del Sur',
  'Tarlac',
  'Tawi-Tawi',
  'Zambales',
  'Zamboanga del Norte',
  'Zamboanga del Sur',
  'Zamboanga Sibugay'
];
const provinceSelect = document.getElementById('provinceSelect');

function updateProvinceOptions() {

  const selectedCountry = selectCountry.value;
  provinceSelect.innerHTML = "<option value=''>Select Province</option>";

 if(selectedCountry=="Philippines"){
   for(let i=0; i < phProvinces.length; i++){
     const option = document.createElement('option');
     option.value = phProvinces[i];
     option.text = phProvinces[i];
     provinceSelect.appendChild(option);
    }
  }
}
selectCountry.addEventListener("change", updateProvinceOptions);
