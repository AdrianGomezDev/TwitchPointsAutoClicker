


// function to set display for popup
function displayCookie(){

  // NAME IS RETURNING AS NULL
  let name = document.querySelector('.CoreText-sc-cpl358-0.ScTitleText-sc-1gsen4-0.QTwAM.fakvtp.InjectLayout-sc-588ddc-0.iXtrXW.tw-title').innerHTML;
  let streamerVal = getCookieValByName(name);

  //console.log(name);
  document.getElementById("display").innerHTML = "name";
/*  let cookie = document.cookie;
  let cookieArr = cookie.split(';');
  for(let i = 0; i<cookieArr.length; i++){
    cookieArr[i] = cookieArr[i] + "<br>";
  }

  let cookieData = cookieArr.join("");
//let x = document.cookie;
  document.getElementById("paragraph").innerHTML = cookieData;
  //document.cookie = "again";
  //document.getElementById("paragraph").innerHTML = document.cookie;*/
}

displayCookie();
