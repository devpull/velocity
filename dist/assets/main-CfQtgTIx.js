(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
  new MutationObserver((e) => {
    for (const s of e)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && t(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(e) {
    const s = {};
    return (
      e.integrity && (s.integrity = e.integrity),
      e.referrerPolicy && (s.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const s = o(e);
    fetch(e.href, s);
  }
})();
document.addEventListener("DOMContentLoaded", (n) => {
  let i = document.getElementById("nav-m__hamburger"),
    o = document.getElementById("header"),
    t = document.getElementById("nav-overlay");
  document.addEventListener("keyup", (e) => {
    e.preventDefault(), e.key == "Escape" && t.click();
  }),
    i.addEventListener("keyup", (e) => {
      e.preventDefault(), e.key == "Enter" && e.target.click();
    }),
    t.addEventListener("click", (e) => {
      e.target === t &&
        t.classList.contains("is-opened") &&
        (t.classList.remove("is-opened"),
        (t.style.top = "-1000px"),
        i.setAttribute("aria-expanded", !1));
    }),
    i.addEventListener("click", (e) => {
      t.classList.contains("is-opened")
        ? (t.classList.remove("is-opened"),
          (t.style.top = "-1000px"),
          i.setAttribute("aria-expanded", !1))
        : (t.classList.add("is-opened"),
          (t.style.top = o.offsetHeight + "px"),
          i.setAttribute("aria-expanded", !0));
    }),
    window.addEventListener("resize", (e) => {
      window.innerWidth > 768 &&
        (t.classList.remove("is-opened"),
        (t.style.top = "-1000px"),
        i.setAttribute("aria-expanded", !1));
    });
});
document.addEventListener("DOMContentLoaded", (n) => {
  let i = document.querySelector(".tabs__nav"),
    o = document.querySelectorAll(".tabs__button"),
    t = document.querySelectorAll(".tabs__item");
  i.addEventListener("click", (a) => {
    let r = a.target;
    a.target.getAttribute("role") === "tab" && (e(r), s(r));
  });
  function e(a) {
    for (let r = 0; r < o.length; r++)
      o[r].getAttribute("aria-selected") &&
        o[r].setAttribute("aria-selected", !1),
        a == o[r] && o[r].setAttribute("aria-selected", !0);
  }
  function s(a) {
    t.forEach((r) => {
      r.classList.contains("tabs__item--active") &&
        r.classList.remove("tabs__item--active");
    }),
      o.forEach((r, l) => {
        if (r == a) {
          t[l].classList.add("tabs__item--active");
          return;
        }
      });
  }
});
