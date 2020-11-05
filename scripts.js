function openPortfolio(cityName) {
    var i;
    var x = document.getElementsByClassName("portfolio");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
  }
function regulateElements(cityName){
  document.getElementById(cityName).style.display = "block"
}
  
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // Get the container element
var btnContainer = document.getElementById("bar");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("bar-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    
    var current = document.querySelectorAll(("#bar .active"));
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


