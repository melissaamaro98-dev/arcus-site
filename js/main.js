// Animações de scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document
  .querySelectorAll(".hero-inner, .section, .service-item, blockquote")
  .forEach((el) => observer.observe(el));

// Nav dinâmica
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    nav.classList.add("nav-small");
  } else {
    nav.classList.remove("nav-small");
  }
});
