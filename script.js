
/* ========================================
   KX METAAL — JAVASCRIPT
======================================== */

document.addEventListener("DOMContentLoaded", function () {
  // Mobiele navigatie
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      const isOpen = navigation.classList.toggle("open");

      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Menu sluiten" : "Menu openen"
      );
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Menu openen");
      });
    });

    document.addEventListener("click", function (event) {
      if (
        !navigation.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Menu openen");
      }
    });
  }

  // Markeer de huidige pagina in het menu
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // Automatisch jaartal in de footer
  document.querySelectorAll("[data-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  // Eenvoudige bevestiging bij formulieren
  document.querySelectorAll("[data-confirm-submit]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        return;
      }

      const message = form.dataset.confirmMessage;

      if (message && !window.confirm(message)) {
        event.preventDefault();
      }
    });
  });
});
