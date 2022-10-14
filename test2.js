window.scroll = function() {myFunction}


function myFunction(){
   if (this.scrollTop()>0)
   {
      document.getElementByClassName("head").fadeOut();
   }
  else
   {
    document.getElementByClassName("head").fadeIn();
   }}s