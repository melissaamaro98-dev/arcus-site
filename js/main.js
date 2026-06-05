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

// Dados dos serviços
const servicesData = {
  essencial: {
    title: "ARCUS Essencial",
    description: "O serviço ideal para quem já possui um CV estruturado, mas precisa de rigor, clareza e apresentação profissional.",
    includes: [
      "Revisão ortográfica e gramatical — eliminação de erros e inconsistências",
      "Ajustes de clareza e impacto — frases objetivas e profissionais",
      "Formatação profissional e harmonização visual"
    ],
    audience: "Profissionais com um CV já sólido que precisam apenas de revisão e refinamento.",
    pricePromo: "9,99€",
    priceOriginal: "11€"
  },
  premium: {
    title: "ARCUS Premium",
    description: "O serviço completo para quem deseja transformar o seu CV em uma ferramenta de impacto visual e narrativo.",
    includes: [
      "Reescrita profunda — reestruturação de conteúdo com foco em resultados",
      "Design premium personalizado — layout único e memorável",
      "Narrativa estratégica — alinhamento com objetivos de carreira",
      "Revisão ortográfica, gramatical e de clareza"
    ],
    audience: "Profissionais que desejam um CV diferenciador com design premium.",
    pricePromo: "24,99€",
    priceOriginal: "29€"
  },
  pro: {
    title: "ARCUS Pro",
    description: "O pacote completo para uma candidatura profissional de 360 graus.",
    includes: [
      "CV Premium — reescrita completa + design premium",
      "Carta de Motivação — personalizada e estratégica",
      "Otimização LinkedIn — perfil completo e alinhado com CV",
      "Consultoria de narrativa — orientação sobre posicionamento profissional"
    ],
    audience: "Profissionais que buscam uma candidatura coerente e impactante em todos os canais.",
    pricePromo: "49,99€",
    priceOriginal: "59€"
  }
};

// Modal de serviços
const modal = document.getElementById("service-modal");
const modalClose = document.querySelector(".modal-close");
const serviceItems = document.querySelectorAll(".service-item");

function openModal(serviceKey) {
  const service = servicesData[serviceKey];
  const modalBody = document.getElementById("modal-body");

  let includesHTML = service.includes.map(item => `<li>${item}</li>`).join("");

  modalBody.innerHTML = `
    <h2>${service.title}</h2>
    <p style="font-size: 16px; color: #d9c8e8; margin-bottom: 24px;">${service.description}</p>
    
    <h3>O que inclui:</h3>
    <ul>${includesHTML}</ul>

    <h3>Público-alvo:</h3>
    <p>${service.audience}</p>

    <div class="price-section">
      <p><span class="price-highlight">${service.pricePromo}</span> (Promoção) | <span class="price-original">${service.priceOriginal}</span> (Preço anterior)</p>
      <a href="#contacto" class="modal-btn">Contratar Serviço</a>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Event listeners
serviceItems.forEach(item => {
  item.addEventListener("click", function() {
    const serviceKey = this.getAttribute("data-service");
    openModal(serviceKey);
  });
});

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Fechar modal com ESC
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
