const navToggle = document.querySelector(".nav-toggle");
const link = document.querySelector(".links");

/* let width = document.documentElement.clientWidth;  */

navToggle.addEventListener("click", () =>{
   link.classList.toggle("show-links");
  
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 610) {
        link.classList.remove("show-links");
    }

});