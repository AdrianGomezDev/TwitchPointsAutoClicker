// script that checks in 5 second intervals
setInterval(()=> {
  // if points button exists then click on points button and log to console

  // checks if looping
  console.log("5 seconds");

  // if name element exists display it in the log
  if(document.querySelector('.CoreText-sc-cpl358-0.ScTitleText-sc-1gsen4-0.QTwAM.fakvtp.InjectLayout-sc-588ddc-0.iXtrXW.tw-title')){
    let x = document.querySelector('.CoreText-sc-cpl358-0.ScTitleText-sc-1gsen4-0.QTwAM.fakvtp.InjectLayout-sc-588ddc-0.iXtrXW.tw-title').innerHTML;

    console.log(x);
  }

  // if points button exists then click on points button and log to console
  if(document.querySelector('.ScCoreButton-sc-1qn4ixc-0.ScCoreButtonSuccess-sc-1qn4ixc-5.boGviw.iNPKuE')){
    // clicks the points box
    document.querySelector('.ScCoreButton-sc-1qn4ixc-0.ScCoreButtonSuccess-sc-1qn4ixc-5.boGviw.iNPKuE').click();

    console.log("points box clicked!");



    //adjust points log
    if(document.querySelector('.CoreText-sc-cpl358-0.ScTitleText-sc-1gsen4-0.QTwAM.fakvtp.InjectLayout-sc-588ddc-0.iXtrXW.tw-title')){

      //check if streamer already in cookie
      // grabs streamer name
      let streamer = document.querySelector('.CoreText-sc-cpl358-0.ScTitleText-sc-1gsen4-0.QTwAM.fakvtp.InjectLayout-sc-588ddc-0.iXtrXW.tw-title').innerHTML;
      setCookieByName(streamer);
      //if yes update the cookie pValue
      if(getCookieValByName(streamer) != ""){

        addPoints(streamer);
      }
      //if no create new entry into the cookie
      else{
        setCookieByName(streamer);
      }

    }

  }

  //testing for streamerval in cookie
  let value = getCookieValByName("MOONMOON");
  console.log(value);


} ,5000);



// function to add to cookie by name
function setCookieByName(streamerName){
  let name = streamerName;
  document.cookie = name + "=50;";
}

// function to add points to value by name and repalce value in cookie
function addPoints(streamerName){
  let value = getCookieValByName(streamerName);
  let name = streamerName + "=";
  let cookie = decodeURIComponent(document.cookie);
  let cookieArr = cookie.split(';');

  for(let i = 0; i<cookieArr.length; i++){
    let temp = cookieArr[i];
    if(temp.charAt(0) == ' '){
      temp.substring(1);
    }
    if(temp.indexOf(name) == 0){
      //cookie = temp.replace(value,value+50);
      cookie.replace(name + value, name + (value+50));
    }
  }
}

// function to return the value of a name (FIX: SOMETHING WRONG WITH FIRST RETURN VALUE)
function getCookieValByName(streamerName){

  let name = streamerName + "=";
  let cookie = decodeURIComponent(document.cookie);
  let cookieArr = cookie.split(';');

  for(let i = 0; i<cookieArr.length; i++){

    let temp = cookieArr[i];
    if(temp.charAt(0) == ' '){
      temp.substring(1);
    }
    if(temp.indexOf(name) == 0){
      return temp.substring(name.length,temp.length);
    }

  }
  // this is returning
  return "";

}
