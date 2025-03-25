document.addEventListener("DOMContentLoaded", function () {
  // Получаем элементы
  const burgerMenu = document.getElementById("burger-menu");
  const burgerIcon = document.getElementById("burger-icon");
  const dropdown = document.getElementById("dropdown");
  const closeMenu = document.getElementById("close-menu");
  const triggerPoint = 60;

  // Открытие/закрытие меню
  burgerMenu.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdown.classList.toggle("active");
  });

  closeMenu.addEventListener("click", function () {
    dropdown.classList.remove("active");
  });

  // Закрытие при клике вне меню
  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target) && event.target !== burgerIcon) {
      dropdown.classList.remove("active");
    }
  });

  // Фиксация кнопки при скролле
  window.addEventListener("scroll", function () {
    if (window.scrollY > triggerPoint) {
      burgerMenu.classList.add("fixed");
    } else {
      burgerMenu.classList.remove("fixed");
    }
  });
});
