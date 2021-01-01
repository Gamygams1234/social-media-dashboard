var button = document.getElementById("btn");
var red = document.getElementsByClassName('boxes');


button.addEventListener("click", function() {

    red[0].classList.toggle("night");

  });