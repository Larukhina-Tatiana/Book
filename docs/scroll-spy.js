// scrol-spy.js

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("article"); // всі секції-картки
  // console.log(sections);
  const navLinks = document.querySelectorAll(".nav__link"); // всі лінки меню
  // console.log(navLinks);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // зняти підсвічування з усіх лінків
          navLinks.forEach((link) => link.classList.remove("active"));

          // знайти лінк, який відповідає видимій секції
          const activeLink = document.querySelector(
            `.nav__link[href="#${entry.target.id}"]`,
          );
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    },
    {
      threshold: 0.4, // секція вважається активною, якщо видно 40% її висоти
    },
  );

  // спостерігаємо за кожною секцією
  sections.forEach((section) => observer.observe(section));
});
