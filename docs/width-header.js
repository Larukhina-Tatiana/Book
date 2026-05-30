document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const main = document.querySelector(".main");

  if (!header || !main) return;

  const headerHeight = header.offsetHeight;

  // выставляем отступ для контента
  main.style.paddingTop = headerHeight + "px";

  // ограничиваем скролл: не выше нижней границы шапки
  window.addEventListener("scroll", () => {
    if (window.scrollY < headerHeight) {
      window.scrollTo(0, headerHeight);
    }
  });
});
