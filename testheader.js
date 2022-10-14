window.onscroll = function() {myFunction()}


function myFunction(){
   if (window.scrolltop > document.getElementById("head").scrolltop)
   {
      document.getElementsByClassName("head").classlist.add('cache');
   }
  else
   {
    document.getElementsByClassName("head").classlist.remove('cache');
   }
  }