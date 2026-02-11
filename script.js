function irPagina2() {
    window.location.href = "page2.html";
  }
  
  function irPagina3() {
    window.location.href = "page3.html";
  }
  
  /* Animación scroll */
  const items = document.querySelectorAll(".mural-item");
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.2
  });
  
  items.forEach(item => {
    observer.observe(item);
  });
  