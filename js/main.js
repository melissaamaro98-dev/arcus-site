// Animações suaves ao fazer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".section").forEach(el => observer.observe(el));

console.log("ARCUS site loaded");
