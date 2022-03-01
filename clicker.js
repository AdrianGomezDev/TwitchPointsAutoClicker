// script that checks in 5 second intervals
setInterval(()=> {
  // if points button exists then click on points button and log to console
  if(document.querySelector('.ScCoreButton-sc-1qn4ixc-0.ScCoreButtonSuccess-sc-1qn4ixc-5.boGviw.iNPKuE')){

    document.querySelector('.ScCoreButton-sc-1qn4ixc-0.ScCoreButtonSuccess-sc-1qn4ixc-5.boGviw.iNPKuE').click();

    console.log("points box clicked!");

    //adjust points log
    if(document.querySelector('CoreText-sc-cpl358-0.ScTitleText-sc-1gsen4-0.QTwAM.fakvtp.InjectLayout-sc-588ddc-0.iXtrXW.tw-title')){

      //check if streamer already in cookie
      let streamer = document.querySelector('CoreText-sc-cpl358-0.ScTitleText-sc-1gsen4-0.QTwAM.fakvtp.InjectLayout-sc-588ddc-0.iXtrXW.tw-title');
      /*let cookie = document.cookie; */
      //if yes update the cookie pValue
      if(getCookieByName(streamer) != ""){


      }
      //if no create new entry into the cookie
      else{
        setCookie(streamer);
      }




      document.cookie = streamer + "=" + pValue + ";";



    }

  }
} ,5000);


function setCookieByName(streamerName){
  let name = streamerName;
}

function addPoints(streamerName){
  
}

function getCookieByName(streamerName){

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
  return "";

}
