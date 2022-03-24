


// function to set display for popup
function displayCookie(){
  // FUNCTION IS SUCCESSFUL BUT RETURNS ""
let streamerVal = getCookieValByName("MOONMOON");
  // NAME IS RETURNING AS NULL!!!!!! >:( (FIX!!!)
  if(document.querySelector('.CoreText-sc-cpl358-0.ScTitleText-sc-1gsen4-0.QTwAM.fakvtp.InjectLayout-sc-588ddc-0.iXtrXW.tw-title')){
    let name = document.querySelector('.CoreText-sc-cpl358-0.ScTitleText-sc-1gsen4-0.QTwAM.fakvtp.InjectLayout-sc-588ddc-0.iXtrXW.tw-title').innerHTML;
    let streamerVal = getCookieValByName("MOONMOON");
  }

  //console.log(name);
  // THIS FUNCTION IS ABLE TO DISPLAY THE RETURNED VALUE BUT IT CURRENTLY RETURNS "" SO NOTHING
  document.getElementById("display").innerHTML = streamerVal;
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
