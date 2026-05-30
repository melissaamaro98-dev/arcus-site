// Fade + slide suave ao fazer scroll
const elements = document.querySelectorAll(".section, .hero-content, .service-item, blockquote");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// Menu que encolhe ao fazer scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  if (window.scrollY > 20) {
    nav.classList.add("nav-small");
  } else {
    nav.classList.remove("nav-small");
  }
});
