
displayCookie();

// function to set display for popup
function displayCookie(){
  let cookie = document.cookie;
  let cookieArr = cookie.split(';');
  for(let i = 0; i<cookieArr.length; i++){
    cookieArr[i] = cookieArr[i] + "<br>";
  }

  let cookieData = cookieArr.join("");

  document.getElementById("display").innerHTML = cookieData;
}
