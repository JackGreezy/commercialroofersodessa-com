document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const drawer = document.querySelector("[data-rr-mobile]");
  const burger = document.querySelector(".rr-burger");
  const closeButton = document.querySelector(".rr-x");
  const scrim = document.querySelector(".rr-scrim");

  const setMenu = (open) => {
    body.classList.toggle("rr-nav-open", open);
    drawer?.setAttribute("aria-hidden", open ? "false" : "true");
  };

  burger?.addEventListener("click", (event) => {
    event.preventDefault();
    setMenu(true);
  });
  closeButton?.addEventListener("click", (event) => {
    event.preventDefault();
    setMenu(false);
  });
  scrim?.addEventListener("click", () => setMenu(false));
  drawer?.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  const heroTrack = document.querySelector(".main-slider .slick-track");
  const heroSlides = heroTrack ? Array.from(heroTrack.children) : [];
  if (heroTrack && heroSlides.length > 1) {
    let activeSlide = 0;
    heroTrack.style.setProperty("display", "flex", "important");
    heroTrack.style.setProperty("width", `${heroSlides.length * 100}%`, "important");
    heroTrack.style.setProperty("transition", "transform 650ms ease", "important");
    heroSlides.forEach((slide) => {
      slide.style.setProperty("width", `${100 / heroSlides.length}%`, "important");
      slide.style.setProperty("flex", `0 0 ${100 / heroSlides.length}%`, "important");
    });
    const showSlide = () => {
      heroTrack.style.setProperty(
        "transform",
        `translate3d(-${activeSlide * (100 / heroSlides.length)}%, 0, 0)`,
        "important",
      );
    };
    showSlide();
    window.setInterval(() => {
      activeSlide = (activeSlide + 1) % heroSlides.length;
      showSlide();
    }, 6500);
  }

  setMenu(false);
});
