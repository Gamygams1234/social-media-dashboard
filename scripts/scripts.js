
const main = document.getElementsByClassName('main');
const checkbox = document.getElementById("night-checkbox");

checkbox.addEventListener("change", function() {

    main[0].classList.toggle("light-theme");

  });