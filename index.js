 // disappearing navbar
 jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 200) {
        $(".navb").css("background-color","rgba(0,0,0,0.6)");
        $(".disappear").css("top","0");
    } else {
        $(".navb").css("background","none");
        $(".disappear").css("top","-200");
    }
}); 

  // SIDENAV 
  function openNav(){
      document.getElementById("sidenav").style.width="100%";
  }
  function closeNav () {
      document.getElementById("sidenav").style.width="0";
  }

  // LOADER
    
  var myVar;
  function myFunction() {
     myVar = setTimeout(showPage, 3000);
  }
   
  function showPage() {
     document.getElementById("load").style.display = "none";
     document.getElementById("mainBod").style.display = "block";
  } 