function irPagina2() {
    window.location.href = "page2.html";
  }
  
  function irPagina3() {
    window.location.href = "page3.html";
  }
  
  const items = document.querySelectorAll(".mural-item");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const index = [...items].indexOf(entry.target);

      setTimeout(() => {
        entry.target.classList.add("visible");
      }, index * 350); // delay mágico
    }
  });
}, { threshold: 0.25 });

items.forEach(item => observer.observe(item));

  
const musica = document.getElementById("musica");
const musicBtn = document.getElementById("musicBtn");

if (musicBtn) {
  musicBtn.addEventListener("click", () => {
    musica.volume = 0.4;
    musica.play();
    musicBtn.innerHTML = "💗";
  });
}

function volver() {
  window.history.back();
}
