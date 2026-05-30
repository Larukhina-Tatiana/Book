document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.getElementById("tooltip");

  document.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      const text = link.getAttribute("data-tooltip");
      tooltip.textContent = text;
      const rect = link.getBoundingClientRect();
      tooltip.style.top = rect.top + "px";
      tooltip.style.left = rect.right + 5 + "px";
      tooltip.style.opacity = 1;
    });

    link.addEventListener("mouseleave", () => {
      tooltip.style.opacity = 0;
    });
  });
});
