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

  
const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");

if (music && toggle) {

  music.volume = 0.35;

  // restaurar estado
  const isPlaying = localStorage.getItem("musicPlaying") === "true";

  if (isPlaying) {
    music.play().catch(()=>{});
    toggle.textContent = "🔊";
  }

  toggle.addEventListener("click", () => {

    if (music.paused) {
      music.play();
      toggle.textContent = "🔊";
      localStorage.setItem("musicPlaying", "true");
    } else {
      music.pause();
      toggle.textContent = "🔇";
      localStorage.setItem("musicPlaying", "false");
    }

  });
}


function volver() {
  window.history.back();
}

function irPagina4() {
  window.location.href = "page4.html";
}
