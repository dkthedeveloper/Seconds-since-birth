
let currentMonth = new Date().getMonth() + 1;
let currentDay = new Date().getUTCDate();
let currentYear = new Date().getFullYear();
let weekday = new Date() .toLocaleDateString("default", { weekday: "long"});
let secondsPerYear = 31104000;
let secondsPerMonth = 2592000;
let now = new Date();
let finalResult = 0;
let resultElement = document.getElementById('result');





document.getElementById('submit').onclick=function(event){
  event.preventDefault();
  let birthMonth = document.getElementById('month').value;
  let birthYear = document.getElementById('year').value;
  
  
  
  const secondsSinceBirth = function () {
    
    let year1 = secondsPerMonth * (12 - birthMonth);
    let age = currentYear - birthYear;
    let midYears = secondsPerYear * (age - 1);
    let endYear = secondsPerMonth * currentMonth;
    return year1 + midYears + endYear
    
  }
  
  let userResult = secondsSinceBirth()
  
  setInterval(() => {
    userResult += 1;
    resultElement.innerHTML = `Hello <strong>${userName}!</strong>
    Hope you're having a great ${weekday}!
    <br>Can you believe you've been alive for 
    <span id="seconds-alive"><strong>${userResult}</strong></span> seconds??`}, 1000);
  
  
  
  let userName = document.getElementById('name').value;
  
  
  
  if (birthYear < 1922 || birthYear === "") {
    alert("Please select a Birth Year");
    
    
  }
  if (userName === '') {
    
    
    resultElement.innerHTML = `Hello <strong>friend!</strong>
      Hope you're having a great ${weekday}!
      <br>Can you believe you've been alive for 
      <span id="seconds-alive"><strong>${userResult}</strong></span> seconds??`
      form.name.focus();
      
    }
    
    else  {
      
  
  document.getElementById('result').innerHTML = `Hello <strong>${userName}!</strong>
  Hope you're having a great ${weekday}!
  <br>Can you believe you've been alive for 
  <span id="seconds-alive"><strong>${userResult}</strong></span> seconds??`
  form.name.focus();

  }

}

