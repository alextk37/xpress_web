document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("burger-icon");
  const dropdown = document.getElementById("dropdown");
  const closeMenu = document.getElementById("close-menu");

  burgerIcon.addEventListener("load", function () {
    const svgDoc = burgerIcon.contentDocument;
    const svgElement = svgDoc.querySelector("svg");

    if (svgElement) {
      svgElement.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdown.classList.toggle("active");
      });
    }
  });

  closeMenu.addEventListener("click", function () {
    dropdown.classList.remove("active");
  });

  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("active");
    }
  });
});
