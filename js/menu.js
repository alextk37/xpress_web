document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("burger-icon"); // <object> с SVG
  const dropdown = document.getElementById("dropdown");
  const closeMenu = document.getElementById("close-menu");

  // Обработка загрузки SVG внутри <object>
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

  // Закрытие меню по клику на кнопку закрытия
  closeMenu.addEventListener("click", function () {
    dropdown.classList.remove("active");
  });

  // Закрытие меню по клику вне dropdown
  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("active");
    }
  });
});
