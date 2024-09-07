document.addEventListener("DOMContentLoaded", (event) => {
  "use strict";

  let tabsNav = document.querySelector(".tabs__nav");
  let tabs = document.querySelectorAll(".tabs__button");
  let panes = document.querySelectorAll(".tabs__item");

  tabsNav.addEventListener("click", (event) => {
    let target = event.target;

    if (event.target.getAttribute("role") === "tab") {
      activateTab(target);
      activatePane(target);
    }
  });

  function activateTab(tab) {
    for (let i = 0; i < tabs.length; i++) {
      if (Boolean(tabs[i].getAttribute("aria-selected")) == true) {
        tabs[i].setAttribute("aria-selected", false);
      }

      if (tab == tabs[i]) {
        tabs[i].setAttribute("aria-selected", true);
      }
    }
  }

  function activatePane(selectedTab) {
    // hiding all panes
    panes.forEach((pane) => {
      if (pane.classList.contains("tabs__item--active")) {
        pane.classList.remove("tabs__item--active");
      }
    });

    tabs.forEach((tab, index) => {
      if (tab == selectedTab) {
        panes[index].classList.add("tabs__item--active");
        return;
      }
    });
  }
});
