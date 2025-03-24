document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const burgerIcon = document.getElementById("burger-icon");
  const dropdown = document.getElementById("dropdown");
  const closeMenu = document.getElementById("close-menu");

  const whiteSrc = "./img/elements/close-burger-white.svg";
  const redSrc = "./img/elements/close-burger-red.svg";

  const triggerPoint = 60; // Высота, после которой кнопка фиксируется

  // Открытие/закрытие меню
  burgerMenu.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdown.classList.toggle("active");
  });

  // Закрытие меню
  closeMenu.addEventListener("click", function () {
    dropdown.classList.remove("active");
  });

  // Закрытие при клике вне меню
  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target) && event.target !== burgerIcon) {
      dropdown.classList.remove("active");
    }
  });

  // Меняем иконку при наведении
  burgerIcon.addEventListener("mouseenter", function () {
    burgerIcon.src = redSrc;
  });

  burgerIcon.addEventListener("mouseleave", function () {
    burgerIcon.src = whiteSrc;
  });

  // Отслеживание прокрутки и закрепление кнопки
  window.addEventListener("scroll", function () {
    if (window.scrollY > triggerPoint) {
      burgerMenu.classList.add("fixed"); // Добавляем фиксированное положение
    } else {
      burgerMenu.classList.remove("fixed"); // Возвращаем в начальное состояние
    }
  });
});
