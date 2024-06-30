/* ----- NAVIGATION BAR FUNCTION ----- */
function navBarFunction(){
  var menuBtn = document.getElementById("navMenu");

  if(menuBtn.className === "navigation"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "navigation";
  }
}

/*=============== GSAP ANIMATION ===============*/
