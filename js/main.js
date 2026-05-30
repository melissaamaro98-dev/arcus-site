/* ------------------------------------------------------ */
/* INTERSECTION OBSERVER — animações suaves estilo GIMM   */
/* ------------------------------------------------------ */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

/* Aplica animação a todas as secções e elementos importantes */
document.querySelectorAll(".section, .hero-inner, .service-item, blockquote")
  .forEach(el => observer.observe(el));


/* ------------------------------------------------------ */
/* NAV DINÂMICA — encolhe ao fazer scroll                 */
/* ------------------------------------------------------ */

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    nav.classList.add("nav-small");
  } else {
    nav.classList.remove("nav-small");
  }
});
