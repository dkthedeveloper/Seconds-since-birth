
let currentMonth = new Date().getMonth() + 1;
let currentDay = new Date().getUTCDate();
let currentYear = new Date().getFullYear();
let weekday = new Date() .toLocaleDateString("default", { weekday: "long"});
let secondsPerYear = 31104000;
let secondsPerMonth = 2592000;
let now = new Date()
let finalResult = 0
//let form = document.getElementById('form');





document.getElementById('submit').onclick=function(event){
  event.preventDefault();
  let birthMonth = document.getElementById('month').value;
  let birthYear = document.getElementById('year').value;
  
  
  
  const secondsSinceBirth = function () {
    
    let year1 = secondsPerMonth * (12 - birthMonth);
    //console.log(year1)
    let age = currentYear - birthYear;
    let midYears = secondsPerYear * (age - 1);
    //console.log(midYears)
    let endYear = secondsPerMonth * currentMonth;
    // console.log(endYear)
    return year1 + midYears + endYear
    
  }
  
  let userResult = secondsSinceBirth()
  window.setInterval(function () {
    userResult = userResult + 1;}, 1000);
  
  
  
  let userName = document.getElementById('name').value;
  
  
  
  if (birthYear < 1922) {
    alert("Please select a Birth Year")
    
  }
  if (userName === '') {
    
    
      document.getElementById('result').innerHTML = `Hello <strong>friend!</strong>
      Hope you're having a great ${weekday}!
      <br>Can you believe you've been alive for 
      <span id="seconds-alive"><strong>${userResult}</strong></span> seconds??`
      //form.reset();
      form.name.focus();
      
    }
    
    else  {
      
  
  document.getElementById('result').innerHTML = `Hello <strong>${userName}!</strong>
  Hope you're having a great ${weekday}!
  <br>Can you believe you've been alive for 
  <span id="seconds-alive"><strong>${userResult}</strong></span> seconds??`
  //form.reset();
  form.name.focus();

  }

  setInterval
  
  
  
  }











/*
form = document.getElementById('form')
userName1 = "Jimmy"

function announceMorning() {
  let trimmedName = userName1.trim()
  let capitalizedFirstLetter = trimmedName[0] .toLocaleUpperCase();
  let lowerCasedRemainder = trimmedName.slice(1) .toLocaleLowerCase();
  let titleCasedNamme = capitalizedFirstLetter + lowerCasedRemainder;
  
  
  
  
  return `Good morning ${titleCasedNamme}!`
}

function handleSubmit (event) {
  event.preventDefault();
  
  
  let greeting = `${announceMorning()} 
  Can you believe you've been alive for 
  ${userResult} seconds??`;
  
  let form1 = event.target
  let list = document.getElementById('result');
  list.innerHTML = `<li><strong>${greeting} </strong></li>`;
  
  form1.reset();
  form1.nameInput.focus();
}

userSubmit = handleSubmit()



 weekday = new Date() .toLocaleDateString("default", { weekday: "long"})
 birthMonth = form.monthInput.value
 birthYear = form.dateOfBirthInput.value;


userResult = secondsSinceBirth()

submitButton = document.getElementById('submitbutton');
submitButton.addEventListener('click', userSubmit);


*/
    
   /* let greeting = announceMorning()
    + " "
    + "Can you believe you've been alive for "
    + userResult
    + " seconds??";
    */
    
        
        
  
    
       
    
    
    

    /* function calcDate() {
        console.log(currentMonth + "/" + currentDay + "/" + currentYear) 
    */
        
        
    // calcDate()
    
    
    
    
   // let userResult = secondsSinceBirth(userBirthMonth, userBirthYear);
    
    
    
    
    
    
    
    
    
 // let form = document.querySelector('form');

    

    
   /* let createAnnouncementHeadder = function (name) {
        return `<h1>${greeting}</h1>`
        
    }
    
    let h1 = createAnnouncementHeadder(userName1);*/
    
    
    
    