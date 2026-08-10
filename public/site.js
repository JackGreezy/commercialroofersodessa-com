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

  const request = new URLSearchParams(window.location.search).get("request");
  const requestLabels = {
    emergency: "Emergency roof leak or storm damage",
    inspection: "Commercial flat roof inspection",
    service: "Preventive maintenance service agreement",
    coating: "Roof coating or restoration review",
    replacement: "Commercial roof replacement planning",
    "roof-help": "Commercial roof help",
  };

  document.querySelectorAll("form[data-contact-form]").forEach((form) => {
    if (request && requestLabels[request]) {
      const service = form.querySelector('[name="serviceType"], [name="roofingNeed"]');
      if (service) service.value = requestLabels[request];
      const timeline = form.querySelector('[name="timeline"]');
      if (timeline && request === "emergency") timeline.value = "Emergency - active leak";
    }

    let status = form.querySelector("[data-form-status]");
    if (!status) {
      status = document.createElement("p");
      status.className = "odessa-form-status";
      status.dataset.formStatus = "";
      status.setAttribute("role", "status");
      status.setAttribute("aria-live", "polite");
      form.appendChild(status);
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const button = form.querySelector('button[type="submit"]');
      const label = button?.textContent || "Submit";
      if (button) {
        button.disabled = true;
        button.textContent = "Sending...";
      }
      status.textContent = "Sending your roof request...";
      status.dataset.state = "pending";
      try {
        const response = await fetch(form.action || "/api/submit", {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok || payload.success === false) throw new Error(payload.message || payload.error || "Request failed.");
        form.reset();
        status.textContent = payload.message || "Your roof request was received. We will follow up shortly.";
        status.dataset.state = "success";
      } catch (error) {
        status.textContent = error?.message || "We could not send your request. Please email install@commercialroofersodessa.com.";
        status.dataset.state = "error";
      } finally {
        if (button) {
          button.disabled = false;
          button.textContent = label;
        }
      }
    });
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
