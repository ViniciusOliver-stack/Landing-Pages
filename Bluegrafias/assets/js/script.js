const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
   navToggler.classList.toggle("active");
   const nav = document.querySelector(".nav");
   nav.classList.toggle("open");
   if(nav.classList.contains("open")){
       nav.style.maxHeight = nav.scrollHeight + "px";
   }
   else{
       nav.removeAttribute("style");
   }
} 

//Typed
window.sr = ScrollReveal({reset: true});

sr.reveal('.container-section', {
    duration: 1000,
    delay: 500,
    distance: '-50px',
    opacity: 0
})


/*Acordion */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activeAcc");
    var painel = this.nextElementSibling;
    if (painel.style.maxHeight) {
      painel.style.maxHeight = null;
    } else {
      painel.style.maxHeight = painel.scrollHeight + "px";
    } 
  });
}