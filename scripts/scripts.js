
const main = document.getElementsByClassName('main');
const checkbox = document.getElementById("night-checkbox");

checkbox.addEventListener("change", function() {

    main[0].classList.toggle("light-theme");

  });


  ScrollTrigger.batch(".card-bg", {
    start: "top bottom",
    once: true,
    onEnter: (elements, triggers) => {
        gsap.from(elements, {
                opacity: 0,
                stagger:.2,
                duration: 1
            })
    }
})
