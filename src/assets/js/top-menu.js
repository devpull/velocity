document.addEventListener("DOMContentLoaded", (event) => {
  "use strict";

  let hamburger = document.getElementById("nav-m__hamburger");
  let header = document.getElementById("header");
  let overlay = document.getElementById("nav-overlay");

  document.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.key == "Escape") {
      overlay.click();
    }
  });

  hamburger.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.key == "Enter") {
      event.target.click();
    }
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay && overlay.classList.contains("is-opened")) {
      overlay.classList.remove("is-opened");
      overlay.style.top = "-1000px";
      hamburger.setAttribute("aria-expanded", false);
    }
  });

  hamburger.addEventListener("click", (event) => {
    if (overlay.classList.contains("is-opened")) {
      overlay.classList.remove("is-opened");
      overlay.style.top = "-1000px";
      hamburger.setAttribute("aria-expanded", false);
    } else {
      overlay.classList.add("is-opened");
      overlay.style.top = header.offsetHeight + "px";
      hamburger.setAttribute("aria-expanded", true);
    }

    console.log("header.offsetTop", header.offsetTop);
    console.log("header.offsetHeight", header.offsetHeight);
    console.log("overlay.style.top", overlay.style.top);
  });

  window.addEventListener("resize", (event) => {
    if (window.innerWidth > 768) {
      overlay.classList.remove("is-opened");
      overlay.style.top = "-1000px";
      hamburger.setAttribute("aria-expanded", false);
    }
  });
});
