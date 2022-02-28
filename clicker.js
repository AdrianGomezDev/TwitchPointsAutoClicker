// script that checks in 5 second intervals
setInterval(()=> {
  // if points button exists then click on points button and log to console
  if(document.querySelector('.ScCoreButton-sc-1qn4ixc-0.ScCoreButtonSuccess-sc-1qn4ixc-5.boGviw.iNPKuE')){

    document.querySelector('.ScCoreButton-sc-1qn4ixc-0.ScCoreButtonSuccess-sc-1qn4ixc-5.boGviw.iNPKuE').click();

    console.log("points box clicked!");
  }
} ,5000);
